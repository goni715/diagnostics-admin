

const PatientDetails = ({patient}) => {
    const {
        name,
        age,
        bloodGroup,
        phone,
        address,
        gender
    } = patient || {};


    return (
        <>
            <div className="px-5 py-2">
                <div className="shadow-md p-4 rounded-lg space-y-3">
                    <div className="flex space-x-2">
                        <p className="font-bold">Name:</p>
                        <p className="uppercase">{name}</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-bold">Age:</p>
                        <p>{age}</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-bold">Gender:</p>
                        <p>{gender}</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-bold">Phone:</p>
                        <p>{phone}</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-bold">Blood Group:</p>
                        <p>{bloodGroup}(ve)</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-bold">Address:</p>
                        <p>{address}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PatientDetails;