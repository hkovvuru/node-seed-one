import { Router } from 'express';
import { productMethods } from '../controller';

const productRouter = new Router();

// get the all the products details
productRouter.get('/', productMethods.totalProducts);

// add the products details
productRouter.post('/add-product', productMethods.addProduct);

// update the product details
productRouter.put('/update-product/:id', productMethods.updateProduct);

// delete the product details
productRouter.delete('/delete-product/:id', productMethods.deleteProduct)

export default productRouter;
