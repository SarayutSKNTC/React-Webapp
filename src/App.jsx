import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MainLayout from "./Layouts/MainLayout.jsx"; // เพิ่ม .jsx ถ้าไฟล์เป็น .jsx

import Homepage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import NotFound from "./Pages/NotFound.jsx";
import ProductPage from "./Pages/productPage.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
export default App;
