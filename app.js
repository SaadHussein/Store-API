require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const app = express();

app.use(express.json());
app.use(notFound);
app.use(errorHandlerMiddleware);

async function startServer() {
    try {
        await connectDB(process.env.DATABASE_URL);
        app.listen(process.env.PORT, () => {
            console.log('Connected To Server.');
        });
    } catch (err) {
        console.log('Error Happened when Trying To Connect To Server.');
    }
}

startServer();