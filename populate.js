require('dotenv').config();
const connectDB = require('./db/connect');
const ProductDatabase = require('./models/product');
const JsonProducts = require('./products.json');

const startLoadingData = async () => {
    try {
        await connectDB(process.env.DATABASE_URL);
        await ProductDatabase.deleteMany();
        await ProductDatabase.create(JsonProducts);
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

startLoadingData();