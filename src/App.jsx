import Layout from "./components/Layout/Layout.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PrivateRoute from "./components/routes/PrivateRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import PublicRoute from "./components/routes/PublicRoute.jsx";
import ContactListPage from "./pages/ContactListPage.jsx";
import DoctorsPage from "./pages/DoctorsPage.jsx";
import AppointmentsPage from "./pages/AppointmentsPage.jsx";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<PrivateRoute><HomePage/></PrivateRoute>}/>
                        <Route path="contacts" element={<PrivateRoute><ContactListPage/></PrivateRoute>} />
                        <Route path="doctors" element={<PrivateRoute><DoctorsPage/></PrivateRoute>} />
                        <Route path="appointments" element={<PrivateRoute><AppointmentsPage/></PrivateRoute>} />
                        <Route path="/*" element={<PrivateRoute><HomePage/></PrivateRoute>}/>
                    </Route>
                    <Route path="/login" element={<PublicRoute><LoginPage/></PublicRoute>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;