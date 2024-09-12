import React, { useState, useEffect } from 'react';
import AddProductForm from '../components/AddProductForm';
import ProductTable from '../components/ProductTable';
import { fetchProducts, addProduct, updateProduct, deleteProduct } from '../api/products';

function Product() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  // Fetch products on component mount
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  const handleAddProduct = async (product) => {
    try {
      await addProduct(product);
      loadProducts(); // Re-fetch products after adding
    } catch (error) {
      console.error('Failed to add product:', error);
    }
  };

  const handleUpdateProduct = async (updatedProduct) => {
    try {
      await updateProduct(updatedProduct);
      loadProducts(); // Re-fetch products after updating
    } catch (error) {
      console.error('Failed to update product:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      loadProducts(); // Re-fetch products after deleting
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product); // Set the product to edit
  };

  return (
    <div className='main-dash flex justify-between'>
     

      <div className='main-content w-full p-6'>
        <h2 className="text-xl font-bold mb-4">Manage Products</h2>
        <AddProductForm onAdd={handleAddProduct} productToEdit={editingProduct} onUpdate={handleUpdateProduct} />
        <ProductTable products={products} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />
      </div>
    </div>
  );
}

export default Product;
