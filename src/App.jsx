import Layout from "./components/Layout/Layout.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PrivateRoute from "./components/routes/PrivateRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import PublicRoute from "./components/routes/PublicRoute.jsx";
import ContactListPage from "./pages/ContactListPage.jsx";
import DoctorsPage from "./pages/DoctorsPage.jsx";
import AppointmentsPage from "./pages/AppointmentsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ReportListPage from "./pages/ReportListPage.jsx";
import PatientCreatePage from "./pages/PatientCreatePage.jsx";
import PatientListPage from "./pages/PatientListPage.jsx";
import InvoiceListPage from "./pages/InvoiceListPage.jsx";
import PatientDetailsPage from "./pages/PatientDetailsPage.jsx";


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
                        <Route path="patients" element={<PrivateRoute><PatientListPage/></PrivateRoute>} />
                        <Route path="patients/new" element={<PrivateRoute><PatientCreatePage/></PrivateRoute>} />
                        <Route path="patients/view/:id" element={<PrivateRoute><PatientDetailsPage/></PrivateRoute>} />
                        <Route path="invoices" element={<PrivateRoute><InvoiceListPage/></PrivateRoute>} />
                        <Route path="reports" element={<PrivateRoute><ReportListPage/></PrivateRoute>} />
                    </Route>
                    <Route path="/login" element={<PublicRoute><LoginPage/></PublicRoute>}/>
                    <Route path="/*" element={<PrivateRoute><NotFoundPage/></PrivateRoute>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;