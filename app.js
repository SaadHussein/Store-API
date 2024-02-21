require('dotenv').config();
require('express-async-errors');
const express = require('express');
const ProductsRoute = require('./routes/products');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>');
});

app.use('/api/v1/products', ProductsRoute);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectDB(process.env.DATABASE_URL);
        app.listen(port, () => {
            console.log('Connected To Server.');
        });
    } catch (err) {
        console.log('Error Happened when Trying To Connect To Server.');
    }
}

startServer();