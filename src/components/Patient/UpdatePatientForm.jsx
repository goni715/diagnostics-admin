import {useState} from "react";
import {useUpdatePatientMutation} from "../../redux/features/patient/patientApi.js";


const UpdatePatientForm = ({patient}) => {
    const [updatePatient, {isSuccess,isLoading}] = useUpdatePatientMutation();

    const {
        _id,
        name:initialName,
        age:initialAge,
        bloodGroup:initialBloodGroup,
        phone: initialPhone,
        gender:initialGender,
        address: initialAddress
    } = patient || {};



    const [name, setName] = useState(initialName);
    const [phone, setPhone] = useState(initialPhone);
    const [age, setAge] = useState(initialAge)
    const [address, setAddress] = useState(initialAddress);
    const [gender, setGender] = useState(initialGender);
    const [bloodGroup, setBloodGroup] = useState(initialBloodGroup);


    const handleSubmit = (e) => {
        e.preventDefault()
        updatePatient({
            id:_id,
            data:{
                name,
                phone,
                age,
                address,
                gender,
                bloodGroup
            }
        })
    }





    return (
        <>
            <form onSubmit={handleSubmit} className="px-3 md:px-6 pb-6 mt-6 shadow-md rounded md:rounded-md">
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


                <div className="flex justify-end mt-4">
                    <button
                        disabled={isLoading}
                        className="w-1/2 bg-green-500 hover:bg-green-700 duration-200 px-3 py-2 text-white font-bold text-md rounded-md disabled:cursor-not-allowed">
                        {isLoading ? "Processing..." : "Update"}
                    </button>
                </div>
            </form>




        </>
    );
};

export default UpdatePatientForm;