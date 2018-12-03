import mongoose from '../config/dbConfig';

const productSchema = new mongoose.Schema({
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
});

const productDataModel = mongoose.model('Product', productSchema);

export default productDataModel;
