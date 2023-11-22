const express = require('express');
const app = express();
const PORT = 3000;

const MongoClient = require('mongodb').MongoClient;
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/docker_test';

app.get('/', (_req, res) => {
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (error, db) => {
    if (error) {
      res.status(500).send('❌ [31mError[39m DB: ' + error);
    } else {
      res.send('✅ [32mConnected[39m DB');
      db.close();
    }
  });
});

app.listen(PORT, () => console.log(`✅ [32mServer[39m listening on PORT ${PORT}`));
