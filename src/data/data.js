import { FaAdn, FaUsers } from "react-icons/fa";
import { FaFileInvoiceDollar, FaPeopleRobbery, FaUserDoctor } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";
import { MdContactSupport, MdOutlineDashboard } from "react-icons/md"


export const navItems = [
    {
        title: "Dashboard",
        icon: MdOutlineDashboard,
        link: '/'
    },
    {
        title: "Users List",
        icon: FaUsers,
        link: '/users'
    },
    {
        title: "Doctors",
        icon: FaUserDoctor,
        link: '/doctors'
    },
    {
        title: "Appointments",
        icon: FaAdn,
        link: '/appointments'
    },
    {
        title: "Patient List",
        icon: FaPeopleRobbery,
        link: '/patients'
    },
    {
        title: "Invoice List",
        icon: FaFileInvoiceDollar,
        link: '/invoices'
    },
    {
        title: "Report List",
        icon: BiSolidReport,
        link: '/reports'
    },
    {
        title: "Contact List",
        icon: MdContactSupport,
        link: '/contacts'
    }
]