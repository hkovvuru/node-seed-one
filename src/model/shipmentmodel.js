import mongoose from '../config/dbConfig';

const shipmentSchema = new mongoose.Schema({
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

const shipementDataModel = mongoose.model('shipment', shipmentSchema);

export default shipementDataModel;
