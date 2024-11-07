import express from 'express';
import mongoose from 'mongoose';
import router from './routes/route.js';
import cors from 'cors';
import dotenv from 'dotenv';
import { readFileSync } from 'fs';
import https from 'https';  // For HTTPS
import { Server } from 'socket.io';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/', router);

// SSL certificate paths
const options = {
  key: readFileSync('/etc/letsencrypt/live/www.skilancersolar.com/privkey.pem'), // Path to your private key
  cert: readFileSync('/etc/letsencrypt/live/www.skilancersolar.com/fullchain.pem') // Path to your full certificate
};

// Create an HTTPS server
const httpsServer = https.createServer(options, app);

// Set up Socket.IO on the HTTPS server
const io = new Server(httpsServer, {
  cors: {
    origin: "https://www.skilancersolar.com", // React app URL
    methods: ['GET', 'POST'],
  },
});

// Socket.IO connection
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for 'postData' event
  socket.on('postData', (data) => {
    console.log('Received data from client:', data);
    // Broadcast the received data to all clients
    io.emit('newData', data);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
}); // <-- Missing closing brace added here

// MongoDB Connection
async function connect() {
  await mongoose.connect('mongodb+srv://hrskilancersolar:hrskilancersolar@cluster0.syzhv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connected to MongoDB successfully');
}

// Start HTTPS server
httpsServer.listen(4000, () => {
  console.log('HTTPS server is running on port 4000');
  connect();
});


