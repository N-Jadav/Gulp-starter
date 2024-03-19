# Gulp Starter Kit

Gulp is yet another tool from open source community to automate repetitive tasks in web development. While tools like bower, npm (Node Package Manager) helps us to download and configure re-usable packages in our application, Gulp helps us to automate many of the time consuming repetitive client side tasks.

This project serves as a demonstration of how Gulp can be utilized to automate various tasks in web development.

## Tasks

In this project, we aim to automate two simple tasks using Gulp:

1. **Removing White Spaces from HTML Files**: This task helps in optimizing HTML files by removing unnecessary white spaces.
2. **Minifying JavaScript Files**: This task reduces the size of JavaScript files by removing comments, whitespace, and unnecessary semicolons.

These tasks are defined in the `gulpfile.js`.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository**: 
   ```
   git clone <repository_url>
   ```

2. **Install Dependencies**: 
   ```
   npm install
   ```

3. **Run HTML Task**: 
   ```
   gulp html
   ```
   This command executes the task to remove white spaces from HTML files.

4. **Run JavaScript Task**: 
   ```
   gulp js
   ```
   This command executes the task to minify JavaScript files.

## Notes

- Ensure you have Node.js and npm installed on your system before proceeding.
- Make sure to review and customize the task configurations in the `gulpfile.js` according to your project requirements.

Feel free to explore and modify the tasks as needed for your projects!