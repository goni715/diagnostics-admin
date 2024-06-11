import {useEffect, useState} from "react";
import {useGetDoctorsQuery} from "../../redux/features/doctor/doctorApi.js";
import {Button, Spinner} from "@material-tailwind/react";
import {Modal} from "antd";
import {useCreatePatientMutation} from "../../redux/features/patient/patientApi.js";
import {useDispatch} from "react-redux";


const CreatePatientForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [referredBy, setReferredBy] = useState("");
    const [testName, setTestName] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const tax = 10;


    const {data} = useGetDoctorsQuery();
    const doctors = data?.data || [];
    const [createPatient, {isSuccess,isLoading}] = useCreatePatientMutation();


    const handleSubmit = (e) => {
        e.preventDefault();
        setModalOpen(true)
    }

    useEffect(()=>{
        if(isSuccess){
            setName("");
            setDeliveryDate("");
            setPhone("");
            setAge("");
            setAddress("");
            setGender("");
            setBloodGroup("");
            setReferredBy("");
            setTestName("");
            setPrice("");
            setDiscount("");
            setModalOpen(false);
        }
    },[isSuccess, dispatch])

    const handleClick = () => {
        createPatient({
            name,
            phone,
            deliveryDate: new Date(deliveryDate),
            age,
            address,
            gender,
            bloodGroup,
            referredBy,
            testName,
            price: ((price !=="" && discount !=="") && price - Number(500) * Number(discount/100))+Number(tax)
        })
    }





    return (
        <>
            <form onSubmit={handleSubmit} className="px-3 md:px-6 pb-6 shadow-md rounded md:rounded-md">
                <h1 className="text-center text-2xl font-bold mb-10">Create New Invoice</h1>
                <h3 className="text-2xl my-3">Patient Details:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="name">Name</label>
                        <input onChange={(e)=>setName(e.target.value)} value={name} required
                               className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400"
                               type="text" id="name" placeholder="name"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="phone">Phone Number</label>
                        <input onChange={(e)=>setPhone(e.target.value)} value={phone} required
                               className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400"
                               type="text" id="phone" placeholder="phone"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="age">Age</label>
                        <input onChange={(e)=>setAge(e.target.value)} value={age} required
                               className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400"
                               type="text" id="age" placeholder="age"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="gender">Gender</label>
                        <select
                            onChange={(e)=>setGender(e.target.value)}
                            value={gender}
                            className="w-full px-4 py-2.5 bg-white rounded-md focus:outline-none border border-gray-400"
                            id="gender" required>
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="bg">Blood Group</label>
                        <select
                            onChange={(e)=>setBloodGroup(e.target.value)}
                            value={bloodGroup}
                            className="w-full px-4 py-2.5 bg-white rounded-md focus:outline-none border border-gray-400"
                            id="bg" required>
                            <option value="">Select</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="add">Address</label>
                        <input onChange={(e)=>setAddress(e.target.value)} value={address} required
                               className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400"
                               type="text" id="add" placeholder="address"/>
                    </div>

                </div>


                <h3 className="text-2xl mt-8 mb-3">Test Details:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="refer">Referred By</label>
                        <select
                            onChange={(e)=>setReferredBy(e.target.value)}
                            value={referredBy}
                            className="w-full px-4 py-2.5 bg-white rounded-md focus:outline-none border border-gray-400"
                            id="refer" required>
                            <option value="">Select</option>
                            {
                                doctors?.length > 0 && (
                                    doctors?.map((doctor, i) => (
                                        <option key={i.toString()} value={doctor?._id}>{doctor?.name}</option>
                                    ))
                                )
                            }
                        </select>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="date">Delivery Date</label>
                        <input onChange={(e)=>setDeliveryDate(e.target.value)}
                               value={deliveryDate} required
                               className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400"
                               type="date" id="first-name"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="test">Test Name</label>
                        <input onChange={(e)=>setTestName(e.target.value)} value={testName} required
                               className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400"
                               type="text" id="test" placeholder="test name"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="price">Price</label>
                        <input onChange={(e)=>setPrice(e.target.value)} value={price} required
                               className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400"
                               type="number" id="price" placeholder="price"/>
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="discount">Discount(%)</label>
                        <input
                            onChange={(e)=>setDiscount(e.target.value)}
                            value={discount}
                            required
                            className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400"
                            type="number" id="discount" placeholder="discount"
                        />
                    </div>
                    <div>
                        <label className="inline-block pb-2 text-md" htmlFor="net">Net Price</label>
                        <input disabled={true} value={(price !=="" && discount !=="") && price - Number(500) * Number(discount/100)} required
                               className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400"
                               type="number" id="net" placeholder="net price"/>
                    </div>

                </div>

                <div className="flex justify-end mt-4">
                    <button
                            className="w-1/2 bg-green-500 hover:bg-green-700 duration-200 px-3 py-2 text-white font-bold text-md rounded-md">
                       Create
                    </button>
                </div>
            </form>


            <Modal className="w-[300px]" title="Bill Summary" open={modalOpen} onOk={()=>setModalOpen(false)}>
                <div>

                   <div className="flex flex-col space-y-2 pt-6">
                       <div className="flex justify-between">
                           <p className="font-bold">Sub Total</p>
                           <p>{(price !=="" && discount !=="") && price - Number(500) * Number(discount/100)}</p>
                       </div>
                       <div className="flex justify-between">
                           <p className="font-bold">Tax</p>
                           <p>{tax}</p>
                       </div>
                       <div className="flex justify-between">
                           <p className="font-bold">Total</p>
                           <p>{((price !=="" && discount !=="") && price - Number(500) * Number(discount/100))+Number(tax)}</p>
                       </div>
                   </div>

                    <div className="flex mt-6 gap-6 pt-5">
                        <button onClick={()=>setModalOpen(false)} className="w-1/2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed">
                            Cancel
                        </button>
                        <Button onClick={handleClick} disabled={isLoading}
                                className={`${isLoading && "capitalize"} w-1/2 flex gap-3 items-center justify-center disabled:cursor-not-allowed`}
                                type="submit"
                        >
                            {
                                isLoading ? (
                                    <>
                                        <Spinner className="h-4 w-4"/> Processing...
                                    </>
                                ) : (
                                    <>
                                        Save
                                    </>
                                )
                            }

                        </Button>
                    </div>
                </div>
            </Modal>


        </>
    );
};

export default CreatePatientForm;