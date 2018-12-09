import { Router } from 'express';
import { userMethods } from '../controller';

const userRouter = new Router();

userRouter.post('/add-users', userMethods.addUser);

userRouter.get('/users', userMethods.users);

userRouter.get('/find-product/:id', userMethods.findProduct);

userRouter.post('/find-product/checkout-product/:quantity/:id', userMethods.addUserProduct);


export default userRouter;
