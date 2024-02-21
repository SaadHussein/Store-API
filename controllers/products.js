const getAllProductsStatic = async (req, res) => {
    res.status(200).json({
        message: 'There are All Static Products.'
    });
};

const getAllProducts = async (req, res) => {
    res.status(200).json({
        message: 'There are All Products.'
    });
};

module.exports = {
    getAllProducts,
    getAllProductsStatic
};