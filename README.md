Task: Build a Blogging Platform
Objective:
Develop a feature-rich blogging platform with advanced functionalities. The platform should allow users to create, edit, and manage their blog posts, with additional features such as user authentication, rich text editing, image and video uploads, and comment management.
 
Requirements:
1. Frontend (Next.js):
Implement a UI using Next.js Minimal UI Main focused on functionalities.
Integrate rich text editor for creating and editing blog posts (e.g., Draft.js or Slate.js).
Implement user authentication using JWT (JSON Web Tokens).
Allow users to upload images and video for their blog posts (images and video is required for uploading a blog).
Display a list of blog posts with pagination.
Provide search functionality to search for blog posts by title or content.
Implement client-side form validation and error handling.

2. Backend (Node.js with Express):
Set up an Express server with a modular structure.
Implement JWT-based authentication middleware.
Create RESTful API endpoints for user authentication, blog post-CRUD operations, and comment management.
Store uploaded images or videos in a cloud storage service (e.g., AWS S3 or Cloudinary) and manage their URLs in the database.
Implement server-side pagination and search functionality for blog posts.
Implement rate limiting and security measures to prevent abuse.
 
3. Database (PostgreSQL with Prisma):
Design the database schema to support users, blog posts, and comments.
Use Prisma for ORM and database interactions.
Ensure data integrity with proper constraints and indexes.
Optimize database queries for performance, especially for pagination and search operations.
 
4. Authentication and Authorization: 
Implement user registration, login, and logout functionality.
Ensure that only authenticated users can create, edit, and delete their blog posts.
Implement role-based access control (RBAC) if needed (e.g., admin roles for managing all posts).
 
5. Comments and Interactions:
Allow users to comment on blog posts.
Implement features like comment moderation, editing, and deletion by authorized users.
Implement real-time updates for comments using WebSockets or similar technologies.
 
Deliverables:
GitHub repository containing the source code.
Documentation detailing the architecture, design decisions, and setup instructions.

