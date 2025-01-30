General E-Commerce Website

Project Overview:
This is a General E-Commerce website built with Next.js 14, TypeScript, and Tailwind CSS. The project includes key marketplace functionalities such as product listings, cart management, checkout, API error handling, and performance optimizations.


Folder Structure

/project-root
├── /public          # Static assets (images, icons, etc.)
├── /src
│   ├── /components # Reusable UI components
│   ├── /pages      # Next.js pages (Home, Products, Cart, etc.)
│   ├── /api        # Backend API endpoints
│   ├── /utils      # Helper functions
├── /tests          # Testing reports and scripts
├── README.md       # Project overview & instructions
├── package.json    # Dependencies & scripts
└── .gitignore      # Ignored files




Recent Updates

Performance Optimization:

Implemented lazy loading for images.
Compressed images for faster load times.
Minimized JavaScript bundles using dynamic imports.
Enabled browser caching for better speed.



Testing Enhancements:

Conducted Lighthouse performance audit (Current score: 34, planned improvements).
Achieved 100 in Best Practices & SEO, and 94 in Accessibility.
Structured API error handling to prevent failures.
Validated cart functionality for smooth product management.



Setup & Installation
1. Clone the Repository
2. Install Dependencies
3. Run the Development Server




Testing Instructions

To verify functionality, follow these steps:

1. Run Lighthouse Performance Test
Open Google Chrome, go to DevTools (Ctrl + Shift + I / Cmd + Option + I).
Navigate to the Lighthouse tab and generate a Performance Report.
Focus on suggested improvements and fixes.


2. Review API Error Handling
Test scenarios where API requests fail (e.g., network errors, invalid requests).
Ensure proper error messages and fallback UI appear correctly.


3. Validate Cart Functionality
Add items to the cart, remove them, and proceed to checkout.
Ensure correct price calculations and smooth UI interactions.


