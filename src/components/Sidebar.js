import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react"


function Sidebar() {


    const url = "http://localhost:9090"
    const [applyesStatus, setApplyesStatus] = useState("loading..")
    const [applyes, setApplyes] = useState([{ apply_id: "qwe", first_name: "", last_name: "", fathers_name: "", date: "" }])
    useEffect(() => {
        fetch(url + `/applyes`)
            .then(r => r.json())
            .then(d => setApplyes(d))
    }, []);

    const ApplyCollection = applyes.map((el) =>
    (<ListGroup.Item key={el.apply_id} >
        <div style={{flexDirection:'column'}}>{el.last_name + " " + el.first_name + ", " + el.date}</div>
        <Card.Link href={'/apply/'+el.apply_id} >load</Card.Link>
    </ListGroup.Item>))

    return (

        <Card border="primary" style={{ margin: '5px', }} >
            <Card.Header>
                <Card.Title>заявления</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{applyesStatus}</Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    {ApplyCollection}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}
export default Sidebar;