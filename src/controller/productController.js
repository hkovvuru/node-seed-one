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

const updateProduct = async (req, res) => {
    try {
        res.status(201).json(await productDataModel.findOneAndUpdate({ productId: req.params.id }, req.body));
    } catch (err) {
        res.status(500).send(err);
    }
};

const deleteProduct = async (req, res) => {
    try {
        res.status(200).json(await productDataModel.findOneAndDelete({ productId: req.params.id }, req.body));
    } catch (err) {
        res.status(404).send(err);
    }
};

const productMethods = {
    totalProducts,
    addProduct,
    updateProduct,
    deleteProduct,
};

export default productMethods;
