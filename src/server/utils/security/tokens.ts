import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';
import db from '../../db';
import { IPayload } from '../types/interfaces';
import config from '../../config';

const addDays = (date: Date, days: number) => {
	let result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
};

export const createToken = async (payload: IPayload) => {
	try {
		const [tokenid] = await db.tokens.insert(payload.userid);
		payload.tokenid = tokenid;
		payload.unique = crypto.randomBytes(32).toString('hex');
		const token = await jwt.sign(payload, config.auth.secret);
		let date = new Date();
		const _expires = addDays(date, 60);
		await db.tokens.update(token, payload.unique, _expires, payload.tokenid);
		return token;
	} catch (error) {
		console.log(error);
	}
};

const checkIfExpires = (startDate: Date, endDate: Date) => {
	let start = moment(startDate);
	let end = moment(endDate);
	let diffDays = end.diff(start, 'days');
	if (diffDays < 0) {
		return true;
	} else {
		return false;
	}
};

export const validateToken = async (token: string) => {
	try {
		const payload = <IPayload>jwt.decode(token);
		const [tokenInfo] = await db.tokens.match(token, payload.unique, payload.userid);
		if (tokenInfo) {
			if (checkIfExpires(tokenInfo._created, tokenInfo._expires)) {
				throw new Error('Token Expired');
			} else {
				return payload;
			}
		} else {
			throw new Error('Invalid Token');
		}
	} catch (error) {
		console.log(error);
	}
};
