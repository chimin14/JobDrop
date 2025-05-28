# JobDrop  
*A dedicated gig-marketplace for Bosnia and Herzegovina*

---

## Table of Contents
1. [Overview](#overview)  
2. [Key Features](#key-features)  
3. [Technology Stack](#technology-stack)  
4. [System Architecture](#system-architecture)  
5. [Local Deployment Guide](#local-deployment-guide)  
6. [Deployment Notes](#deployment-notes)  
7. [Repository Structure](#repository-structure)  
8. [Team & Responsibilities](#team--responsibilities)  
9. [Project Links](#project-links)

---

## Overview
JobDrop connects job seekers with short-term work opportunities in Bosnia and Herzegovina, replacing informal Facebook-group hiring with a structured, secure, and mobile-friendly platform. The project was developed for **CS308 – Software Engineering** at International University of Sarajevo.

---

## Key Features
- Structured job listings with payment, location, and category data  
- Advanced filtering and search  
- Real-time messaging (Socket.IO) between posters and seekers  
- Ratings & reviews with automatic average scoring  
- Admin dashboard for user, message, and review moderation  
- Commission-free: workers keep **100%** of earnings

---

## Technology Stack

| Layer      | Tools & Frameworks                              |
|------------|-------------------------------------------------|
| Front-end  | Next.js 14, React 18, Tailwind CSS              |
| Back-end   | Node.js 18, Express 4, Socket.IO, Multer        |
| Database   | MongoDB Atlas (Mongoose ODM)                    |
| Auth       | JSON Web Tokens (JWT), bcrypt                   |
| Dev Ops    | Vercel (front-end), Render/Railway (back-end)   |
| Docs/PM    | Overleaf (LaTeX), Trello for agile sprints      |

---

## System Architecture
```

client ─┬─▶  Next.js (pages/app folder)
│
├──▶  /api/\*         REST endpoints
│
└──▶  /socket.io     WebSocket channel (chat, notifications)

Express  ────────────► MongoDB
(controllers)          (users, jobs, messages, reviews, uploads)

````
- **Roles** are handled with a single `User` document (`role: seeker | poster | admin`).  
- Real-time chat leverages **Socket.IO** with user-specific rooms.  
- Images/docs are stored locally during development or optionally via Cloudinary.

---

## Local Deployment Guide

**Prerequisites:** Node.js 18+, npm, Git, MongoDB Atlas (or local MongoDB)

```bash
# Clone repository
git clone https://github.com/chimin14/JobDrop.git
cd JobDrop

# Backend setup
cd backend
# Run this command in your backend directory to install zod
npm install zod 
npm install express@4.18

# Create .env file
cat <<EOF >.env
PORT=5001
MONGODB_URI=mongodb+srv://jobdrop:jobdrop123@cluster0.pitiiie.mongodb.net/
JWT_SECRET=ThisIsAReallySecretKey123!@#
EOF

npm run dev   # Backend at http://localhost:5001

# Seed database
node seed.js

# Frontend setup (new terminal)
cd ../jobdrop
npx nodemon server.js
npm run dev   # Frontend at http://localhost:3000
````

---

## Deployment Notes

| Tier      | Recommended Provider | Steps                                                 |
| --------- | -------------------- | ----------------------------------------------------- |
| Front-end | **Vercel**           | `vercel --prod`                                       |
| Back-end  | **Render / Railway** | Select “Node server” blueprint → add `.env` variables |
| Database  | **MongoDB Atlas**    | Free shared cluster                                   |

---

## Repository Structure

```
backend/         Express server, Mongoose models, Socket.IO
jobdrop/         Next.js client
figures/         UML diagrams (UCD.png, ERD.png)
docs/            Final report (PDF), JOBDROP.drawio
```

---

## Team & Responsibilities

| Member                                | Responsibilities                                                                                           |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Amina Jusić** (Team Representative) | Front-end UI & state; back-end integration; Socket.IO real-time; LaTeX documentation; overall coordination |
| **Džejlan Čolakhodžić**               | Front-end layouts, responsive design, component library                                                    |
| **Harun Mezit**                       | Back-end APIs, authentication, database schema; produced all UML diagrams                                  |
| **Dejan Šućur**                       | Back-end messaging & notification modules; deployment scripts; Trello sprint management                    |
| **Omer Bećić**                        | Back-end reviews/ratings, file-upload service; co-author of documentation; QA                              |

---

## Project Links

* **Final report (PDF):** [`Dokumentacija/JobDrop.pdf`](Dokumentacija/JobDrop.pdf)
* **Trello Board:** [https://trello.com/b/T5uUtwId/jobdrop](https://trello.com/b/T5uUtwId/jobdrop)

---
