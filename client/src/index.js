// client/src/index.js

const React = require('react');
const ReactDOM = require('react-dom/client'); // Use /client for React 18 concurrent mode

// Assuming your main application component is named App.jsx or App.js
// --- MOCK APP COMPONENT FOR DEMONSTRATION ---
const App = () => {
    return (
        <div>
            <h1>MERN Testing Application Running!</h1>
            <p>React is successfully mounted. Now you can build your components.</p>
        </div>
    );
};
// --- END MOCK ---


// Get the root DOM element from index.html
const container = document.getElementById('root');

// Create a React root using the new React 18 API
const root = ReactDOM.createRoot(container);

// Render the application
root.render(
    // StrictMode helps highlight potential problems in an application.
    <React.StrictMode>
        <App />
    </React.StrictMode>
);