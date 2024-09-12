import React, { useState, useEffect } from 'react';
import { addProduct, updateProduct } from '../api/products'; // Import the API functions

function AddProductForm({ onAdd, productToEdit, onUpdate }) {
  const [product, setProduct] = useState({
    name: '',
    sku: '',
    category: '',
    stock: '',
    price: '',
  });

  useEffect(() => {
    if (productToEdit) {
      setProduct(productToEdit);
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (productToEdit) {
      onUpdate(product); // Call the update function if we are editing a product
    } else {
      onAdd(product); // Call the add function if we are adding a new product
    }

    setProduct({
      name: '',
      sku: '',
      category: '',
      stock: '',
      price: '',
    }); // Clear form after submission
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <label className="block">Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} className="border p-2" required />
      </div>
      <div>
        <label className="block">SKU:</label>
        <input type="text" name="sku" value={product.sku} onChange={handleChange} className="border p-2" required />
      </div>
      <div>
        <label className="block">Category:</label>
        <input type="text" name="category" value={product.category} onChange={handleChange} className="border p-2" />
      </div>
      <div>
        <label className="block">Stock:</label>
        <input type="number" name="stock" value={product.stock} onChange={handleChange} className="border p-2" />
      </div>
      <div>
        <label className="block">Price:</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} className="border p-2" step="0.01" />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {productToEdit ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
}

export default AddProductForm;
