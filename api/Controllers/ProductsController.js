import ProductModel from "../models/ProductModel"
const prodController = {
    get: async (req, res) => {
        try{
            const list = await ProductModel.find();
            return res.json(list);
        }catch(err){
            console.log('error -- ', err);
        }
    },
    getbyid: async (req, res) => {
        try {
            const product = await ProductModel.findOne( { _id: req.params.id});
    
            if(!product) throw Error("Product not Found!");
    
            return res.json(product);
        }catch(err){
            res.status(404).json( {error: err.message});
        }
    },
    post: async (req, res) => {
        const product = new ProductModel(req.body);
        try{
            const newProduct = await product.save();
            res.status(200).json(newProduct);
        }catch(err) {
            res.status(400).json( { error: err.message});
        }
    },
    delete: async (req, res) => {
      const { id } = req.params;
  
      try {
        await Cakes.deleteOne({
          _id: id,
          // userId: req.authId
        });
        return res.json({ deleted: true });
      } catch (err) {}
    },
    put: async (req, res) => {
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
    },
    delete: async (req, res) => {
        try{
            const removeProduct = await ProductModel.remove( { _id: req.params.id } );
            removeProduct.save();
            res.json(removeProduct);
        }catch(err) {
            res.json( { msg: true });
        }
    }
};
      export default prodController;