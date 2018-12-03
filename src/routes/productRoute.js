import { Router } from 'express';
import { productMethods } from '../controller';

const productRouter = new Router();

productRouter.get('/product', productMethods.totalProducts);

productRouter.post('/add-product', productMethods.addProduct);

export default productRouter;
