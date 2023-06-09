import PageNotFound from "components/404";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Views from "views";

const App = () => {
    return (
        <Routes>
            <Route path="/*" element={<Views />} />
            <Route path="/page-not-found" element={<PageNotFound />} />
        </Routes>
    );
};

export default App;
