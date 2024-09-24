import { Table } from "antd";
import ListLoading from "../Loader/ListLoading.jsx";
import { SetInvoiceUpdateModalOpen } from "../../redux/features/modal/modalSlice.js";
import { useDispatch } from "react-redux";
import moment from "moment";
import { FaEdit } from "react-icons/fa";
import { useGetPatientsQuery } from "../../redux/features/patient/patientApi.js";
import InvoiceUpdateModal from "../modal/InvoiceUpdateModal.jsx";
import {
  SetInvoice,
  SetInvoiceId,
} from "../../redux/features/invoice/invoiceSlice.js";
import { useState } from "react";



const InvoiceList = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetPatientsQuery();
  const patients = data?.data || [];
  const [searchText, setSearchText] = useState("");


  const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "#Invoice",
      dataIndex: "invoice",
      filteredValue: [searchText],
      onFilter: (value, record) => {
        console.log(record);
        return (
          String(record.invoice).toLowerCase().includes(value.toLowerCase()) ||
          String(record.name).toLowerCase().includes(value.toLowerCase()) ||
          String(record.Status).toLowerCase().includes(value.toLowerCase()) || 
          String(record.DeliveryStatus).toLowerCase().includes(value.toLowerCase())
        );
      },
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


  const tableData = [];

  if (!isLoading && !isError && patients?.length > 0) {
    for (let i = 0; i < patients.length; i++) {
      tableData.push({
        key: Number(i + 1),
        invoice: patients[i]?.invoiceNumber,
        name: patients[i]?.name,
        status: (
          <>
            <span
              className={`capitalize ${
                patients[i]?.status === "paid"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {patients[i]?.status}
            </span>
          </>
        ),
        Status:  patients[i]?.status,
        price: patients[i]?.price,
        deliveryDate: moment(patients[i]?.deliveryDate).format("ddd MMM DD"),
        deliveryStatus: (
          <>
            <span
              className={`capitalize ${
                patients[i]?.deliveryStatus === "delivered"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {patients[i]?.deliveryStatus}
            </span>
          </>
        ),
        DeliveryStatus:  patients[i]?.deliveryStatus,
        date: moment(patients[i]?.createdAt).format("YYYY-MM-DD"),
        action: (
          <>
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  dispatch(SetInvoiceId(patients[i]?._id));
                  dispatch(SetInvoice(patients[i]));
                  dispatch(SetInvoiceUpdateModalOpen(true));
                }}
                className="bg-green-500 hover:bg-green-700 duration-200 px-2 py-2 text-white font-bold text-md rounded-md"
              >
                <FaEdit size={20} />
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

        {isLoading ? (
          <>
            <ListLoading />
          </>
        ) : (
          <>
            <div className="px-2 shadow-md rounded-md">
              <div className="lg:px-4 w-auto overflow-x-auto flex flex-col sm:flex-row justify-between gap-3 py-4">
                <input
                  type="text"
                  className="h-full px-3 py-2 text-base text-gray-900 outline-none border-2 border-gray-300 md:w-3/4 lg:w-1/3 rounded-md"
                  placeholder="Search..."
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
              <div className="w-auto overflow-x-auto">
                <Table
                  scroll={{ x: true, y: 400 }}
                  columns={columns}
                  dataSource={tableData}
                />
              </div>
            </div>
          </>
        )}
      </div>

      <InvoiceUpdateModal />
    </>
  );
};

export default InvoiceList;
