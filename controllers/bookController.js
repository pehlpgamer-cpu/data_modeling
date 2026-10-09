// ONLINE ACTIVITY 2

import { Book } from "../models/book.js"
export default {
    show: async (req, res) =>
    {
        const id = req.params.id
        const books = await Book.findByPk(id)
        res.status(200).json({data: books})
    },

    index: async (req, res) => 
    {
        const books = await Book.findAll()
        res.status(200).json({data: books})
    },

    store: async (req, res) => 
    {
        await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            pages: req.body.pages,
            publishedAt: req.body.publishedAt,
            deletedAt: req.body.deletedAt,
        })
        res.status(201).json({})
    },

    update: async (req, res) => {
        await Book.update({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            pages: req.body.pages,
            publishedAt: req.body.publishedAt,
            deletedAt: req.body.deletedAt
        },
        {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({})
    },

    destroy: async (req, res) => {
        await Book.destroy({
            where: {
                id: req.params.id,
            },
        })
        res.status(200).json({})
    }
}