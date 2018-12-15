import { Router } from 'express';
import { userMethods } from '../controller';

const userRouter = new Router();

// add the user details
userRouter.post('/add-users', userMethods.addUser);

// get the all users details
userRouter.get('/', userMethods.users);

// search the product by the user
userRouter.get('/find-product/:id', userMethods.findProduct);

// checkout the product and update the quantity and status of an product
userRouter.post('/find-product/checkout-product/:quantity/:id', userMethods.addSelectedProduct);


export default userRouter;
