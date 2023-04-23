# Search Page Frontend
This is a React project that provides the frontend functionality for a search page. The search page allows users to input a keyword and retrieve relevant ads from a database. The search is conducted across the company name, primary text, headline, and description fields in a single query using the aggregate and unwind functions.

# Installation
1. Clone the repository to your local machine using git clone https://github.com/Abhishekfm/ad-search-frontend
2. Navigate to the project directory using cd ad-search-frontend
3. Install the dependencies using npm install

# Usage
1. Start the development server using npm start
2. Navigate to http://localhost:3000 in your web browser
3. Enter a keyword in the search bar and it will start searching but there is button also you may click the "Search" button
4. The frontend will send a POST request to the backend to conduct the search and retrieve the ads
The retrieved ads will be displayed in a grid format on the page