import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal"
};

class DataComponent extends React.Component {
  constructor(props) {
    super(props)

  }
  componentDidUpdate() {

  }
  render() {
    return (
      <div style={{ padding: '50px' }}>
        <Row>
          <Col></Col>
          <Col style={{ fontSize: '30' }}>
            <u>   Директору ООО "Строй-06"<br></br> Джумулдаевой Петимат Абдуловне <br></br>
              {this.props.data.last_name} {this.props.data.first_name} {this.props.data.fathers_name}<br></br>
              {this.props.data.adress1}
            </u>
          </Col>
        </Row>
        <Row >
          <div style={{ margin: '30px', display: 'flex', justifyContent: 'center' }}>
            <h3> Заявление </h3>
          </div>
        </Row>
        <Row>
          Прошу Вас выдать мне ипотечный займ для приобретения недвижимости по следующим параметрам:
        </Row>

        <table style={thStyle} className="table">
          <thead>
            {/* <tr>
                {/* <th>Product A</th>
                <th>Product B</th>
              </tr> */}
          </thead>
          <tbody>
            <tr>
              <th>Тип недвижимости</th>
              <th>{this.props.data.property_type}</th>
            </tr>
            <tr>
              <th>Кадастровый номер объекта недвижимости, планируемого к приобретению</th>
              <th>{this.props.data.property_number1}</th>
            </tr>
            <tr>
              <th>Сумма займа</th>
              <th>{this.props.data.amount} руб.</th>
            </tr>
          </tbody>
        </table>
        <Row >
              С общими усовиями предоставления займов ознакомлен, в том числе, проинформирован о возможности реструктуризации долга; 
              мне также известно, что за предоставление недостоверных сведений  с целью получения указанного займа  я несу уголовную ответственность.
              В связи с чем, я даю свое полное согласие на проверку предоставленных мной документов.
        </Row>
        <Row>

          <Col style = {{display:'flex',justifyContent:'center'}}>{this.props.data.date}</Col>
          <Col style = {{display:'flex',justifyContent:'center'}}>____________________________</Col>

        </Row>
      </div>
    );
  }
}
export default DataComponent;
// {this.props.data.first_name}
// {this.props.data.last_name}
// {this.props.data.fathers_name}
// 
// {this.props.data.borne_date}
// {this.props.data.passport_series}
// {this.props.data.passport_number}
// {this.props.data.date_issue}
// 
// {this.props.data.property_number1}
// {this.props.data.property_number2}
// {this.props.data.amount}
// {this.props.data.adress2}
// 
<table style={thStyle} className="table">
  <thead>
    <tr>
      <th>&nbsp;</th>
      <th>Product A</th>
      <th>Product B</th>
      <th>Product C</th>
      <th>Product D</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Company A</td>
      <td>5</td>
      <td>6</td>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Company B</td>
      <td>1</td>
      <td>5</td>
      <td>2</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Company C</td>
      <td>1</td>
      <td>6</td>
      <td>8</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Company D</td>
      <td>1</td>
      <td>2</td>
      <td>0</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Company E</td>
      <td>3</td>
      <td>0</td>
      <td>3</td>
      <td>0</td>
    </tr>
    <tr>
      <td><strong>Gross Total</strong></td>
      <td>11</td>
      <td>19</td>
      <td>14</td>
      <td>12</td>
    </tr>
  </tbody>
  <caption>Previously sold products</caption>
</table> 