import { Table } from "antd";
import ListLoading from "../Loader/ListLoading.jsx";
import { SetAppointmentCreateModalOpen } from "../../redux/features/modal/modalSlice.js";
import { useDispatch } from "react-redux";
import moment from "moment";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetPatientsQuery } from "../../redux/features/patient/patientApi.js";
import { useState } from "react";

const PatientList = () => {
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
      title: "Name",
      dataIndex: "name",
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return (
          String(record.name).toLowerCase().includes(value.toLowerCase()) ||
          String(record.key).toLowerCase().includes(value.toLowerCase()) ||
          String(record.phone).toLowerCase().includes(value.toLowerCase()) ||
          String(record.age).toLowerCase().includes(value.toLowerCase()) ||
          String(record.male).toLowerCase().includes(value.toLowerCase())
        );
      },
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
                className="bg-green-500 hover:bg-green-700 duration-200 px-2 py-2 text-white font-bold text-md rounded-md"
              >
                <FaEye size={20} />
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
        <h1 className="text-center text-2xl font-bold mb-3">Patient List</h1>

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

                <Link
                  to="/patients/new"
                  onClick={() => {
                    dispatch(SetAppointmentCreateModalOpen(true));
                  }}
                  className="bg-indigo-500 text-center hover:bg-indigo-700 px-2 py-2 text-white lg:font-bold text-md rounded-md"
                >
                  Add New Patient
                </Link>
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
    </>
  );
};

export default PatientList;
