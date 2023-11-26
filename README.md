# AssignMinder

Description of the project.

## Table of Contents

- [Frontend](#frontend)
- [Backend](#backend)
- [Routes](#routes)
- [Demo Video](#demo-video)

## Frontend

This project's frontend is developed using Angular, a powerful and widely used JavaScript framework. Here's a brief overview of the frontend features:

- **Structure:** The application follows a modular structure with components, services, and styling organized for maintainability.

- **Technologies Used:**
  - Angular
  - TypeScript
  - Material UI
  - Tailwind CSS

- **Features:**
  - Responsive navigation bar and sidebar.
  - Assignment management functionalities:
    - Assignments CRUD
        - create
        - read 
        - update
        - delete

- **Additional Improvements:**
  - Integration of toolbar and sidebar.
  - User authentication with login and password.
  - User roles management (admin and user) using a login/password table.
  - Enhanced code to include "Islande" and "Isadmin" roles.

## Backend

The backend of this application is powered by Payload CMS, utilizing a RESTful API to manage data. Key backend features include:

- **CMS:** Payload CMS is used to streamline content management.

- **API:**
  - RESTful API for data interaction.
  - JWT authentication for secure access.

- **Database:**
  - MongoDB is employed as the NoSQL database.
  - Data is stored in a Docker container for efficient management.


- **Containerization:**
  - Docker is used for containerization, providing a consistent and reproducible environment.


## Routes

The application has the following routes:

- **`/`**: Landing page (USER ONLY).
- **`/login`**: User login (NOT RESTRICTED).
- **`/signup`**: User registration (NOT RESTRICTED).
- **`/home`**: Home page (ALL USERS).
- **`/admin`**: Admin dashboard (ADMIN ONLY).


## HOW TO RUN 

### Frontend (Angular)

####  1. Open a terminal and navigate to the frontend project directory:

  ```bash 

    > cd assignment-app

  ```

####  2. Install the necessary dependencies:

  ```bash
      
    > npm install   

  ```

#### 3. Start the Angular development server:


  ```bash

    > ng serve

  ```

##### The default URL for the frontend will be http://localhost:4200/. You can access your Angular application in a web browser at this address.

<br>
<hr>
<br>

### Backend (Payload CMS)

#### Open a terminal and navigate to the backend API project directory:

  ```bash

     > cd backend-api

  ```

#### Use Docker Compose to start the backend services:

  ```bash

    docker-compose up
  ```

#### The default URL for the backend/admin panel will be http://localhost:3000/admin. You can access the Payload CMS admin dashboard in a web browser at this address.

<p style="color:red">!!! Ensure that Docker is installed and running on your machine before starting the backend with Docker Compose.<p>



## Demo Video

For a detailed walkthrough of the application, you can watch the demo video [here](https://www.youtube.com/watch?v=ka8ST6KaexQ).

  [![AM](http://img.youtube.com/vi/ka8ST6KaexQ/0.jpg)](https://www.youtube.com/watch?v=ka8ST6KaexQ)








<hr>

Feel free to explore the codebase and contribute to make this project even better! If you encounter any issues or have suggestions, please open an issue or submit a pull request.

## ENJOY !!
