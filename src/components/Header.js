import { Navbar,Nav,Container } from "react-bootstrap"
function Header() {
    return (

        <Navbar variant="light" bg="info" expand="lg">
            <Container>
                <Navbar.Brand href="/about_us">IBRAHIMcorporation</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/apply_maker">Apply maker</Nav.Link>
                        <Nav.Link href="/about_us">About us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header