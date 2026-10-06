import { Product } from "../models/product.js"

export default {
    show: async (req, res) =>
    {
        const id = req.params.id
        const products = await Product.findByPk(id)
        res.json({products})
    },

    index: async (req, res) => {
        const products = await Product.findAll()
        res.json({products})
    },

    store: async (req, res) => {
        Product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            metaData: req.body.metaData,
        })
        res.json({}).status(201)
    }
}