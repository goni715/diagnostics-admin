import Dashboard from "../components/Dashboard/Dashboard";
import RecentAppointments from "../components/Dashboard/RecentAppointments";
import RecentInvoices from "../components/Dashboard/RecentInvoices";


const DashboardPage = () => {
    return (
        <>
        <section className="bg-gray-100 min-h-[90vh]">
          <div className="px-4 py-3">
           <Dashboard/>
           <RecentInvoices/>
           <RecentAppointments/>
          </div>
        </section>
        </>
    );
};

export default DashboardPage;