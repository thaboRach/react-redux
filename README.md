# React Redux

This repository provides a practical implementation example for using React with Redux for state management.

## Features

- Modern React with functional components
- Redux for predictable and centralized state management
- Organized project structure for scalability
- Ready for integration with middleware and additional libraries

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thaboRach/react-redux.git
   cd react-redux
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App

To start the development server:

```bash
npm start
# or
yarn start
```

The app should now be running at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  components/      # Reusable UI components
  store/           # Redux store configuration and slices
  App.js           # Main app component
  index.js         # Entry point
```

## Redux Concepts

### Notes

1. **Store**:  
   - The store holds the entire state of your application.  
   - State is immutable: you cannot directly change the state.  
   - To update state, make a copy of the existing state and return the new state.

2. **Actions**:  
   - Actions are payloads of information that send data from your application to your Redux store.  
   - Each action must have a `type` and may have a `payload`.  
   - Actions describe *what* should be done, not *how*.

3. **Reducers**:  
   - Reducers specify how the application's state changes in response to actions sent to the store.  
   - They take the current state and an action as arguments, and return a new state.  
   - Reducers must be pure functions and must not mutate the original state.

## Contributing

Contributions are welcome! Please open issues or submit pull requests with improvements.

## License

This project is licensed under the MIT License.