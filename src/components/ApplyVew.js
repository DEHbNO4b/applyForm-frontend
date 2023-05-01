import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import PdfComponent from "./PdfComponent"

function ApplyVew(props) {
    let [apply, setApply] = useState({
        first_name: "", last_name: "", fathers_name: '', borne_date: '',
        passport_number: '', date_issue: '', property_type: '',
        property_number1: '', property_number2: '', amount: '', date: ''
    })
    let { applyId } = useParams()
    useEffect(() => {
        fetch(props.url + `/applye/` + applyId)
            .then((r) => r.json())
            .then(d => setApply(d))
    }, []);


    return (<>
        <PdfComponent data={apply} />
    </>)

} export default ApplyVew