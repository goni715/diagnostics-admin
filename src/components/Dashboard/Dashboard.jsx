import { FaFileInvoiceDollar } from "react-icons/fa6";
import DashboardLoading from "../Loader/DashboardLoading";


const Dashboard = () => {
  const isLoading = false;

  if(isLoading){
    return (
      <DashboardLoading/>
    )
  }
  else{
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* invoices */}
          <div className="bg-white shadow-md p-3 rounded-md">
            <div className="flex justify-between ">
              <h1 className="text-gray-900">Invoices</h1>
              <FaFileInvoiceDollar className="text-2xl text-gray-600" />
            </div>
            <h1 className="text-4xl mt-4">5</h1>
            <h1 className="text-right text-gray-600">Total</h1>
          </div>

          {/* appointments */}
          <div className="bg-white shadow-md p-3 rounded-md">
            <div className="flex justify-between ">
              <h1 className="text-gray-900">Appointments</h1>
              <FaFileInvoiceDollar className="text-2xl text-gray-600" />
            </div>
            <h1 className="text-4xl mt-4">7</h1>
            <h1 className="text-right text-gray-600">Total</h1>
          </div>

          {/* Reports */}
          <div className="bg-white shadow-md p-3 rounded-md">
            <div className="flex justify-between ">
              <h1 className="text-gray-900">Reports</h1>
              <FaFileInvoiceDollar className="text-2xl text-gray-600" />
            </div>
            <h1 className="text-4xl mt-4">5</h1>
            <h1 className="text-right text-gray-600">Total</h1>
          </div>

          {/* Doctors */}
          <div className="bg-white shadow-md p-3 rounded-md">
            <div className="flex justify-between ">
              <h1 className="text-gray-900">Doctors</h1>
              <FaFileInvoiceDollar className="text-2xl text-gray-600" />
            </div>
            <h1 className="text-4xl mt-4">8</h1>
            <h1 className="text-right text-gray-600">Total</h1>
          </div>
        </div>
      </>
    );
  }
  
};

export default Dashboard;