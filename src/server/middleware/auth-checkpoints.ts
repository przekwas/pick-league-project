import * as passport from 'passport';
import { RequestHandler } from 'express';

export const tokenCheckpoint: RequestHandler = (req, res, next) => {
	return passport.authenticate('bearer', (err, user) => {
		if (user) {
			req.user = user;
		}
		return next();
	})(req, res, next);
};

export const isGuest: RequestHandler = (req: any, res, next) => {
	if (req.user && req.user.role === 'guest') {
		return next();
	} else {
		res.sendStatus(401);
	}
};
