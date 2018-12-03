import productDataModel from '../model/productModel';

const totalProducts = async (req, res) => {
    try {
        res.status(200).json(await productDataModel.find());
    } catch (err) {
        res.status(404).send(err);
    }
};

const addProduct = async (req, res) => {
    try {
        const newProduct = new productDataModel(req.body);
        res.status(200).json(await newProduct.save());
    } catch (err) {
        res.status(404).send(err);
    }
};

const productMethods = {
    totalProducts,
    addProduct,
};

export default productMethods;
