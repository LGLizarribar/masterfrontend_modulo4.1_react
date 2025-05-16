import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./scenes/login";
import { ListPage } from "./scenes/list";
import { DetailPage } from "./scenes/detail";
import { MembersContextProvider } from "./context/members-context";
import { RickAndMortyPage } from "./scenes/rick-and-morty";

export const App = () => {
  return (
    <MembersContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/rick-and-morty" element={<RickAndMortyPage />} />
          <Route path="/rick-and-morty/:id" element={<RickAndMortyPage />} />
        </Routes>
      </Router>
    </MembersContextProvider>
  );
};
