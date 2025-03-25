const express = require('express');
const cors = require('cors');
import dotenv from 'dotenv';
import todoRoutes from './routes/todo';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/todos', todoRoutes);

app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
export default app;
