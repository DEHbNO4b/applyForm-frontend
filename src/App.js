import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PdfComponent from './components/PdfComponent';
import AboutUs from './components/AboutUs';
import ApplyForm from './components/ApplyForm'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Header />
        </Row>
        <Row >
          <Col xs={2}>  <Sidebar />  </Col>
          {/* <PdfComponent  /> */}
          <Col >
            <Routes>
              <Route path='/apply_maker' element={<ApplyForm />} />
              <Route path="/" element={<Home />} />
              <Route path="/about_us" element={<AboutUs />} />
            </Routes>
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </div>
  );
}

export default App;
