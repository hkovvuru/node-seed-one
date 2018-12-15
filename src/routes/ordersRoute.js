import { Router } from 'express';
import { orderMethods } from '../controller';

// initialize the instance
const orderRouter = new Router();

// get the order details
orderRouter.get('/', orderMethods.totalOrders);

// get the total orders price
orderRouter.get('/orders-price', orderMethods.totalOrdersPrice);

// add the shipment details of the order
orderRouter.post('/add-order/shipement/:id', orderMethods.addOrderToShipment);

export default orderRouter;
