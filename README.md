# Todo Application

This repository contains a simple Todo application built with React and Redux. The app allows users to manage their todos by adding, updating, deleting, and marking them as complete. It also incorporates local storage for persisting todos across browser sessions.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps, used here with Redux Toolkit for efficient state management.
- **React-Redux**: Official React bindings for Redux, enabling React components to interact with the Redux store.
- **Redux Toolkit**: The official, opinionated, batteries-included toolset for efficient Redux development, providing utilities like `createSlice` and `configureStore`.
- **LocalStorage**: HTML5 feature used to persist todos locally in the user's browser.

## Features

- **Add Todo**: Enter a new todo and click "Add Todo" to append it to the list.
- **Edit Todo**: Click the edit (📁) button to modify a todo's text and save changes.
- **Delete Todo**: Remove a todo from the list by clicking the delete (❌) button.
- **Persist Todos**: Todos are stored in local storage, ensuring they remain available even after refreshing the page.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Vtsl-patel/todoList-ReduxToolkit.git
   cd todoList-ReduxToolkit
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open to view the app in the browser.

## Project Structure

The project structure is organized as follows:

- **src/**
  - **app/**
    - **store.js**: Configures the Redux store with `configureStore`.
    - **features/**
      - **todo/**
        - **todoSlice.js**: Defines the Redux slice (`todoSlice`) with actions for adding, removing, and updating todos.
  - **components/**
    - **AddTodo.js**: Component for adding new todos.
    - **Todos.js**: Component that displays the list of todos.
    - **EachTodo.js**: Component for rendering individual todos with options to edit and delete.
  - **App.js**: Main component that integrates `AddTodo` and `Todos`.

## Using Redux in the Todo Application

Redux is utilized in this Todo application to manage the state of todos efficiently. Here's a brief overview of how Redux is integrated into the application:

### Why Redux?

Redux provides a predictable state container for JavaScript apps. It helps manage the state in a centralized manner, making the state flow more predictable and easier to debug. Redux is particularly useful in complex applications where state management becomes cumbersome.

### Key Redux Concepts Used

- **Redux Toolkit**: This project uses Redux Toolkit, which is the official, opinionated toolset for efficient Redux development. It provides utilities like `createSlice` and `configureStore` to simplify the setup and management of the Redux store.
- **React-Redux**: The official bindings for using Redux with React. It allows React components to read data from the Redux store and dispatch actions to modify the state.

### State Management

The state management for the todos is handled through a single slice:

- **todoSlice**: This slice includes actions and reducers for adding, updating, and removing todos. The `createSlice` utility from Redux Toolkit is used to define the slice, which simplifies the code by automatically generating action creators and action types.

### Reducers and Actions

- **addTodo**: Adds a new todo to the state. It generates a unique ID for each todo using `nanoid` and appends it to the list.
- **removeTodo**: Removes a todo from the state based on its ID.
- **updateTodo**: Updates the text of an existing todo identified by its ID.

### Local Storage Integration

To persist the todos across sessions, local storage is used:

- **Loading from Local Storage**: When the application initializes, it checks if there are any saved todos in local storage and loads them into the state.
- **Saving to Local Storage**: Whenever the state of todos changes (adding, updating, or deleting a todo), the updated state is saved to local storage.

### Connecting Redux to React Components

- **useDispatch**: This hook is used in React components to dispatch actions to the Redux store.
- **useSelector**: This hook is used to read data from the Redux store state.

### Example Components

- **AddTodo Component**: Uses `useDispatch` to dispatch the `addTodo` action when a new todo is added.
- **Todos Component**: Uses `useSelector` to read the list of todos from the Redux store and renders them.
- **EachTodo Component**: Handles individual todo items, allowing for editing and deleting, and dispatches corresponding actions (`updateTodo`, `removeTodo`).

By using Redux, the application maintains a single source of truth for the state, making the state management more predictable and easier to maintain. The combination of Redux Toolkit and local storage ensures that the state is efficiently managed and persisted across sessions.

## Usage

### Adding a Todo

1. Type a todo message in the input field.
2. Click "Add Todo" to append it to the list.

### Editing a Todo

1. Click the edit (📁) button next to the todo you want to modify.
2. Update the text in the input field.
3. Click "Save" to confirm the changes.

### Deleting a Todo

1. Click the delete (❌) button next to the todo you wish to remove.

### Persisting Todos

Todos are automatically saved to local storage, ensuring they are retained even after the browser is closed and reopened.

## Styling

The application uses **Tailwind CSS** for styling, applying utility classes directly to elements for a clean and responsive UI.

## Conclusion

This Todo application demonstrates the use of React with Redux for state management and local storage for data persistence. It provides a straightforward user interface for managing todos efficiently. For any questions or feedback, feel free to reach out!

---
