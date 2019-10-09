import * as passport from 'passport';
import { RequestHandler } from 'express';
import { IReqUser } from '../utils/types/interfaces';

export const tokenCheckpoint: RequestHandler = (req, res, next) => {
	return passport.authenticate('bearer', (err, user) => {
		if (user) {
			req.user = user;
		}
		return next();
	})(req, res, next);
};

export const isGuest: RequestHandler = (req: IReqUser, res, next) => {
	if (req.user && req.user.role === 'guest') {
		return next();
	} else {
		res.sendStatus(401);
	}
};

export const isAdmin: RequestHandler = (req: IReqUser, res, next) => {
	if (req.user && req.user.role === 'admin') {
		return next();
	} else {
		res.sendStatus(401);
	}
};