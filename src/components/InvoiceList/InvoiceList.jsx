import {Table} from "antd";
import ListLoading from "../Loader/ListLoading.jsx";
import {
    SetInvoiceUpdateModalOpen,
} from "../../redux/features/modal/modalSlice.js";
import {useDispatch} from "react-redux";
import moment from "moment";
import {FaEdit} from "react-icons/fa";
import {useGetPatientsQuery} from "../../redux/features/patient/patientApi.js";
import InvoiceUpdateModal from "../modal/InvoiceUpdateModal.jsx";
import {SetInvoice, SetInvoiceId} from "../../redux/features/invoice/invoiceSlice.js";

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
                                    dispatch(SetInvoiceId(patients[i]?._id))
                                    dispatch(SetInvoice(patients[i]))
                                    dispatch(SetInvoiceUpdateModalOpen(true))
                                }}
                                className="bg-green-500 hover:bg-green-700 duration-200 px-2 py-2 text-white font-bold text-md rounded-md">
                                <FaEdit size={20}/>
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


                            <div className="w-auto overflow-x-auto">
                                <Table  scroll={{x: true, y: 400}} columns={columns} dataSource={tableData}/>
                            </div>
                        </>
                    )
                }
            </div>

           <InvoiceUpdateModal/>
        </>
    )
        ;
};

export default PatientList;