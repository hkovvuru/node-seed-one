import { Router } from 'express';
import userRouter from './userRoute';
import productRouter from './productRoute';

const router = new Router();

router.use('/users', userRouter);
router.use('/products', productRouter);

export default router;
