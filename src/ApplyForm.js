
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormControl} from 'react-bootstrap';

function ApplyForm() {
  // handleSubmit(event) {
  //   alert('Отправленное имя: ' + this.state.value);
  //   event.preventDefault();
  // }
  return (
    <div >
      <h1>Данные по заявлению</h1>
      <Form >
        <Row>
          <Col>
              <Form.Label>Имя</Form.Label>
              <FormControl type='name' name='firstName' className='form-control'/>      
          </Col>
          <Col>
              <Form.Label>Фамилия</Form.Label>
              <FormControl type='name' name='lastName' className='form-control' />
          </Col>
          <Col>
          <Form.Label>Отчество</Form.Label>
              <FormControl type='name' name='fathersName' />
          </Col>
        </Row>
        <Row>
          <Col>
                <Form.Label>Дата рождения</Form.Label>
                <FormControl placeholder='' />
          </Col>
          <Col>
          </Col>
        </Row>
              <Form.Group classname="mb-3" controlId=''>
                  <Form.Label>Адрес места прописки</Form.Label>
                  <Form.Control placeholder='' />
              </Form.Group>
        <Row>
        <Col>
          <Form.Label>Серия паспорта</Form.Label>
              <FormControl placeholder='' />      
          </Col>
          <Col>
          <Form.Label>Номер паспорта</Form.Label>
              <FormControl placeholder='' />
          </Col>
          <Col>
          <Form.Label>Дата выдачи</Form.Label>
              <FormControl placeholder='' />
          </Col>
        </Row>
        <Row>
          <Col>
                <Form.Label>Тип недвижимости</Form.Label>
                <FormControl placeholder='' />
          </Col>
          <Col>
                <Form.Label>Кадастровый номер</Form.Label>
                <FormControl placeholder='' />
          </Col>
          <Col>
                <Form.Label>Сумма запрашиваемого займа</Form.Label>
                <FormControl placeholder='' />
          </Col>
        </Row>
        <Form.Group classname="mb-3" controlId='formGridAdress2'>
          <Form.Label>Адрес ипотечного жилья</Form.Label>
          <Form.Control placeholder='' />
        </Form.Group>
                  <Form.Label>Дата</Form.Label>
                <FormControl  />
        <Button variant = "primary" tipe = "submit" onClick="{submitButton}" classname = "me-4 btn btn-success btn-lg btn-block">
          Submit
        </Button>
      </Form>

      {/* <PdfComponent  /> */}
    
    </div>
  );
}

export default ApplyForm;
