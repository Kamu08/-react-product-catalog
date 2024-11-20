# React-product-catalog.
A feature-rich e-commerce web application built using React, providing an interactive shopping experience with cart management and product details.

# Live link
https://react-product-catalog-flax.vercel.app/cart



# Features
Product Listing: Display a catalog of products with name, price, and image.
Add to Cart: Add items to the cart with a dynamic cart badge displaying the count.
Product Details: Detailed page for individual products.
Responsive Design: Optimized for mobile and desktop screens.

# Installation and Running Locally
## Prerequisites
Node.js: Install from Node.js official website (version 16+ recommended).
npm or yarn: Comes with Node.js, or you can install Yarn from Yarn website.

## Steps
Clone the Repository

Open your terminal and run:

-git clone https://github.com/your-username/react-product-catalog.git

-cd react-product-catalog

-Install Dependencies

-Run the following command to install all required libraries:

npm install

Run the Development Server
Start the app locally with:

npm run dev

Open in Browser
By default, the app runs at http://localhost:5173. 
Open this URL in your browser to view the application.

# Additional Libraries and Tools
React Router: For navigation and routing between pages.
Vite: A fast development server and build tool.
Tailwind CSS: For styling components responsively and efficiently.

# Challenges Faced and Solutions
Dynamic Cart Badge

Challenge: Updating the cart icon dynamically when products are added.
Solution: Used React useState to manage cart state globally and passed the state to the NavBar component.
Toast Notification Timing

Challenge: Managing toast notification delay and position.
Solution: Used React Toastify to configure timing and alignment easily with a customizable API.
API Errors

Challenge: Handling API errors gracefully.
Solution: Added error handling in API calls and displayed fallback messages when data failed to load.
Responsive Design

Challenge: Ensuring the app looks good on all screen sizes.
Solution: Used Tailwind CSS utilities for a responsive layout and consistent styling.

# Screenshot

![s1](https://github.com/user-attachments/assets/957d9690-f45d-4710-b070-552fa40eef0a)
![s2](https://github.com/user-attachments/assets/20de0927-ffe4-4c90-9390-2f2b0a53c7ee)
