const Order = require("../Models/order");
const Cart = require("../Models/Cart");
const Product = require("../Models/Product");

exports.createOrder = async (req, res) => {
  try {
    // Assuming you have a valid user ID and cart ID from the request
    const userId = req.user._id;
   // const cartId = req.body.cartId;
    console.log(userId);

    // Retrieve the cart associated with the user
    const cart = await Cart.findOne({/* _id: cartId,*/ user: userId })
      .populate("products.product")
      //.populate("services.service")
      .exec();
    console.log(cart);

    // Calculate the total price of the order
    let totalPrice = 0;
    for (const product of cart.products) {
      const productPrice = product.product.price * product.quantity;
      totalPrice += productPrice;
    }

    // Create the order object
    const order = new Order({
      user: userId,
      products: cart.products,
      totalPrice: totalPrice,
    });

    // Save the order and update the product stock
    await order.save();

    for (const product of cart.products) {
      const productId = product.product._id;
      const productQuantity = product.quantity;
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { $inc: { stock: -productQuantity } },
        { new: true }
      );
      // TODO: Handle case where updatedProduct is null
    }

    // Clear the cart
    cart.products = [];
    cart.services = [];
    cart.coupon = null;
    await cart.save();

    // Return the order object to the client
    res.status(201).json(order);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "internal server error ", error: err.message });
  }
};
