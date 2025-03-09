# Note-taking-API

A simple RESTful API for managing notes, built with Node.js, Express, TypeScript, and MongoDB. This API allows you to create, read, update, and delete notes.

## Features

- Create a Note: Add a new note with a title and content.

- Fetch All Notes: Retrieve a list of all notes.

- Fetch a Single Note: Retrieve a specific note by its ID.

- Update a Note: Modify the title or content of an existing note.

- Delete a Note: Remove a note by its ID.

- Error Handling: Proper error handling with meaningful messages.

- TypeScript: Strongly typed code for better maintainability.

  ## Setup

 - Node.js (v16 or higher)

- PNPM 

- MongoDB (local or cloud instance)

  ## API Endpoints

| **Method** | **Endpoint**            | **Description**                     |
|------------|-------------------------|-------------------------------------|
| `GET`      | `/`                     | Home route (health check).          |
| `GET`      | `/api/v1/notes`         | Fetch all notes.                    |
| `GET`      | `/api/v1/notes/:id`     | Fetch a single note by ID.          |
| `POST`     | `/api/v1/notes`         | Create a new note.                  |
| `PATCH`    | `/api/v1/notes/:id`     | Update a note by ID.                |
| `DELETE`   | `/api/v1/notes/:id`     | Delete a note by ID.                |

 the create Endpoints test on Postman.
Image for![postman](https://github.com/user-attachments/assets/524e1329-3654-47cf-a479-43259ea74edf)
