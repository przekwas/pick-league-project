import { Router } from 'express';
import { tokenCheckpoint } from '../../middleware/auth-checkpoints';
import gamesRouter from './games';
import teamsRouter from './teams';

const router = Router();

router.use(tokenCheckpoint);
router.use('/games', gamesRouter);
router.use('/teams', teamsRouter);

export default router;
