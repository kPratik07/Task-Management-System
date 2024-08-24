# Task Management System

## Overview

The Task Management System is a backend API built using Node.js and Express.js. It provides task management functionality with secure user authentication and role-based access control. The API uses MongoDB to store data and follows best practices for code quality, including dependency injection and proper design patterns.

You can get the deployed link from the about section.

## Features

- User Registration with JWT-based Authentication
- Role-Based Access Control (Admin, User)
- CRUD Operations for Tasks
- Filtering Tasks by Priority, Status, and Assigned User
- Secure Endpoints with Route Guards and Input Validation
- Dependency Injection for Authentication, Role Management, and Task Handling

## Tech stacks

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
- ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)
- ![bcryptjs](https://img.shields.io/badge/bcryptjs-000000?style=for-the-badge&logo=javascript&logoColor=white)
- ![dotenv](https://img.shields.io/badge/dotenv-000000?style=for-the-badge&logo=dotenv&logoColor=white)
- ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

### API Endpoints

#### Authentication

- **Register User**

  - URL: `/api/auth/register`
  - Method: `POST`
  - Headers: `Content-Type: application/json`
  - Body:
    ```json
    {
      "name": "Pratik Raj",
      "email": "kpratik07@gmail.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "token": "your_jwt_token_here(will be created)"
    }
    ```

- **Login User**
  - URL: `/api/auth/login`
  - Method: `POST`
  - Headers: `Content-Type: application/json`
  - Body:
    ```json
    {
      "email": "kpratik07@gmail.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "token": "your_jwt_token_here"
    }
    ```

#### Tasks

- **Get All Tasks**

  - URL: `/api/tasks`
  - Method: `GET`
  - Headers: `Authorization: Bearer your_jwt_token_here`

- **Create a Task**

  - URL: `/api/tasks`
  - Method: `POST`
  - Headers:
    - `Content-Type: application/json`
    - `Authorization: Bearer your_jwt_token_here`
  - Body:
    ```json
    {
      "title": "New Task",
      "description": "Task description",
      "priority": "High",
      "status": "Pending",
      "assignedTo": "userId"
    }
    ```

- **Update a Task**

  - URL: `/api/tasks/:taskId`
  - Method: `PUT`
  - Headers:
    - `Content-Type: application/json`
    - `Authorization: Bearer your_jwt_token_here`
  - Body:
    ```json
    {
      "title": "Updated Task",
      "description": "Updated task description",
      "priority": "Low",
      "status": "Completed",
      "assignedTo": "userId"
    }
    ```

- **Delete a Task**
  - URL: `/api/tasks/:taskId`
  - Method: `DELETE`
  - Headers:
    - `Authorization: Bearer your_jwt_token_here`

### Testing the API with Postman

1. **Register a New User**: Make a POST request to `/api/auth/register` with the required fields in the body.
2. **Login with the Registered User**: Make a POST request to `/api/auth/login` with the user's email and password.
3. **Copy the Token from the Login Response**: Use this token to authenticate requests to protected routes.
4. **Set Authorization Header in Postman**:
   - Go to the Headers tab in Postman.
   - Add a new header:
     - Key: `Authorization`
     - Value: `Bearer your_jwt_token_here`

### Connect with MongoDB to Store and Retrieve Data

Thank you for visiting my GitHub! Explore, contribute, and let's build something amazing together!
