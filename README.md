# FinanceTracker — Backend (mern-backend)

Express + MongoDB backend for the FinanceTracker application. Provides REST API endpoints under `/api/*` for authentication, transactions, categories, meal management and summary data used by the frontend.

## Contents
- Overview
- Prerequisites
- Install
- Configuration (.env)
- Run
- API endpoints (overview)
- Development notes

## Prerequisites
- Node.js >= 14
- A running MongoDB instance (connection URI required)

## Install
From the `mern-backend` folder run:

```bash
cd mern-backend
npm install
```

## Configuration
Create a `.env` file in `mern-backend` with the following variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/financetracker
JWT_SECRET=your_jwt_secret_here
```

Replace `MONGO_URI` and `JWT_SECRET` with secure values for production.

## Run

Development (with auto-reload):

```bash
cd mern-backend
npm run dev
```

Production:

```bash
cd mern-backend
npm start
```

By default the server listens on `PORT` (5000 if unset).

## Scripts
- `npm run dev` — start with `nodemon` for development
- `npm start` — start production server

## Important environment variables
- `MONGO_URI` — MongoDB connection string (required)
- `JWT_SECRET` — secret used for signing JWTs (required)
- `PORT` — port to bind the server (default 5000)

## API endpoints (high level)
- `POST /api/auth/register` — register a user
- `POST /api/auth/login` — authenticate and receive JWT
- `GET/POST/PUT/DELETE /api/transactions` — transaction CRUD
- `GET/POST/PUT/DELETE /api/categories` — category CRUD
- `GET /api/summary` — aggregated summaries and charts data
- `GET/POST/PUT/DELETE /api/meals` — meal-related endpoints

Refer to the controllers in `src/controllers/` for detailed behavior and required request bodies.

## CORS
The server is configured to allow `localhost` origins (any port) for development. If deploying to production, update CORS policy in `src/app.js` accordingly.

## Troubleshooting
- If the server fails to connect to MongoDB, verify `MONGO_URI` and that MongoDB is reachable.
- If authentication fails, ensure `JWT_SECRET` is set and matches what the frontend expects.

## Contributing
- Follow the existing project structure. Run and test backend locally before opening PRs.
