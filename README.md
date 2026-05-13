# Chat Based-AI Powered Calorie and Fitness Tracking Platform

An AI-powered full-stack fitness tracking application that combines conversational calorie tracking, workout planning, macro analysis, and personalized health recommendations through an interactive chat-based interface.

---

# Features

## AI Chat-Based Calorie Tracking
- Conversational food logging system
- Smart calorie estimation
- AI-generated healthier alternatives
- Meal tracking for breakfast, lunch, snacks, and dinner
- Daily calorie goal management

## Workout Planner & Tracking
- Personalized workout plan generation
- AI-assisted workout recommendations
- Workout progress tracking
- Calories burned estimation
- Goal-based training plans

## Nutrition Dashboard
- Daily calorie tracker
- Macronutrient analysis
  - Protein
  - Carbohydrates
  - Fats
  - Fibre
- Interactive analytics dashboard

## Additional Tracking Features
- Water intake tracking
- Sleep tracking
- Step tracking
- Workout logging

## Modern UI/UX
- ChatGPT-style interface
- Responsive mobile-first design
- Progressive Web App (PWA)
- Smooth animations using Framer Motion
- Cross-platform compatibility

---

# Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- Axios

## Backend
- Node.js
- Express.js

## AI Service
- Python
- FastAPI
- Gemini AI API

## Database
- PostgreSQL

## DevOps & Deployment
- Docker
- GitHub
- Vercel
- Render

---

# Project Architecture

```text
Frontend (React PWA)
        |
        v
Backend API (Node.js + Express)
        |
 -------------------------
 |                       |
 v                       v
PostgreSQL         AI Service (FastAPI)
 Database                 |
                           v
                      Gemini API
```

---

# Folder Structure

```text
ai-fitness-tracker/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── index.css
│   │
│   └── package.json
│
├── backend/
│   ├── server.js
│   └── package.json
│
├── ai-service/
│   ├── main.py
│   └── requirements.txt
│
├── .gitignore
└── README.md
```

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-fitness-tracker.git
```

---

# Frontend Setup

## Navigate to frontend

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Start frontend server

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# Backend Setup

## Navigate to backend

```bash
cd backend
```

## Install dependencies

```bash
npm install
```

## Start backend server

```bash
node server.js
```

Backend runs on:

```text
http://localhost:5000
```

---

# AI Service Setup

## Navigate to AI service

```bash
cd ai-service
```

## Create virtual environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

## Install dependencies

```bash
pip install fastapi uvicorn google-generativeai
```

## Start AI service

```bash
uvicorn main:app --reload --port 8000
```

AI service runs on:

```text
http://localhost:8000
```

---

# Current Development Status

## Completed
- Frontend UI
- Responsive dashboard
- Chat-based interface
- GitHub setup
- Tailwind CSS integration
- Project architecture setup

## In Progress
- Authentication system
- AI calorie tracking logic
- Database integration
- Workout tracking backend

## Planned Features
- Barcode scanning
- Voice input
- Food image recognition
- Google Fit integration
- Apple Health integration

---

# Screenshots

## Dashboard UI


---

# Future Improvements

- AI-based food image recognition
- Real-time wearable integration
- Personalized nutrition coaching
- Advanced analytics dashboard
- Cloud deployment infrastructure

---

# Author

Rahul Raghavendra

GitHub:
https://github.com/rahulraghavendrar

LinkedIn:
https://linkedin.com/in/rahul-raghavendra

---

# License

This project is currently under development and intended for educational and portfolio purposes.
