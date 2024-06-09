import {Table} from "antd";
import {AiFillDelete} from "react-icons/ai";
import ListLoading from "../Loader/ListLoading.jsx";
import {
    SetAppointmentCreateModalOpen,
    SetAppointmentDeleteModalOpen, SetAppointmentEditModalOpen,
} from "../../redux/features/modal/modalSlice.js";
import {useDispatch} from "react-redux";
import moment from "moment";
import {SetAppointmentId} from "../../redux/features/appointment/appointmentSlice.js";
import AppointmentDeleteModal from "../modal/AppointmentDeleteModal.jsx";
import {FaEdit} from "react-icons/fa";
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
        title: "#Invoice",
        dataIndex: "invoice",
    },
    {
        title: "Patient Name",
        dataIndex: "name",
    },
    {
        title: "Status",
        dataIndex: "status",
    },
    {
        title: "Total Bill",
        dataIndex: "price",
    },
    {
        title: "Delivery Date",
        dataIndex: "deliveryDate",
    },

    {
        title: "Delivery Status",
        dataIndex: "deliveryStatus",
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
                invoice: patients[i]?.invoiceNumber,
                name: patients[i]?.name,
                status: (
                    <>
                        <span className={`capitalize ${patients[i]?.status==="paid" ? "text-green-500" : "text-red-500"}`}>{patients[i]?.status}</span>
                    </>
                ),
                price: patients[i]?.price,
                deliveryDate: moment(patients[i]?.deliveryDate).format('ddd MMM DD'),
                deliveryStatus: (
                    <>
                        <span className={`capitalize ${patients[i]?.deliveryStatus==="delivered" ? "text-green-500" : "text-red-500"}`}>{patients[i]?.deliveryStatus}</span>
                    </>
                ),
                date: moment(patients[i]?.createdAt).format("YYYY-MM-DD"),
                action: (
                    <>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => {
                                    dispatch(SetAppointmentId(patients[i]?._id))
                                    dispatch(SetAppointmentEditModalOpen(true))
                                }}
                                className="bg-green-500 hover:bg-green-700 duration-200 px-2 py-2 text-white font-bold text-md rounded-md">
                                <FaEdit size={20}/>
                            </button>

                            <button
                                onClick={() => {
                                    dispatch(SetAppointmentId(patients[i]?._id))
                                    dispatch(SetAppointmentDeleteModalOpen(true))
                                }}
                                className="bg-red-500 hover:bg-red-700 duration-200 px-2 py-2 text-white font-bold text-md rounded-md">
                                <AiFillDelete size={20}/>
                            </button>
                        </div>
                    </>
                ),
            });
        }

    }


    return (
        <>
            <div>
                <h1 className="text-center text-2xl font-bold mb-3">Invoice List</h1>

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

            <AppointmentDeleteModal/>
            <AppointmentEditModal/>
            <AppointmentCreateModal/>
        </>
    )
        ;
};

export default PatientList;