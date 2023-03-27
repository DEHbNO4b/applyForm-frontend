import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PdfComponent from './PdfComponent';
import ApplyForm from './ApplyForm'


function App() {
  // handleSubmit(event) {
  //   alert('Отправленное имя: ' + this.state.value);
  //   event.preventDefault();
  // }
  return (
    <div className="App">
      <ApplyForm />
      {/* <PdfComponent  /> */}
    
    </div>
  );
}

export default App;
