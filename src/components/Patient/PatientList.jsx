import {Table} from "antd";
import ListLoading from "../Loader/ListLoading.jsx";
import {
    SetAppointmentCreateModalOpen,
} from "../../redux/features/modal/modalSlice.js";
import {useDispatch} from "react-redux";
import moment from "moment";
import AppointmentDeleteModal from "../modal/AppointmentDeleteModal.jsx";
import {FaEye} from "react-icons/fa";
import AppointmentEditModal from "../modal/AppointmentEditModal.jsx";
import AppointmentCreateModal from "../modal/AppointmentCreateModal.jsx";
import {Link} from "react-router-dom";
import {useGetPatientsQuery} from "../../redux/features/patient/patientApi.js";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Phone",
        dataIndex: "phone",
    },
    {
        title: "Age",
        dataIndex: "age",
    },
    {
        title: "Gender",
        dataIndex: "gender",
    },

    {
        title: "Date",
        dataIndex: "date",
    },
    {
        title: "Action",
        dataIndex: "action",
    },
];

const PatientList = () => {
    const dispatch = useDispatch();
    const {data, isLoading, isError} = useGetPatientsQuery();
    const patients = data?.data || [];



    const tableData = [];


    if (!isLoading && !isError && patients?.length > 0) {
        for (let i = 0; i < patients.length; i++) {
            tableData.push({
                key: Number(i + 1),
                name: patients[i]?.name,
                age: patients[i]?.age,
                phone: patients[i]?.phone,
                address: patients[i]?.address,
                gender: patients[i]?.gender,
                date: moment(patients[i]?.createdAt).format("YYYY-MM-DD"),
                action: (
                    <>
                        <div className="flex space-x-2">
                            <Link
                                to={`/patients/view/${patients[i]?._id}`}
                                className="bg-green-500 hover:bg-green-700 duration-200 px-2 py-2 text-white font-bold text-md rounded-md">
                                <FaEye size={20}/>
                            </Link>
                        </div>
                    </>
                ),
            });
        }

    }


    return (
        <>
            <div>
                <h1 className="text-center text-3xl font-bold mb-3">Patient List</h1>

                {
                    isLoading ? (
                        <>
                            <ListLoading/>
                        </>
                    ) : (
                        <>
                            <div className="w-auto overflow-x-auto flex justify-end py-4">
                                <Link
                                    to="/patients/new"
                                    onClick={() => {
                                        dispatch(SetAppointmentCreateModalOpen(true));
                                    }}
                                    className="ml-3 bg-indigo-500 hover:bg-indigo-700 px-2 py-2 text-white font-bold text-md rounded-md">
                                    Add New Patient
                                </Link>
                            </div>


                            <div className="w-auto overflow-x-auto">
                                <Table columns={columns} dataSource={tableData}/>
                            </div>
                        </>
                    )
                }
            </div>

        </>
    )
        ;
};

export default PatientList;