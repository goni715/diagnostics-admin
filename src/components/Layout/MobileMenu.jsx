import {FaSignOutAlt} from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import {
    MdAssignment,
    MdOutlineAnnouncement,
    MdOutlineClass,
    MdReport
} from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import {IoMdHome} from "react-icons/io";
import {PiStudentBold} from "react-icons/pi";
import {Link, useLocation} from "react-router-dom";
import {logout} from "../../helper/SessionHelper.js";


const MobileMenu = ({showMenu}) => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            <div
                className={`${showMenu ? "left-0" : "-left-[100%]"} fixed top-0 bottom-0 h-screen z-20 w-72 bg-dark-purple dark:text-white px-5 pb-5 pt-8 md:hidden transition-all duration-500 rounded-r-xl shadow-md`}>
                {/* logo part*/}
                <div className="flex gap-x-4 items-center">
                    <img src={logo} className="cursor-pointer duration-500" alt="logo"/>
                    <h1 className={`text-white origin-left font-semibold text-xl duration-300 ${!open && "scale-0"}`}>Admin</h1>
                </div>
                {/* logo part ended*/}


                <ul className="pt-6 space-y-3">
                    <Link to="/" className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path==="/" && "bg-light-white"}`}>
                        <IoMdHome size={22}/>
                        <span className="origin-left duration-300">Home</span>
                    </Link>
                    <Link to="/doctors" className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path==="/doctors" && "bg-light-white"}`}>
                        <MdOutlineClass size={22}/>
                        <span className="origin-left duration-300">Doctors</span>
                    </Link>
                    <Link to="/appointments" className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path==="/appointments" && "bg-light-white"}`}>
                        <MdAssignment size={22}/>
                        <span className="origin-left duration-300">Appointments</span>
                    </Link>
                    <Link to="/contacts" className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path==="/teachers" && "bg-light-white"}`}>
                        <CgProfile size={22}/>
                        <span className="origin-left duration-300">Contact List</span>
                    </Link>
                    <li onClick={()=>logout()} className="text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
                        <FaSignOutAlt size={22}/>
                        <span className="origin-left duration-300">Signout</span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MobileMenu;