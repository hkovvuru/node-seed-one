import { Router } from 'express';
import userRouter from './userRoute';
import productRouter from './productRoute';
import orderRouter from './ordersRoute';

const router = new Router();

router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/orders', orderRouter);

export default router;
