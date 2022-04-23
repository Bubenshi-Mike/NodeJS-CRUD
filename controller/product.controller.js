const Product = require('../model/product.model');
// @ adding new products
exports.createProduct = async (req, res) => {
  try {
    const {name, price, image, overview} = req.body;
    // @ ensuring that all fields are filled in before creating a new product.
    if (!req.body.name || !req.body.price || !req.body.image || !req.body.overview){
        res.status(400).json({
            success: false,
            msg: "Please enter the product name, cover image, price and overview."
        })
    }
    const product = await Product.create({name, price, image, overview});
    res.status(201).json({
      success: true,
      product
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      msg: err.message
    });
  }
};
// Finding a single product using id
exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({
                success: false,
                msg: "product with id" + req.params.id + "not found."
            })
        }
        res.status(200).json({
            success: true,
            msg: "Product successfully retrieved.",
            data: product
        })
    } catch (err) {
        if (err.kind === 'ObjectId' || err.name === 'NotFound'){
            return res.status(404).json({
                success: false,
                msg: "Product with id " + req.params.id + " not found."
            })
        }
        return res.status(500).json({
            success: false,
            msg: err.message || 'Some error occurred while retrieving the product'
        });
    }
}
// @ get all the created products
exports.allProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        var message = "";
        if(products === undefined || products.length == 0) {
            message = "No products found.";
        } else {
            message = 'Products successfully retrieved.'
        }
        res.status(200).json({
            success: true,
            msg: message,
            products
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: err.message || 'Some error occurred while retrieving products'
        });
    }
}
// @ Updating the product in the database.
exports.updateProduct = async (req, res, next) => {
    if (!req.body.name || !req.body.image || !req.body.price || !req.body.overview){
        res.status(400).json({
            success: false,
            msg: "Please enter the product name, cover image, price and overview."
        })
    }
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        if(!product){
            return res.status(404).json({
                success: false,
                msg: "Product with id " + req.params.id + " not found."
            })
        }
        res.status(201).json({
            success: true,
            msg: "Product with id" + req.params.id + " successfully updated.",
            data: product
        })
    } catch (err) {
        if (err.kind === 'ObjectId' || err.name === 'NotFound'){
            return res.status(404).json({
                success: false,
                msg: "Product with id " + req.params.id + " not found."
            })
        }
        return res.status(500).json({
            success: false,
            msg: err.message || "Some error occurred while updating the product."
        });
    }
};
// @ update many products at once
// @ Deleting a product from the database.
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndRemove(req.params.id);
        if(!product){
            return res.status(404).json({
                success: false,
                msg: "product with id" + req.params.id + " not found."
            })
        }
        res.status(200).json({
            success: true,
            msg: "Product successfully deleted."
        })

    } catch (err) {
        if (err.kind === 'ObjectId' || err.name === 'NotFound'){
            return res.status(404).json({
                success: false,
                msg: "Product with id " + req.params.id + "not found."
            })
        }
        return res.status(500).json({
            success: false,
            msg: err.message || "Some error occurred while deleting the product."
        });
    }
}
// @ delete all products in the Schema
exports.deleteAllProducts = async (req, res) => {
    try {
        const products = await Product.deleteMany({});
        var message = "";
        if(products === undefined || products.length == 0) {
            message = "No products found.";
        }
        res.status(200).json({
            success: true,
            msg: `${products.deletedCount} Products deleted`
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: err.message || "Some error occurred while deleting all products."
        });
    }
}
