import React from 'react';
import { Col, Container, Row } from 'reactstrap';

export default function Home() {

    return (
        <div style={{
            backgroundImage: `url(${require('../Images/background.jpg')})`,
            backgroundSize: '100% 100%',
            height: '100vh',
            width: '100%',
            backgroundRepeat: 'no-repeat',
        }}>
            <Container>
                <Row className="pt-5 pb-1">
                    <Col />
                    <Col>
                        <h1 className="text-right">CS456 Portfolio</h1>
                    </Col>
                </Row>
                <Row>
                    <Col />
                    <Col>
                        <p style={{ color: 'white' }} className="text-right">Christian Barlow</p>
                    </Col>

                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <p style={{ color: 'white' }} className="text-right">Cbhnn@umsystem.edu</p>
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col />
                    <Col className="text-right">
                        <a href="https://drive.google.com/file/d/1VZ1CCE1i-neSuzjQ7Yk7rF7l-dXpYap7/view?usp=sharing">Assignment 1</a>
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col />
                    <Col className="text-right">
                        <a href="https://drive.google.com/file/d/1nuwOqpOuaZLYfYZHAzPU969wtH_WddC9/view?usp=sharing">Assignment 2</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}