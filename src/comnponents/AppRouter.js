import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "./Spinner/Spinner";
import Layout from "./Layout/Layout";
import Catalog from "../pages/Catalog/Catalog";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const AppRouter = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Catalog />}></Route>
          <Route path="ShoppingCart" element={<ShoppingCart />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
