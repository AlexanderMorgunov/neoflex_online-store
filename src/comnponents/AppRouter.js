import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "./Spinner/Spinner";
import Layout from "./Layout/Layout";
import Catalog from "../pages/Catalog/Catalog";
import ShoppingСart from "../pages/ShoppingСart/ShoppingСart";

const AppRouter = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Catalog />}></Route>
          <Route path="ShoppingСart" element={<ShoppingСart />}></Route>
        </Route>
        <Route path="*" element={<Catalog />}></Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
