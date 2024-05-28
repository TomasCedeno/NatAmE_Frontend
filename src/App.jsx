import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LogInPage from "./pages/LogInPage";
import HomePage from "./pages/HomePage";
import RegisterCustomer from "./pages/RegisterCustomer";
import RegisterSalesRepresentativePage from "./pages/RegisterSalesRepresentativePage";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import ViewOrderPage from "./pages/ViewOrderPage";
import SalesPage from "./pages/SalesPage";
import GlobalProvider from "./utils/GlobalContext";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LogInPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/orders",
      element: <OrdersPage />,
    },
    {
      path: "/order/:orderId",
      element: <ViewOrderPage/>,
    },
    {
      path: "/customer/register",
      element: <RegisterCustomer />,
    },
    {
      path: "/sales-representative/register",
      element: <RegisterSalesRepresentativePage />,
    },
    {
      path: "/sales",
      element: <SalesPage />,
    },
    
]);

function App() {
    return (
        <div className="App">
           <GlobalProvider>
            <RouterProvider router={router} />
           </GlobalProvider>
        </div>
    );
}

export default App;
