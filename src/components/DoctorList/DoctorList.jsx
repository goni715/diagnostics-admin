import {Table} from "antd";
import {FaEdit} from "react-icons/fa";
import {AiFillDelete} from "react-icons/ai";
import {useGetDoctorsQuery} from "../../redux/features/doctor/doctorApi.js";
import ListLoading from "../Loader/ListLoading.jsx";
import {
    SetDoctorCreateModalOpen,
    SetDoctorDeleteModalOpen,
    SetDoctorEditModalOpen
} from "../../redux/features/modal/modalSlice.js";
import DoctorCreateModal from "../modal/DoctorCreateModal.jsx";
import {useDispatch} from "react-redux";
import {SetDoctor, SetDoctorId} from "../../redux/features/doctor/doctorSlice.js";
import DoctorEditModal from "../modal/DoctorEditModal.jsx";
import DoctorDeleteModal from "../modal/DoctorDeleteModal.jsx";

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
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "Phone",
        dataIndex: "phone",
    },
    {
        title: "Specialist",
        dataIndex: "specialist",
    },
    {
        title: "Experience",
        dataIndex: "experience",
    },
    {
        title: "Action",
        dataIndex: "action",
    },
];

const DoctorList = () => {
    const dispatch = useDispatch();
    const {data, isLoading, isError} = useGetDoctorsQuery();
    const doctors = data?.data || [];



    const tableData = [];


    if (!isLoading && !isError && doctors?.length > 0) {
        for (let i = 0; i < doctors.length; i++) {
            tableData.push({
                key: Number(i + 1),
                name: doctors[i]?.name,
                email: doctors[i]?.email,
                phone: doctors[i]?.phone,
                specialist: doctors[i]?.specialization,
                experience: doctors[i]?.experience,
                action: (
                    <>
                        <div className="flex gap-2">
                            <button
                                onClick={()=>{
                                    dispatch(SetDoctorId(doctors[i]?._id))
                                    dispatch(SetDoctor(doctors[i]))
                                    dispatch(SetDoctorEditModalOpen(true))
                                }}
                                className="bg-green-500 hover:bg-green-700 px-2 py-2 text-white font-bold text-md rounded-md">
                                <FaEdit size={20}/>
                            </button>

                            <button
                                onClick={()=>{
                                    dispatch(SetDoctorId(doctors[i]?._id))
                                    dispatch(SetDoctorDeleteModalOpen(true))
                                }}
                                className="bg-red-500 hover:bg-red-700 px-2 py-2 text-white font-bold text-md rounded-md">
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
                <h1 className="text-center text-3xl font-bold mb-3">Doctor List</h1>

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
                                        dispatch(SetDoctorCreateModalOpen(true));
                                    }}
                                    className="ml-3 bg-indigo-500 hover:bg-indigo-700 px-2 py-2 text-white font-bold text-md rounded-md">
                                    Add New Doctor
                                </button>
                            </div>

                            <div className="w-auto overflow-x-auto">
                                <Table  scroll={{x: true, y: 400}} columns={columns} dataSource={tableData}/>
                            </div>
                        </>
                    )
                }
            </div>

            <DoctorCreateModal/>
            <DoctorEditModal/>
            <DoctorDeleteModal/>
        </>
    )
        ;
};

export default DoctorList;