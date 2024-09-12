import axios from 'axios';

const API_URL = 'http://localhost:3000/products'; // Replace with your backend API URL

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const addProduct = async (product) => {
    try {
      await axios.post(API_URL, product);
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  };

  export const updateProduct = async (product) => {
    try {
      await axios.put(`${API_URL}/${product.id}`, product);
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  };

  export const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  };
  
