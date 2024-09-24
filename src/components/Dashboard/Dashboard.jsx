import { FaFileInvoiceDollar } from "react-icons/fa6";


const Dashboard = () => {
    return (
      <>
        <section className="bg-gray-100 min-h-[90vh]">
          <div className="px-4 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white shadow-md p-3 rounded-md">
                <div className="flex justify-between ">
                  <h1 className="text-gray-900">Doctors</h1>
                  <FaFileInvoiceDollar className="text-2xl text-gray-600" />
                </div>
                <h1 className="text-4xl font-semibold mt-4">5</h1>
              </div>
              <div className="bg-white shadow-md p-3 rounded-md">
                <div className="flex justify-between ">
                  <h1 className="text-gray-900">Invoice</h1>
                  <FaFileInvoiceDollar className="text-2xl text-gray-600" />
                </div>
                <h1 className="text-4xl font-semibold mt-4">5</h1>
              </div>
              <div className="bg-white shadow-md p-3 rounded-md">
                <div className="flex justify-between ">
                  <h1 className="text-gray-900">Appointments</h1>
                  <FaFileInvoiceDollar className="text-2xl text-gray-600" />
                </div>
                <h1 className="text-4xl font-semibold mt-4">5</h1>
              </div>
              <div className="bg-white shadow-md p-3 rounded-md">
                <div className="flex justify-between ">
                  <h1 className="text-gray-900">Invoice</h1>
                  <FaFileInvoiceDollar className="text-2xl text-gray-600" />
                </div>
                <h1 className="text-4xl font-semibold mt-4">5</h1>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default Dashboard;