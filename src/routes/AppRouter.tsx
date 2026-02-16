import { Route, Routes } from "react-router-dom";
import App from "../App";



function AppRouter() {
    return (
        <>
        <Routes>
            <Route path='/home' element={<App />} />
        </Routes>
        </>
    )
}

export default AppRouter