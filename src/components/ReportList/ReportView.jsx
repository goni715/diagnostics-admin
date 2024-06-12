import {useRef, useState} from "react";
import {useReactToPrint} from "react-to-print";
import {Modal} from "antd";


const ReportView = ({report}) => {
    const {
        invoiceNumber,
        age,
        patientName,
        testName,
        phone,
        address,
        gender,
        result,
        referredBy
    } = report || {};

    const componentRef = useRef();
    const [modalOpen, setModalOpen] = useState(false);


    //print function
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });



    const handleOk = () => {
        setModalOpen(false)
    };
    const handleCancel = () => {
        setModalOpen(false)
    };


    return (
        <>
            <div className="px-5 py-2">
                <div className="shadow-md p-4 rounded-lg space-y-3">
                    <div className="flex space-x-2">
                        <p className="font-bold">Invoice no:</p>
                        <p className="uppercase">{invoiceNumber}</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-bold">Test Name:</p>
                        <p>{testName}</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-bold">Patient Name:</p>
                        <p>{patientName}</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-bold">Ref By:</p>
                        <p>{referredBy}</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-bold">Gender:</p>
                        <p>{gender}</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-bold">Age:</p>
                        <p>{age}</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-bold">Phone:</p>
                        <p>{phone}</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-bold">Address:</p>
                        <p>{address}</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-bold">Report Result:</p>
                        <p>{result}</p>
                    </div>
                    <div>
                        <button onClick={()=>setModalOpen(true)} className="bg-green-500 hover:bg-green-700 duration-200 px-8 py-1.5 text-white rounded-md">Print</button>
                    </div>
                </div>
            </div>



            {/*Modal Print part*/}

            <Modal size="large" open={modalOpen} onOk={handleOk}>
                <div>
                    <div id="invoice-POS" ref={componentRef}>
                        <div className="md:px-8 py-2">
                            <div className="shadow-md p-4 rounded-lg space-y-3">
                                <div className="flex space-x-2">
                                    <p className="font-bold">Invoice no:</p>
                                    <p className="uppercase">{invoiceNumber}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <p className="font-bold">Test Name:</p>
                                    <p>{testName}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <p className="font-bold">Patient Name:</p>
                                    <p>{patientName}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <p className="font-bold">Ref By:</p>
                                    <p>{referredBy}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <p className="font-bold">Gender:</p>
                                    <p>{gender}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <p className="font-bold">Age:</p>
                                    <p>{age}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <p className="font-bold">Phone:</p>
                                    <p>{phone}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <p className="font-bold">Address:</p>
                                    <p>{address}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <p className="font-bold">Report Result:</p>
                                    <p>{result}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-6 gap-4 justify-end">
                        <button onClick={handleCancel} className="w-1/2 bg-red-500 hover:bg-red-700 duration-200 px-8 py-1.5 text-white rounded-md">
                            Close
                        </button>
                        <button onClick={handlePrint}  className="w-1/2 bg-green-500 hover:bg-green-700 duration-200 px-8 py-1.5 text-white rounded-md">
                            Print
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ReportView;