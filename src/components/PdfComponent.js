import React from 'react';
import { Card } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';
import DataComponent from './DataComponent';


class PdfComponent extends React.Component {
  constructor(props){
    super(props);
    
  }
  componentDidMount() {

  }
  render() {
    return (
      <Card border='primary' style={{margin:'5px'}}>
      
        
        <DataComponent ref={(response) => (this.componentRef = response)}  data={this.props.data}/>
        <ReactToPrint
          content={() => this.componentRef}
          trigger={() => <button className="btn btn-primary">Print to PDF!</button>}
        />
      </Card>
    );
  }
}
export default PdfComponent;