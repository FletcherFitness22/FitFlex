import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Login from './pages/Login.jsx';
// import Vote from './pages/Vote';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp.jsx';
import Dashboard from './components/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, 
      //   path: '/matchup/:id',
      //   element: <Vote />
      // }, 
        {
        path:'/signup',
        element: <SignUp />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
