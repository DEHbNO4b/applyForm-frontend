
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormControl } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"

function ApplyEdit(props) {
    let { applyId } = useParams()
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        fathers_name: '',
        borne_date: '',
        passport_number: '',
        date_issue: '',
        property_type: '',
        property_number1: '',
        property_number2: '',
        amount: '',
        date: '',
    })


    useEffect(() => {
        fetch(props.url + `/applye/` + applyId)
            .then((r) => r.json())
            .then(d => setForm(d))
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const checkForm = function (f) {
        for (var key in f) {
            if(key==="property_number2"){continue}
            if (f[key] === "") {
                alert("заполните поле " + key)
                return false
            }
        }
        return true
    }
    const submitButton = (e) => {
        e.preventDefault();
        console.log(form)
        let checking = checkForm(form)
        if (checking === false) {
            return
        }
        fetch(props.url + `/putapply/`+ applyId, {

            method: 'PUT',
            body: JSON.stringify(form)
        }).then(response => {
            if (response.status !== 200) { alert("что то не так: " + response.status + response.statusText) }
            else { alert("Данные заявления добавлены на сервер") }
        })
        resetButton()
    }

    const resetButton = () => {
        setForm({
            first_name: '',
            last_name: '',
            fathers_name: '',
            borne_date: '',
            passport_number: '',
            date_issue: '',
            property_type: '',
            property_number1: '',
            property_number2: '',
            amount: '',
            date: '',
        })
    }

    return (
        <div >
            <h1>Данные по заявлению</h1>
            <Form >
                <Row>
                    <Col>
                        <Form.Label>Фамилия</Form.Label>
                        <FormControl type='text' name='last_name' className='form-control' onChange={handleChange} value={form.last_name} />
                    </Col>
                    <Col>
                        <Form.Label>Имя</Form.Label>
                        <FormControl type='text' name='first_name' className='form-control' onChange={handleChange} value={form.first_name} />
                    </Col>

                    <Col>
                        <Form.Label>Отчество</Form.Label>
                        <FormControl type='text' name='fathers_name' onChange={handleChange} value={form.fathers_name} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Дата рождения</Form.Label>
                        <FormControl type='date' name='borne_date' onChange={handleChange} value={form.borne_date} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Label>Серия и номер паспорта</Form.Label>
                        <FormControl type='text' name='passport_number' onChange={handleChange} value={form.passport_number} />
                    </Col>
                    <Col>
                        <Form.Label>Дата выдачи паспорта</Form.Label>
                        <FormControl type='date' name='date_issue' onChange={handleChange} value={form.date_issue} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label >Тип недвижимости</Form.Label>
                        <Form.Select onChange={handleChange} name='property_type' type='text' value={form.property_type}>
                            <option value="Квартира" >Квартира</option>
                            <option value="Земельный участок" >Земельный участок</option>
                            <option value="Дом"  >Дом</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>Кадастровый номер объекта недвижимости</Form.Label>
                        <FormControl type='text' name='property_number1' onChange={handleChange} value={form.property_number1} />
                    </Col>
                    <Col>
                        <Form.Label>Кадастровый номер земельного участка</Form.Label>
                        <FormControl type='text' name='property_number2' onChange={handleChange} value={form.property_number2} />
                    </Col>
                    <Col>
                        <Form.Label>Сумма запрашиваемого займа</Form.Label>
                        <FormControl type='number' name='amount' onChange={handleChange} value={form.amount} />
                    </Col>
                </Row>
                <Form.Label>Дата создания заявления</Form.Label>
                <FormControl type='date' name='date' onChange={handleChange} value={form.date} />
                <Col>
                    <Button variant="primary" type="submit" onClick={submitButton} className="me-4 btn btn-success btn-lg btn-block">
                        Submit
                    </Button>
                    <Button variant='danger' type='reset' onClick={resetButton}>Reset</Button>
                </Col>
            </Form>
        </div>
    );
}

export default ApplyEdit;
