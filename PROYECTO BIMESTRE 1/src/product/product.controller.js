'use strict'

import Product from '../product/product.model.js'

export const save = async(req, res)=>{
    try {
        let data = req.body
        let product = new Product(data)
        await product. save()
        return res.send({message:'Product saved succesfully'})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message:'Error saving Product', err})
    }
}

export const update = async(req,res)=>{
    try {
        let {id}= req.params
        let data = req.body
        let updateProdcut = await Product.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        ).populate('category', [])
        return res.send({message: 'Category updated succesfully'})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error updating category'})
    }
}

export const deleteP = async(req, res)=>{
    try {
        let { id } = req.params
        let deleteProduct = await Product.deletOne({_id: id})
        if(deleteProduct.deleteCount == 0) return res.status(404).send({message: 'Category not found'})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error deleting Product'})
    }
}