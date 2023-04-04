const { model, Schema } = require("mongoose");

const cartProductsSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: "product"
    },
    services: {
        type: Schema.Types.ObjectId,
        ref: "service"
    },
    quantity: {
        type: Number,
        default: 1
    }
}, { _id: false })

const cartServiceSchema = new Schema({

    service: {
        type: Schema.Types.ObjectId,
        ref: "periodicService"
    },

}, { _id: false })

const CartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    products: {
        type: [cartProductsSchema]
    },
    services: {
        type: [cartServiceSchema]
    },
    coupon: {
        type: Schema.Types.ObjectId,
        ref: "Coupon",
        default: null,
    }
}, {
    timestamps: true
})

module.exports = model("cart", CartSchema)