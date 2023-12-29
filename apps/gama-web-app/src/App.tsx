import {Routes, Route} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";

function App() {
    return(
        <Routes>
            <Route path="/login" element={<LoginPage />}/>
        </Routes>
    )
}