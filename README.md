# Task Tracker CLI

A command-line interface (CLI) application for managing tasks.

## Description

This application allows you to manage a list of tasks directly from your terminal. You can add, list, update, delete, and change the status of tasks. Tasks are stored in a `tasks.json` file.

## Getting Started

### Prerequisites

- Node.js installed on your system.

### Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

To use the task tracker, run the `app.js` file with Node.js, followed by a command and any necessary arguments:

```sh
node app.js <command> [arguments]
```

### Available Commands

The following commands are available:

*   **`list [status]`**: Lists all tasks. You can optionally filter by status (`todo`, `in-progress`, `done`).
    *   Example: `node app.js list`
    *   Example: `node app.js list in-progress`
*   **`add "<description>"`**: Adds a new task with the given description.
    *   Example: `node app.js add "Buy milk"`
*   **`delete <id>`**: Deletes the task with the specified ID.
    *   Example: `node app.js delete 1`
*   **`update <id> "<new description>"`**: Updates the description of the task with the specified ID.
    *   Example: `node app.js update 1 "Buy almond milk"`
*   **`mark-todo <id>`**: Marks the task with the specified ID as 'todo'.
    *   Example: `node app.js mark-todo 1`
*   **`mark-in-progress <id>`**: Marks the task with the specified ID as 'in-progress'.
    *   Example: `node app.js mark-in-progress 1`
*   **`mark-done <id>`**: Marks the task with the specified ID as 'done'.
    *   Example: `node app.js mark-done 1`

## Project Structure

```
.
├── app.js                   # Main application entry point
├── package.json             # Project metadata and dependencies
├── tasks.json               # Stores the tasks data
├── src/
│   ├── dispatch.js          # Command dispatcher
│   └── utils/
│       ├── commands/
│       │   ├── commandsControllers.js  # Controllers for task commands
│       │   └── index.js                # Exports commands and statuses
│       ├── middlewares/
│       │   ├── error/
│       │   │   └── errors.js           # Error handling middleware
│       │   └── unknownCommand/
│       │       └── unknown.js          # Handles unknown commands
│       └── services/
│           └── tasksServices.js        # Service functions for task operations
├── .env                     # Environment variables (ignored by git)
└── .gitignore               # Specifies intentionally untracked files
```

## How It Works

The application takes command-line arguments via `process.argv`. The [`dispatch`](src/dispatch.js) function in [src/dispatch.js](src/dispatch.js) routes the command to the appropriate controller function defined in [`commandsControllers.js`](src/utils/commands/commandsControllers.js). These controllers then use service functions from [`tasksServices.js`](src/utils/services/tasksServices.js) to interact with the `tasks.json` file, which stores the task data.
