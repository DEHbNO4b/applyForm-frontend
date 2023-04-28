import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react"


function Sidebar(props) {


    // const [applyesStatus, setApplyesStatus] = useState("loading..")
    const [applyes, setApplyes] = useState([])
    useEffect((e) => {
        fetch(props.url + `/applyes`)
            //.then(r => { if (r === null) { return null } })
            .then(r => r.json())
            .then(d => { if (d !== null) { setApplyes(d) } })
    }, []);
    const sendDel = (id) => {
        fetch(props.url + `/del/` + id, { method: 'DELETE' })
            .then(r => { if (r.status !== 200) { alert("Что-то не так") } })
    }
    const ApplyCollection = applyes.map((el) =>
    (<ListGroup.Item key={el.apply_id} >
        <div style={{ flexDirection: 'column' }}>{el.last_name + " " + el.first_name + ", " + el.date}</div>
        <Card.Link href={'/apply/' + el.apply_id} style={{ margin: '5px', }}>load</Card.Link>
        <Button variant='danger' onClick={() => sendDel(el.apply_id)}>delete</Button>
    </ListGroup.Item>))

    return (

        <Card border="primary" style={{ margin: '5px', }} >
            <Card.Header>
                <Card.Title>заявления</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">{applyesStatus}</Card.Subtitle> */}
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
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