import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import db from '../../db';
import { IPayload } from '../types/interfaces';
import config from '../../config';

const addDays = (date: Date, days: number) => {
	let result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
};

export const createToken = async (payload: IPayload) => {
	const [tokenid] = await db.tokens.insert(payload.userid);
	payload.tokenid = tokenid;
	payload.unique = crypto.randomBytes(32).toString('hex');
	const token = await jwt.sign(payload, config.auth.secret);
	let date = new Date();
	const _expires = addDays(date, 60);
	await db.tokens.update(token, payload.unique, _expires, payload.tokenid);
	return token;
};

export const validateToken = () => {};
