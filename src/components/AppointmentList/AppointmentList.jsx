import {Table} from "antd";
import {AiFillDelete} from "react-icons/ai";
import ListLoading from "../Loader/ListLoading.jsx";
import {
    SetAppointmentCreateModalOpen,
    SetAppointmentDeleteModalOpen, SetAppointmentEditModalOpen, SetDoctorCreateModalOpen
} from "../../redux/features/modal/modalSlice.js";
import {useDispatch} from "react-redux";
import {useGetAppointmentsQuery} from "../../redux/features/appointment/appointmentApi.js";
import moment from "moment";
import {SetAppointment, SetAppointmentId} from "../../redux/features/appointment/appointmentSlice.js";
import AppointmentDeleteModal from "../modal/AppointmentDeleteModal.jsx";
import {FaEdit} from "react-icons/fa";
import AppointmentEditModal from "../modal/AppointmentEditModal.jsx";
import AppointmentCreateModal from "../modal/AppointmentCreateModal.jsx";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Doctor",
        dataIndex: "doctor",
    },
    {
        title: "Specialist",
        dataIndex: "specialist",
    },
    {
        title: "Patient",
        dataIndex: "patient",
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
        title: "Address",
        dataIndex: "address",
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

const AppointmentList = () => {
    const dispatch = useDispatch();
    const {data, isLoading, isError} = useGetAppointmentsQuery();
    const appointments = data?.data || [];



    const tableData = [];


    if (!isLoading && !isError && appointments?.length > 0) {
        for (let i = 0; i < appointments.length; i++) {
            tableData.push({
                key: Number(i + 1),
                patient: appointments[i]?.patientName,
                age: appointments[i]?.age,
                phone: appointments[i]?.phone,
                address: appointments[i]?.address,
                doctor: appointments[i]?.doctor[0]?.name,
                specialist: appointments[i]?.doctor[0]?.specialization,
                date: moment(appointments[i]?.appointmentDate).format('ddd MMM DD'),
                action: (
                    <>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => {
                                    dispatch(SetAppointmentId(appointments[i]?._id))
                                    dispatch(SetAppointment({
                                           ...appointments[i],
                                           appointmentDate:  moment(appointments[i]?.appointmentDate).format("YYYY-MM-DD")
                                        }))
                                    dispatch(SetAppointmentEditModalOpen(true))
                                }}
                                className="bg-green-500 hover:bg-green-700 duration-200 px-2 py-2 text-white font-bold text-md rounded-md">
                                <FaEdit size={20}/>
                            </button>

                            <button
                                onClick={() => {
                                    dispatch(SetAppointmentId(appointments[i]?._id))
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
                <h1 className="text-center text-3xl font-bold mb-3">Appointment List</h1>

                {
                    isLoading ? (
                        <>
                            <ListLoading/>
                        </>
                    ) : (
                        <>
                            <div className="w-auto overflow-x-auto flex justify-end py-4">
                                <button
                                    onClick={() => {
                                        dispatch(SetAppointmentCreateModalOpen(true));
                                    }}
                                    className="ml-3 bg-indigo-500 hover:bg-indigo-700 px-2 py-2 text-white font-bold text-md rounded-md">
                                    Add New Appointment
                                </button>
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

export default AppointmentList;