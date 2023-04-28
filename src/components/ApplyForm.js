
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormControl } from 'react-bootstrap';
import { useState } from 'react';

function ApplyForm(props) {

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

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const checkForm = function (f) {
        for (var key in f) {
            if (f[key] === "") {
                alert("заполните поле " + key)
                return false
            }
        }
        return true
    }
    const submitButton = (e) => {
        e.preventDefault();
        let checking = checkForm(form)
        if (checking === false) {
            return
        }
        fetch(props.url + `/applyes`, {

            method: 'POST',
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
                        <FormControl type='text' name='last_name' className='form-control' onChange={handleChange} />
                    </Col>
                    <Col>
                        <Form.Label>Имя</Form.Label>
                        <FormControl type='text' name='first_name' className='form-control' onChange={handleChange} />
                    </Col>

                    <Col>
                        <Form.Label>Отчество</Form.Label>
                        <FormControl type='text' name='fathers_name' onChange={handleChange} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Дата рождения</Form.Label>
                        <FormControl type='date' name='borne_date' onChange={handleChange} />
                    </Col>
                </Row>
                {/* <Form.Group className="mb-3" controlId=''>
                    <Form.Label>Адрес места прописки</Form.Label>
                    <Form.Control type='text' name='adress1' onChange={handleChange} />
                </Form.Group> */}
                <Row>
                    {/* <Col>
                        <Form.Label>Серия паспорта</Form.Label>
                        <FormControl type='number' name='passport_series' onChange={handleChange} />
                    </Col> */}
                    <Col>
                        <Form.Label>Номер паспорта</Form.Label>
                        <FormControl type='number' name='passport_number' onChange={handleChange} />
                    </Col>
                    <Col>
                        <Form.Label>Дата выдачи</Form.Label>
                        <FormControl type='date' name='date_issue' onChange={handleChange} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label >Тип недвижимости</Form.Label>
                        <Form.Select onChange={handleChange} name='property_type' type='text'>
                            <option  >Выберите тип жилья</option>
                            <option value="Квартира" >Квартира</option>
                            <option value="Земельный участок" >Земельный участок</option>
                            <option value="Дом"  >Дом</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>Кадастровый номер</Form.Label>
                        <FormControl type='text' name='property_number1' onChange={handleChange} />
                    </Col>
                    <Col>
                        <Form.Label>Кадастровый номер 2</Form.Label>
                        <FormControl type='text' name='property_number2' onChange={handleChange} />
                    </Col>
                    <Col>
                        <Form.Label>Сумма запрашиваемого займа</Form.Label>
                        <FormControl type='number' name='amount' onChange={handleChange} />
                    </Col>
                </Row>
                {/* <Form.Group className="mb-3" controlId='formGridAdress2'>
                    <Form.Label>Адрес ипотечного жилья</Form.Label>
                    <Form.Control type='text' name='adress2' onChange={handleChange} />
                </Form.Group> */}
                <Form.Label>Дата</Form.Label>
                <FormControl type='date' name='date' onChange={handleChange} />
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

export default ApplyForm;
