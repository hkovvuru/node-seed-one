import orderDataModel from '../model/orderModel';
import orderMROptions from '../services/orderService';
import shipementDataModel from '../model/shipmentmodel';

const totalOrders = async (req, res) => {
    try {
        res.status(200).json(await orderDataModel.find());
    } catch (err) {
        res.status(404).send(err);
    }
};

const deleteOrder = async (req, res) => {
    try {
        res.status(200).json(await orderDataModel.findOneAndDelete({ productId: req.params.id }, req.body));
    } catch (err) {
        res.status(404).send(err);
    }
};

const totalOrdersPrice = async (req, res) => {
    try {
        const { model: orderByModel } = await orderDataModel.mapReduce(orderMROptions);
        res.status(200).json(await orderByModel.find());
    } catch (err) {
        res.status(404).send(err);
    }
};

const addOrderToShipment = async (req, res) => {
    try {
        orderDataModel.find({ productId: req.params.id }, (order) => {
            shipementDataModel.insertMany(order);
        });
        const shippedOrder = orderDataModel.findOneAndDelete({ productId: req.params.id });
        res.status(201).json(await shippedOrder);
    } catch (err) {
        res.status(404).send(err);
    }
}

const orderMethods = {
    totalOrders,
    deleteOrder,
    totalOrdersPrice,
    addOrderToShipment,

};

export default orderMethods;
