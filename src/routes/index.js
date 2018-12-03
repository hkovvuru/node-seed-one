import { Router } from 'express';
import userRouter from './userRoute';
import productRouter from './productRoute';

const router = new Router();

router.use(userRouter);
router.use(productRouter);

export default router;
