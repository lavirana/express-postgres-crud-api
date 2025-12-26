import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware

app.use(express.json());
app.use(cors());


// Routes

// Error handling middleware


// Testing PostgreSQL connection

app.get('/test-db', async (req, res) => {
    const result = await pool.query('SELECT current_database()');
    res.json({ database: result.rows[0] });
});

// server running
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
