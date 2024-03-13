import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// for project 9
import store from "./PR9/Pr9Store.jsx";
import { Provider } from "react-redux";

import MainHeader from "./component/MainHeader.jsx";
import PR1 from "./PR1/PR1.jsx";
import PR2A from "./PR2/PR2A.jsx";
import PR3 from "./PR3/PR3.jsx";
import PR4 from "./PR4/PR4.jsx";
import PR5 from "./PR5/PR5.jsx";
import PR6 from "./PR6/PR6.jsx";
import PR7 from "./PR7/PR7.jsx";
import PR8 from "./PR8/PR8.jsx";
import PR9 from "./PR9/PR9.jsx";

import TICTOKTEK from "./TICTOKTEK/TICTOKTEK.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path="/" element={<PR1 />} />
        <Route path="/pr2" element={<PR2A />} />
        <Route path="/pr3" element={<PR3 />} />
        <Route path="/pr4" element={<PR4 />} />
        <Route path="/pr5" element={<PR5 />}>
          {/* <PR5 /> */}
          <Route path="about" />
          <Route path="resume" />
          <Route path="portfolio" />
          <Route path="services" />
          <Route path="testimonials" />
          <Route path="blog" />
          <Route path="contect" />
        </Route>
        <Route path="/pr6" element={<PR6 />} />
        <Route path="/pr7/*" element={<PR7 />}>
          <Route path="" />
          <Route path="add" />
          <Route path="edit" />
          <Route path="edit/:index" />
        </Route>
        <Route path="/pr8/*" element={<PR8 />}>
          <Route path="" />
          <Route path="add" />
          <Route path="edit" />
          <Route path="edit/:index" />
        </Route>
        <Provider store={store}>
          <Route path="/pr9" element={<PR9 />} />
        </Provider>
        <Route path="/tictoktek" element={<TICTOKTEK />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
