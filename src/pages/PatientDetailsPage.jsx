import PatientDetails from "../components/Patient/PatientDetails.jsx";
import {useGetPatientQuery} from "../redux/features/patient/patientApi.js";
import {useParams} from "react-router-dom";
import PatientLoading from "../components/Loader/PatientLoading.jsx";
import UpdatePatientForm from "../components/Patient/UpdatePatientForm.jsx";


const PatientDetailsPage = () => {
    const {id} = useParams();
    const {data, isLoading, isError} = useGetPatientQuery(id);
    const patient = data?.data || {};


    if (isLoading) {
        return (
            <>
               <PatientLoading/>
            </>
        )
    }


    if (!isLoading && !isError && patient?._id) {
        return (
            <>
                <PatientDetails patient={patient}/>
                <UpdatePatientForm patient={patient}/>
            </>
        )
    }
};

export default PatientDetailsPage;