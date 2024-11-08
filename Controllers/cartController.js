
const carts = require('../Models/cartModel')
exports.addTocartControllerApi = async (req, res) => {
    const userId = req.payload;
    const { id, title, price, description, category, image, rating, quantity } = req.body
    try {
        const existingProduct = await carts.findOne({ id, userId });
        if (existingProduct) {
            existingProduct.quantity += 1;
            existingProduct.grandTotal = existingProduct.quantity * existingProduct.price;
            await existingProduct.save();
            res.status(200).json("Item incremented")
        }
        else {
            const newProduct = new carts({ id, title, price, description, category, image, rating, quantity, grandTotal: price, userId });
            await newProduct.save();
            res.status(201).json(newProduct)
        }
    }
    catch (error) {
        res.status(401).json(error)
    }
}

exports.gettAllCartItemsControllerApi = async (req, res) => {
    const userId = req.payload;
    try {
        const allProducts = await carts.find({ userId: userId });
        res.status(200).json(allProducts)
    }
    catch (err) {
        res.status(401).json(err)
    }

}