import {useParams} from "react-router-dom";
import {useGetReportQuery} from "../redux/features/report/reportApi.js";
import ReportView from "../components/ReportList/ReportView.jsx";
import ReportLoading from "../components/Loader/ReportLoading.jsx";


const ReportViewPage = () => {
    const {id} = useParams();
    const {data, isLoading, isError} = useGetReportQuery(id);
    const report = data?.data || {};

    if (isLoading) {
        return (
            <>
                <ReportLoading/>
            </>
        )
    }


    if (!isLoading && !isError && report?._id) {
        return (
            <>
                <ReportView report={report}/>
            </>
        )
    }
};

export default ReportViewPage;