import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Landing, Login, NotFound } from "./pages/index.jsx";
import { PrivateRoutes } from "./components/PrivateRoutes.jsx";
import { Navbar } from "./components/Navbar.jsx";

export const AppRouter = () => {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
