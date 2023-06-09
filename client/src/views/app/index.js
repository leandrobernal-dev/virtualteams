import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";

export default function AppViews() {
    return (
        <Routes>
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route
                path="*"
                element={<Navigate to={"/page-not-found"} replace={true} />}
            />
        </Routes>
    );
}
