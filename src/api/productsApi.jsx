// import axios from 'axios';

// export const fetchProducts = async () => {
//   try {
//     const response = await axios.get('https://run.mocky.io/v3/904808d5-1f87-4d71-b053-209442705722');
//     console.log(response.data);  // Log the response to check data
//     return response.data; // Return all products
//   } catch (error) {
//     console.error('Failed to fetch products:', error);
//     return []; // Return an empty array in case of failure
//   }
// };


import axios from 'axios';

const API_URL = 'https://run.mocky.io/v3/904808d5-1f87-4d71-b053-209442705722';

export const fetchProducts = async () => {
  try {
    // Check local storage for cached data
    const cachedData = localStorage.getItem('products');
    if (cachedData) {
      console.log('Using cached products');
      return JSON.parse(cachedData);
    }

    // Fetch data from API
    const response = await axios.get(API_URL, { timeout: 5000 }); // Timeout in 5 seconds
    localStorage.setItem('products', JSON.stringify(response.data)); // Cache data
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error.message);
    return []; // Return empty array on error
  }
};
