import orderDataModel from '../model/orderModel';

const resolveToObject = true;

const ordersMap = `function () {
    emit(this.productName, this.productPrice);
}`;

const ordersReduce = `function (productName, totalProductPrice) {
    
    return Array.sum(totalProductPrice);
}`;


const ordersByProductPrice = { replace: 'orderByModel' };

const orderMROptions = {
    map: ordersMap,
    reduce: ordersReduce,
    out: ordersByProductPrice,
    resolveToObject,
};

export default orderMROptions;
