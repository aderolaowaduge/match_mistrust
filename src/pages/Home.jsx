import './Home.css';
import { Container, Row, Col, Card } from "react-bootstrap";




const Home = () => {
  return (
    <div id="home-body">
      {/* Hero Section */}
      <div className="hero-image d-flex align-items-center justify-content-center text-center">
        <div className="container text-white">
          <h1 className="display-4 fw-bold">  Overcoming Medical Mistrust</h1>
          <h3 className="fw-normal text-white">
            Examining medical mistrust among Black women — and the paths toward rebuilding trust in healthcare.
          </h3>
        </div>
      </div>

      {/* Overview */}
      <section className="overview">
        <h2>Overview</h2>
        <p>
          This project investigates the roots of medical mistrust within the Black community, specifically among Black women, and highlights how it shapes their healthcare experiences. My goal is to promote understanding, foster trust, and ultimately advocate for better healthcare practices.
        </p>
      </section>

      {/* Navigation Links */}

      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <a href="/research" className="text-decoration-none text-dark">
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src="/images/research.jpg" alt="Research" />
                  <Card.Body>
                    <Card.Title>Research</Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col md={4} className="mb-4">
              <a href="/match-game" className="text-decoration-none text-dark">
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src="/images/match-game.jpg" alt="Match Game" />
                  <Card.Body>
                    <Card.Title>Match Game</Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col md={4} className="mb-4">
              <a href="/about" className="text-decoration-none text-dark">
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src="/images/about.jpg" alt="About" />
                  <Card.Body>
                    <Card.Title>About</Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
};

export default Home;
