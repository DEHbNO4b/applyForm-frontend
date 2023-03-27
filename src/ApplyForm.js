
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormControl } from 'react-bootstrap';
import { useState } from 'react';
function ApplyForm() {
    const url = "http://localhost:9090"
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        fathersName: '',
        borneDate: '',
        adress1: '',
        adress2: '',
        passportSeries: '',
        passportNumber: '',
        dateIssue: '',
        propertyType: '',
        propertyNumber: '',
        amount: '',
        date: '',
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const submitButton = (e) => {
        e.preventDefault();
        console.log(form);

        fetch(url + `/applyes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(form)
        })
        // resetButton()
    }
    const resetButton = () => {
        setForm({
            firstName: '',
            lastName: '',
            fathersName: '',
            borneDate: '',
            adress1: '',
            adress2: '',
            passportSeries: '',
            passportNumber: '',
            dateIssue: '',
            propertyType: '',
            propertyNumber: '',
            propertyNumber2: '',
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
                        <Form.Label>Имя</Form.Label>
                        <FormControl type='text' name='firstName' className='form-control' onChange={handleChange} />
                    </Col>
                    <Col>
                        <Form.Label>Фамилия</Form.Label>
                        <FormControl type='text' name='lastName' className='form-control' onChange={handleChange} />
                    </Col>
                    <Col>
                        <Form.Label>Отчество</Form.Label>
                        <FormControl type='text' name='fathersName' onChange={handleChange} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Дата рождения</Form.Label>
                        <FormControl type='date' name='borneDate' onChange={handleChange} />
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId=''>
                    <Form.Label>Адрес места прописки</Form.Label>
                    <Form.Control type='text' name='adress1' onChange={handleChange} />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Label>Серия паспорта</Form.Label>
                        <FormControl type='number' name='passportSeries' onChange={handleChange} />
                    </Col>
                    <Col>
                        <Form.Label>Номер паспорта</Form.Label>
                        <FormControl type='number' name='passportNumber' onChange={handleChange} />
                    </Col>
                    <Col>
                        <Form.Label>Дата выдачи</Form.Label>
                        <FormControl type='date' name='dateIssue' onChange={handleChange} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label >Тип недвижимости</Form.Label>
                        <Form.Select onChange={handleChange} name='propertyType' type='text'>
                            <option  >Выберите тип жилья</option>
                            <option value="Квартира" >Квартира</option>
                            <option value="Земельный участок" >Земельный участок</option>
                            <option value="Дом"  >Дом</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>Кадастровый номер</Form.Label>
                        <FormControl type='text' name='propertyNumber' onChange={handleChange} />
                    </Col>
                    <Col>
                        <Form.Label>Кадастровый номер 2</Form.Label>
                        <FormControl type='text' name='propertyNumber2' onChange={handleChange} />
                    </Col>
                    <Col>
                        <Form.Label>Сумма запрашиваемого займа</Form.Label>
                        <FormControl type='number' name='amount' onChange={handleChange} />
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId='formGridAdress2'>
                    <Form.Label>Адрес ипотечного жилья</Form.Label>
                    <Form.Control type='text' name='adress2' onChange={handleChange} />
                </Form.Group>
                <Form.Label>Дата</Form.Label>
                <FormControl type='date' name='date' />
                <Col>
                    <Button variant="primary" type="submit" onClick={submitButton} className="me-4 btn btn-success btn-lg btn-block">
                        Submit
                    </Button>
                    <Button variant='danger' type='submit' onClick={resetButton}>Reset</Button>
                </Col>
            </Form>
        </div>
    );
}

export default ApplyForm;
