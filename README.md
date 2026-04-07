# Quiz Application (React + Spring Boot + MongoDB)

A full-stack quiz application that allows users to answer multiple-choice questions 
and view their score. Built with a React frontend and Spring Boot backend using MongoDB.

---

## Features
- Multiple-choice quiz questions
- Score calculation and result display
- RESTful API integration
- Dynamic question rendering
- Backend data handling using DTO pattern
- MongoDB for flexible NoSQL storage

---

## Tech Stack

### Frontend
- React (Netlify)
- JavaScript
- Bootstrap

### Backend
- Java
- Spring Boot (EC2)
- Spring Data MongoDB

### Database
- MongoDB Atlas

---

## Live Demo
- Frontend: [(Netlify URL)](https://gentle-cajeta-68b189.netlify.app/)
- Backend API: http://13.134.53.255:9090/api/quiz

## Setup
- Backend requires environment variable:
- MONGO_URI=your_mongodb_connection_string

## Project Structure
```
quiz-application/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── services/
│ │ ├── App.js
│ │ └── index.js
│
├── backend/
│ ├── src/main/java/
| | ├── config/
│ │ ├── controller/
│ │ ├── service/
│ │ ├── repository/
│ │ ├── dto/
│ │ └── model/
│ ├── application.properties
│
└── README.md
```
---

## Installation

### Backend
```
cd backend
mvn spring-boot:run

```
### Frontend
```
cd frontend
npm install
npm start
```
## API Example
```
GET /api/questions
POST /api/submit
```
## Purpose
This project demonstrates:
  - Full-stack development using React and Spring Boot
  - REST API design with DTO pattern
  - NoSQL database usage with MongoDB
  - Clean layered architecture

---
## Screenshots

### Quiz Application Screen-1

![image1](/quiz_screenshot.png)

### Quiz Application Screen-2

![image2](/quiz_screenshot2.png)  

### Quiz Result Screen
![image3](/result_screenshot.png)  

---
## Author
Gnanaparvathan Sabapathy
