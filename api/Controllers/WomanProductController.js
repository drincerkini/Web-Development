import WomanProductModel from '../models/WomanProductModel';

const womanProdController = {
    get: async (req, res) => {
        try{
            const list = await WomanProductModel.find();
            return res.json(list);
        }catch(err) {
            console.log('error -- ', err);
        }
    },
    getByID: async(req, res) => {
        try{
            const womanProd = await WomanProductModel.findOne( { _id: req.params.id} );
            if(!womanProd) throw Error("Women Product Not Found!");

            return res.json(womanProd);
        }catch(err){
            res.status(404).json( {error: err.message});
        }
    },
    post: async (req, res) => {
        const womanProd = new WomanProductModel(req.body);
        try{
            const newProd = await womanProd.save();
            res.status(200).json(newProd);
        }catch(err) {
            res.status(400).json( { error: err.message});
        }
    },
    put: async (req, res) => {
        try{
            const updatedProduct = await WomanProductModel.updateOne(
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
    },
    delete: async (req, res) => {
        try{
            const removeProduct = await WomanProductModel.remove( { _id: req.params.id } );
            removeProduct.save();
            res.json(removeProduct);
        }catch(err) {
            res.json( { msg: true });
        }
    }

}

export default womanProdController;