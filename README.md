# Backend API for Internship Assignment

This project is a backend API for managing incidents. It uses **Node.js**, **Express**, and **MongoDB** for handling and storing data. The database can be prepopulated with sample data using the `seed.js` script.

## Prerequisites

Ensure you have the following installed:
- **Node.js** (v14 or higher)
- **MongoDB** (running locally or accessible via a connection string)
- **npm** (comes with Node.js)

## Setting Up the Project

1. Clone the repository and navigate to the project directory.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following:

   ```plaintext
   PORT=8000
   DATABASE_URI=mongodb://localhost:27017
   ```

   Replace `DATABASE_URI` with your MongoDB connection string if needed.

## Prepopulating the Database

1. Ensure MongoDB is running.
2. Run the `seed.js` script to insert sample data:

   ```bash
   node seed.js
   ```

   This will insert sample incidents into the `HumanChainAI` database. You will see `Sample incidents inserted` in the terminal upon success.

## Running the Server

Start the server with:

```bash
npm run dev
```

The server will run on the port specified in the `.env` file (default: `8000`).

