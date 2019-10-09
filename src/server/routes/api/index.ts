import { Router } from 'express';
import { tokenCheckpoint } from '../../middleware/auth-checkpoints';
import gamesRouter from './games';
import teamsRouter from './teams';
import picksRouter from './picks';
import scoreboardRouter from './scoreboard';
import usersRouter from './users';
import weeksRouter from './weeks';

const router = Router();

router.use(tokenCheckpoint);
router.use('/games', gamesRouter);
router.use('/teams', teamsRouter);
router.use('/picks', picksRouter);
router.use('/scoreboard', scoreboardRouter);
router.use('/users', usersRouter);
router.use('/weeks', weeksRouter);

export default router;
