import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

// Uncomment import statement below after building queries and mutations
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

function App() {
  return (
    <div>
      <NavBar />
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
