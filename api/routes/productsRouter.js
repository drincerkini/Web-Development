import express from 'express';
import ProductModel from '../models/ProductModel';

const router = express.Router({mergeParams: true});

router.get('/', async(req, res) => {
    //logic for get method that returns the list of all products;
    try{
        const list = await ProductModel.find();
        return res.json(list);
    }catch(err){
        console.log('error -- ', err);
    }
    
});

router.get('/:id', async(req, res) => {
    //logic for get by id product that returns one product based on the given id
    try {
        const product = await ProductModel.findOne( { _id: req.params.id});

        if(!product) throw Error("Product not Found!");

        return res.json(product);
    }catch(err){
        res.status(404).json( {error: err.message});
    }
});

router.post('/', async(req, res) => {

    ///logic for post method 
    const product = new ProductModel(req.body);
    try{
        const newProduct = await product.save();
        res.status(200).json(newProduct);
    }catch(err) {
        res.status(400).json( { error: err.message});
    }
});

router.put('/:id', async(req, res) => {
    //logic for put(edit or update) method

    try{
        const updatedProduct = await ProductModel.updateOne(
            { _id: req.params.id },
            {$set : {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                category: req.body.category,
                image: req.body.image
            }}
        )
        const result = updatedProduct.save();
        res.json( result );
    }catch(err){
        res.json({ msg: err});
    }
});

router.delete('/:id', async(req, res) => {
    //the logic for delete method for products
    try{
        const removeProduct = await ProductModel.remove( { _id: req.params.id } );
        removeProduct.save();
        res.json(removeProduct);
    }catch(err) {
        res.json( { msg: true });
    }
})

export default router;