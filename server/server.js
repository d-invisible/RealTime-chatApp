import express from "express";
import 'dotenv/config';
import cors from 'cors';
import http from 'http';


const app = express();
const server = http.createServer(app);

//Middleware setup
app.use(cors());
app.use(express.json({ limit: '4mb' }));


app.use('/api/status', (req, res) => res.send('Server is Live'));


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
