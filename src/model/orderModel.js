import mongoose from '../config/dbConfig';

const orderSchema = new mongoose.Schema({
    productId: {
        type: Number,
    },
    productName: {
        type: String,
    },
    productQuantity: {
        type: Number,
    },
    productStatus: {
        type: String,
    },
    productPrice: {
        type: Number,
    },
});

const orderDataModel = mongoose.model('Order', orderSchema);

export default orderDataModel;
