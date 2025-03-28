import React, { createContext, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import config from 'config';
import AppUniversal from "./admin/app-universal.jsx";


export const Appcontext = createContext();

const AppRouter = () => {
  const [isAuth, setIsAuth] = useState("admin");
  // const config = "/react/template/";
  return (
    <Router basename={`${config.publicPath}`}>
      <Appcontext.Provider value={{ isAuth, setIsAuth }}>
        <Routes>
          <Route path="/*" element={<AppUniversal />} />
        </Routes>
      </Appcontext.Provider>
    </Router>
  );
};

export default AppRouter;
