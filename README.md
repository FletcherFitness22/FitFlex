# FitFlex

This is a web application that allows users to create profiles, search and view exercises, and favorite/unfavorite exercises. It is built using Bootstrap, React, Express, and MongoDB.

*As a user, I want to be able to search different exercise ideas and save them to my favorites.

## Actual Behavior

User authentication: Users can sign up, log in, and log out.
User profiles: Users can create profiles with information such as username, email, and profile picture.
Exercise search: Users can search for exercises based on keywords.
Exercise viewing: Users can view details of individual exercises, including description, images, and instructions.
Favorite exercises: Users can favorite/unfavorite exercises, and view their list of favorite exercises.
Responsive design: The application is optimized for use on desktop and mobile devices.

## Technologies Used

Frontend:
React: A JavaScript library for building user interfaces.
Bootstrap: A popular CSS framework for building responsive and mobile-first websites.
React Router: A library for managing routes in a React application.
Backend:
Express: A web application framework for Node.js.
MongoDB: A NoSQL database used for storing user profiles and exercise data.
Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
JSON Web Tokens (JWT): Used for authentication and authorization.

## Installation

Clone the repository:
bash
Copy code
git clone git@github.com:FletcherFitness22/FitFlex.git
Navigate to the project directory:
bash
Copy code
cd fitness-app
Install dependencies for the frontend:
bash
Copy code
cd client
npm install
Install dependencies for the backend:
bash
Copy code
cd ../server
npm install
Set up MongoDB:

Install MongoDB if you haven't already: MongoDB Installation Instructions
Create a MongoDB database for the application.
Set up environment variables:

Create a .env file in the server directory.
Add the following environment variables to the .env file:
plaintext
Copy code
PORT=5000
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
Replace your-mongodb-uri with the URI of your MongoDB database, and your-jwt-secret with a secret key for JWT.

Start the backend server:

bash
Copy code
npm start
In a separate terminal, start the frontend development server:
bash
Copy code
cd ../client
npm start
Open your browser and navigate to http://localhost:3000 to view the application.

## Usage

Sign up for an account to create a profile.
Log in to access the main features of the application.
Use the search bar to search for exercises by keywords.
Click on an exercise to view details.
Click the "Favorite" button to add an exercise to your favorites list, or "Unfavorite" to remove it.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.