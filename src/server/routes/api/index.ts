import { Router } from 'express';
import gamesRouter from './games';
import teamsRouter from './teams';

const router = Router();

router.use('/games', gamesRouter);
router.use('/teams', teamsRouter);

export default router;
