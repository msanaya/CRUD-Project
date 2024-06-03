import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/products.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/products', productRoutes);

app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('HELLO FROM HOMEPAGE');
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));