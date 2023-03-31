import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import PdfComponent from "./PdfComponent"

function ApplyVew() {
    const url = "http://localhost:9090/"
    let [apply, setApply] = useState({first_name:"",last_name:"", fathers_name:'', borne_date:'', adress1:'',
    passport_series:'', passport_number:'', date_issue:'', property_type:'',
    property_number1:'', property_number2:'', amount:'', adress2:'', date:''})
    let { applyId } = useParams()
    useEffect(() => {
        fetch(url + `/applye/` + applyId)
            .then((r) => r.json())
            .then(d => setApply(d))
            .then(d=>console.log(d))
    }, []);


    return (<>
        <PdfComponent  data={apply} />
    </>)

} export default ApplyVew