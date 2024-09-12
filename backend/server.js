const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
app.use(cors());
app.use(express.json());

// Connect to SQLite3 database
const db = new sqlite3.Database('products.db');

// Create table if not exists
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, name TEXT, sku TEXT, category TEXT, stock INTEGER, price REAL)');
});

// API Routes

// Get all products
app.get('/products', (req, res) => {
  db.all('SELECT * FROM products', [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

// Add a new product
app.post('/products', (req, res) => {
  const { name, sku, category, stock, price } = req.body;
  db.run('INSERT INTO products (name, sku, category, stock, price) VALUES (?, ?, ?, ?, ?)', [name, sku, category, stock, price], function(err) {
    if (err) {
      return console.error(err.message);
    }
    res.status(201).json({ id: this.lastID });
  });
});

// Update a product
app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, sku, category, stock, price } = req.body;
  db.run('UPDATE products SET name = ?, sku = ?, category = ?, stock = ?, price = ? WHERE id = ?', [name, sku, category, stock, price, id], function(err) {
    if (err) {
      return console.error(err.message);
    }
    res.status(200).send();
  });
});

// Delete a product
app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM products WHERE id = ?', id, function(err) {
    if (err) {
      return console.error(err.message);
    }
    res.status(200).send();
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
