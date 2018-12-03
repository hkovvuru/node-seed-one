import userDataModel from '../model/userModel';
import productDataModel from '../model/productModel';

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

const addUserProduct = async (req, res) => {
    try {
        const newProduct = new productDataModel(req.body);
        res.status(201).json(await userDataModel.save());
    } catch (err) {
        res.status(500).send(err);
    }
}


const userMethods = {
    users,
    addUser,
    findProduct,
    addUserProduct,
};

export default userMethods;
