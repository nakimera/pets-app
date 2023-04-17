import {
  createBrowserRouter,
  RouterProvider,} from "react-router-dom";
import FilterPage from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <FilterPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
