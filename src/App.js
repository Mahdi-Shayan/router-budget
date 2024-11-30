import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// Styles
import './styles/main.scss';
import './styles/intro.scss';
import './styles/dashboard.scss';
import './styles/error.scss'

// libary 
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Layouts
import Main, { MainLoader } from "./layouts/Main";

// pages
import Dasboard, { dashboardAction, dashboardLoader } from "./pages/Dasboard";
import ExpensesPage, { expensesLoader } from "./pages/ExpensesPage";
import Error from "./pages/Error";

// Actions
import logoutAction from "./actions/logoutAction";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route 
        path="/react-project" 
        element={<Main />}
        loader={MainLoader}
        errorElement={<Error />}
      >
        <Route index element={<Dasboard />} 
          loader={dashboardLoader}
          action={dashboardAction}
          errorElement={<Error />}
          /> 
        <Route path="expenses" element={<ExpensesPage />} 
          loader={expensesLoader}
          /> 
        <Route path="logout" action={logoutAction}/> 
      </Route>
      <Route path="*" element={<Error />}/>
    </Route>
  )
)

function App() {
  return (<>
      <RouterProvider router={router} />
      <ToastContainer />
  </>);
}

export default App;
