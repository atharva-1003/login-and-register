# Automation Demo Project

A simple full-stack application designed for testing automation tools.

## Structure
- `backend/`: Node.js Express server.
- `frontend/`: Vanilla JavaScript web app.

## Setup & Running

### 1. Start the Backend
```bash
cd backend
npm install
node server.js
```
The server will run at `http://localhost:3000`.

### 2. Start the Frontend (React)
```bash
cd frontend
npm install
npm run dev
```
The frontend will typically run at `http://localhost:5173`.

## Features for Automation
- **Greeting Test**: Click "Get Greeting" to see a simple response.
- **Data Fetch Test**: Click "Fetch Data" to populate a list from the backend.
- **Submission Test**: Enter a name and click "Submit" to test a POST request.
