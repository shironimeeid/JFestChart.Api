const express = require('express');
const fs = require('fs'); // Membutuhkan modul filesystem untuk membaca file
const app = express();
const cors = require('cors'); // Setelah menginstal dengan npm install cors
app.use(cors());
const port = process.env.PORT || 3000;


app.use(express.json());

// Di bagian atas file, tambahkan
const path = require('path');


app.get('/event', (req, res) => {
  fs.readFile('event.json', (err, data) => {
    if (err) {
      res.status(500).send({ error: 'Tidak dapat membaca file event.json' });
      return;
    }
    const events = JSON.parse(data);
    res.send(events);
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
