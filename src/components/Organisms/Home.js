import React from 'react'
import Col from 'react-bootstrap/Col'
import Button, { Ayush, Text } from '../Atoms'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div >
            <Ayush>
                <Text>
                    <h2>Hello! My name is Ayush Kumar.</h2>
                    <p>I've developed an ML based website which can predict 'breast cancer chances' and 'heart disease chances'.</p>
                    <p>Below are the buttons on which you can click and go to respective pages of the predictor.</p>
                </Text>

                <Col>
                    <Link to='/bc'><Button className='homebutton'>Breast Cancer Predictor</Button></Link>
                    <Link to='/hd'><Button className='homebutton'>Heart Disease Predictor</Button></Link>
                </Col>
            </Ayush>
        </div>
    )
}

export default Home