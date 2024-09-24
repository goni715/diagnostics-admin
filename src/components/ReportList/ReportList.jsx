import {Table} from "antd";
import {FaEye} from "react-icons/fa";
import ListLoading from "../Loader/ListLoading.jsx";
import {
    SetReportCreateModalOpen
} from "../../redux/features/modal/modalSlice.js";
import {useDispatch} from "react-redux";
import DoctorEditModal from "../modal/DoctorEditModal.jsx";
import DoctorDeleteModal from "../modal/DoctorDeleteModal.jsx";
import {useGetReportsQuery} from "../../redux/features/report/reportApi.js";
import moment from "moment/moment.js";
import ReportCreateModal from "../modal/ReportCreateModal.jsx";
import {Link} from "react-router-dom";
import { useState } from "react";


const ReportList = () => {
    const dispatch = useDispatch();
    const {data, isLoading, isError} = useGetReportsQuery();
    const reports = data?.data || [];
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
              return (
                String(record.invoice).toLowerCase().includes(value.toLowerCase()) ||
                String(record.patient).toLowerCase().includes(value.toLowerCase()) ||
                String(record.phone).toLowerCase().includes(value.toLowerCase()) ||
                String(record.test).toLowerCase().includes(value.toLowerCase())
              );
            },
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
            title: "Test",
            dataIndex: "test",
        },
        {
            title: "Delivery",
            dataIndex: "delivery",
        },
        {
            title: "Action",
            dataIndex: "action",
        },
    ];
    

    const tableData = [];


    if (!isLoading && !isError && reports?.length > 0) {
        for (let i = 0; i < reports.length; i++) {
            tableData.push({
                key: Number(i + 1),
                name: reports[i]?.name,
                invoice: reports[i]?.invoiceNumber,
                phone: reports[i]?.phone,
                patient: reports[i]?.patient[0]?.name,
                test: reports[i]?.patient[0]?.testName,
                delivery: moment(reports[i]?.patient[0]?.deliveryDate).format('ddd MMM DD'),
                action: (
                    <>
                        <div className="flex gap-4">
                            <Link
                                to={`/reports/view/${reports[i]?._id}`}
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
          <h1 className="text-center text-2xl lg:text-3xl font-bold mb-5 italic">
            Report List
          </h1>

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

                  <button
                    onClick={() => {
                      dispatch(SetReportCreateModalOpen(true));
                    }}
                    className="bg-indigo-500 text-center hover:bg-indigo-700 px-2 py-2 text-white lg:font-bold text-md rounded-md"
                  >
                    Create New Report
                  </button>
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

        <ReportCreateModal />
        <DoctorEditModal />
        <DoctorDeleteModal />
      </>
    );
};

export default ReportList;