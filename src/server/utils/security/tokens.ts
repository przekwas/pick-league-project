import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import db from '../../db';
import { IPayload } from '../../utils/types/interfaces';

export const createToken = async (payload: IPayload) => {
	const result = await db.tokens.insert(payload.userid);
};

export const validateToken = () => {};
