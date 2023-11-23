const express = require('express');
const app = express();
const PORT = 3000;

const { MongoClient } = require('mongodb');
const mongoUri = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

app.get('/', async (_req, res) => {
  try {
    const client = new MongoClient(mongoUri, {serverSelectionTimeoutMS: 3000});
    await client.connect();
    await client.close();
    res.send('✅ Connected DB');
  } catch (error) {
    res.status(500).send('❌ Error DB: ' + error);
  }
});

app.listen(PORT, () => console.log(`✅ [32mServer[39m listening on PORT ${PORT}`));
