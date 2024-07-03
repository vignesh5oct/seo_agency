import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { About, Body, ContactUs, Services } from './components';
import AppLayout from './AppLayout';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          path: "/",
          element: <Body />
        },
        {
          path: "/about",
          element: <About />
        }, {
          path: "/services",
          element: <Services />
        }, {
          path: "/contact",
          element: <ContactUs />
        }
      ]
    },
  ])
  return (
    <div className='App'>
      <RouterProvider router={appRouter} />
    </div>
  );


}

export default App;
