import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';
import db from '../db';
import { comparePassword } from '../utils/security/passwords';
import { IUserTable } from '../utils/types/interfaces';

passport.use(
	new LocalStrategy.Strategy(
		{
			usernameField: 'email'
		},
		async (email, password, done) => {
			try {
				let [user]: IUserTable[] = await db.users.findEmail(email);
				if (user && comparePassword(password, user.hash)) {
					delete user.hash;
					done(null, user);
				} else {
					done(null, false);
				}
			} catch (error) {
				console.log(error);
				done(error);
			}
		}
	)
);
