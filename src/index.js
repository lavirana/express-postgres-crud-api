import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware

app.use(express.json());
app.use(cors());


// Routes

// Error handling middleware

// server running
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
