import userDataModel from '../model/userModel';
import productDataModel from '../model/productModel';
import orderDataModel from '../model/orderModel';

const users = async (req, res) => {
    try {
        res.status(200).json(await userDataModel.find());
    } catch (err) {
        res.status(500).send(err);
    }
};

const addUser = async (req, res) => {
    try {
        const newUser = new userDataModel(req.body);
        res.status(200).json(await newUser.save());
    } catch (err) {
        res.status(404).send(err);
    }
};

const findProduct = async (req, res) => {
    try {
        res.status(201).json(await productDataModel.find({ productId: req.params.id }));
    } catch (err) {
        res.status(500).send(err);
    }
};

/* const addUserProduct = async (req, res) => {
    try {
        productDataModel.findOne({ productId: req.params.id }, (error, data) => {
            if (error) { return handleError(error); }
            productDataModel.data = data;
            console.log(productDataModel.data);
            res.status(201).json(productDataModel.data);
            res.end();
        });
    } catch (err) { res.status(404).send(err); }
}; */


const addUserProduct = async (req, res) => {
    try {
        productDataModel.find({ productId: req.params.id }, (err, data) => {
            orderDataModel.insertMany(data);
        });
        const result = orderDataModel.findOneAndUpdate({ productId: req.params.id }, { productQuantity: req.params.quantity, productStatus: 'Order confirmed' });
        res.status(201).json(await result);
    } catch (err) {
        res.status(500).send(err);
    }
};


const userMethods = {
    users,
    addUser,
    findProduct,
    addUserProduct,
};

export default userMethods;
