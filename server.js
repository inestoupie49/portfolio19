mkdir awin
cd awin
mkdir backend
cd backend
npm init -y
npm install express cors axios dotenv
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

// test
app.get('/', (req, res) => {
  res.send("API OK");
});

// offres awin
app.get('/offers', async (req, res) => {
  try {
    const response = await axios.get('https://api.awin.com/pub/v1/offers', {
      headers: {
        Authorization: `Bearer ${process.env.AWIN_API_TOKEN}`
      }
    });
    res.json(response.data);
  } catch (err) {
    res.json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Serveur OK sur 5000"));


AWIN_API_TOKEN=TON_TOKEN_ICI



node server.js



