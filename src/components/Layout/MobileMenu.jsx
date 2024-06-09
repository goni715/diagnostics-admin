import {FaSignOutAlt} from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import {
    MdAssignment,
    MdOutlineClass
} from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import {IoMdHome} from "react-icons/io";
import {Link, useLocation} from "react-router-dom";
import {logout} from "../../helper/SessionHelper.js";


const MobileMenu = ({showMenu, setShowMenu}) => {
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
                    <Link to="/" onClick={()=>setShowMenu(false)} className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path==="/" && "bg-light-white"}`}>
                        <IoMdHome size={22}/>
                        <span className="origin-left duration-300">Home</span>
                    </Link>
                    <Link to="/doctors" onClick={()=>setShowMenu(false)} className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path==="/doctors" && "bg-light-white"}`}>
                        <MdOutlineClass size={22}/>
                        <span className="origin-left duration-300">Doctors</span>
                    </Link>
                    <Link to="/appointments" onClick={()=>setShowMenu(false)} className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path==="/appointments" && "bg-light-white"}`}>
                        <MdAssignment size={22}/>
                        <span className="origin-left duration-300">Appointments</span>
                    </Link>
                    <Link to="/patients" onClick={()=>setShowMenu(false)} className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path==="/patients" && "bg-light-white"}`}>
                        <MdAssignment size={22}/>
                        <span className="origin-left duration-300">Patient List</span>
                    </Link>
                    <Link to="/invoices" onClick={()=>setShowMenu(false)} className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path==="/invoices" && "bg-light-white"}`}>
                        <MdAssignment size={22}/>
                        <span className="origin-left duration-300">Invoice List</span>
                    </Link>
                    <Link to="/reports" onClick={()=>setShowMenu(false)} className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path==="/reports" && "bg-light-white"}`}>
                        <MdAssignment size={22}/>
                        <span className="origin-left duration-300">Report List</span>
                    </Link>
                    <Link to="/contacts" onClick={()=>setShowMenu(false)} className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${path==="/contacts" && "bg-light-white"}`}>
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