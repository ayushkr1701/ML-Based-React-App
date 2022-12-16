import React, { Component } from 'react';
import '../../App.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button, { Ayush } from '../Atoms';
import 'bootstrap/dist/css/bootstrap.css';
import { Content, Heading, ResultBox, Text } from '../Atoms';
import Label from '../Molecules/Label';

class HeartDisease extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {
        BMICategory: "Underweight BMI less than 18.5",
          Smoking: "No",
          AlcoholDrinking: "No",
          Stroke: "No",
          DiffWalking: "No",
          Sex: "Male",
          AgeCategory: "18-24",
          Race: "Asian",
          Diabetic: "No",
          PhysicalActivity: "No",
          GenHealth: "Poor",
          Asthma: "No",
          KidneyDisease: "No",
          SkinCancer: "No"
      },
      result: ""
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    this.setState({
      formData
    });
  }

  handlePredictClick = (event) => {
    const formData = this.state.formData;
    this.setState({ isLoading: true });
    fetch('https://flask-api-ayush.onrender.com//HeartDiseaseApi/', 
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          result: response.result,
          isLoading: false
        });
      });
  }

  handleCancelClick = (event) => {
    this.setState({ result: "" });
  }

  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;
    return (
      <div>
        <div>
          <Heading>Heart Disease Predictor</Heading>
        </div>
        <Content>
          <Form >
            <Form.Row>
              <Form.Group  as={Col}>
                <Label title='BMI Category'/>
                <Form.Control 
                  as="select"
                  name="BMICategory"
                  value={formData.BMICategory}
                  onChange={this.handleChange}>
                  <option>Underweight BMI less than 18.5</option>
                  <option>Normal weight BMI between 18.5 to 25</option>
                  <option>Overweight BMI between 25 to 30</option>
                  <option>Obese BMI between 30 to 35</option>
                  <option>Extremely Obese BMI greater than 35</option>
                </Form.Control>
                
                <Label title='Have you smoked at least 100 cigrattes in your entire life?'/>
                <Form.Control 
                  as="select"
                  name="Smoking"
                  value={formData.Smoking}
                  onChange={this.handleChange}>
                  <option>Yes</option>
                  <option>No</option>
                  
                </Form.Control>
                <Label title='Do you have more than 14 drinks of alcohol(men) or more than 7(women) in a week?'/>
                <Form.Control 
                  as="select"
                  name="AlcoholDrinking"
                  value={formData.AlcoholDrinking}
                  onChange={this.handleChange}>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Control>
                <Label title='Did you have a stroke?'/>
                <Form.Control 
                  as="select"
                  name="Stroke"
                  value={formData.Stroke}
                  onChange={this.handleChange}>
                  <option>Yes</option>
                  <option>No</option>
                  
                </Form.Control>
                <Label title='Do you have serious difficulty walking or climbing stairs?'/>
                <Form.Control 
                  as="select"
                  name="DiffWalking"
                  value={formData.DiffWalking}
                  onChange={this.handleChange}>
                  <option>Yes</option>
                  <option>No</option>
                  
                </Form.Control>
                <Form.Label>Gender</Form.Label>
                <Form.Control 
                  as="select"
                  name="Sex"
                  value={formData.Sex}
                  onChange={this.handleChange}>
                  <option>Male</option>
                  <option>Female</option>
                  
                </Form.Control>
                <Label title='Age Category'/>
                <Form.Control 
                  as="select"
                  name="AgeCategory"
                  value={formData.AgeCategory}
                  onChange={this.handleChange}>
                  <option>18-24</option>
                  <option>25-29</option>
                  <option>30-34</option>
                  <option>35-39</option>
                  <option>40-44</option>
                  <option>45-49</option>
                  <option>50-54</option>
                  <option>55-59</option>
                  <option>60-64</option>
                  <option>65-69</option>
                  <option>70-74</option>
                  <option>75-79</option>
                  <option>80 or older</option>
                </Form.Control>
                <Label title='Race'/>
                <Form.Control 
                  as="select"
                  name="Race"
                  value={formData.Race}
                  onChange={this.handleChange}>
                  <option>White</option>
                  <option>Black</option>
                  <option>Asian</option>
                  <option>American Indian/Alaskan Native</option>
                  <option>Hisponic</option>
                  <option>Other</option>
                </Form.Control>
                <Label title='Have you ever had diabetes?'/>
                <Form.Control 
                  as="select"
                  name="Diabetic"
                  value={formData.Diabetic}
                  onChange={this.handleChange}>
                  <option>Yes</option>
                  <option>No</option>
                  
                </Form.Control>
                <Label title='Have you played any sports in the past month?'/>
                <Form.Control 
                  as="select"
                  
                  name="PhysicalActivity"
                  value={formData.PhysicalActivity}
                  onChange={this.handleChange}>
                  <option>Yes</option>
                  <option>No</option>
                  
                </Form.Control>
                <Label title='General Health'/>
                <Form.Control 
                  as="select"
                  name="GenHealth"
                  value={formData.GenHealth}
                  onChange={this.handleChange}>
                  <option>Very good</option>
                  <option>Good</option>
                  <option>Fair</option>
                  <option>Poor</option>
                  <option>Excellent</option>
                </Form.Control>
                <Label title='Do you have Ashtma?'/>
                <Form.Control 
                  as="select"
                  name="Asthma"
                  value={FormData.Asthma}
                  onChange={this.handleChange}>
                  <option>Yes</option>
                  <option>No</option>
                  
                </Form.Control>
                <Label title='Do you have Kidney Disease ?'/>
                <Form.Control 
                  as="select"
                  name="KidneyDisease"
                  value={formData.KidneyDisease}
                  onChange={this.handleChange}>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Control>
                <Label title='Do you have Skin Cancer ?'/>
                <Form.Control 
                  as="select"
                  name="SkinCancer"
                  value={formData.SkinCancer}
                  onChange={this.handleChange}>
                  <option>Yes</option>
                  <option>No</option> 
                </Form.Control>
              </Form.Group>
            </Form.Row>
            {/* <Row>
              <Col>
                <Button
                  className='button1' theme="ROUNDED"
                  disabled={isLoading}
                  onClick={!isLoading ? this.handlePredictClick : null}>
                  { isLoading ? 'Making prediction' : 'Predict' }
                </Button>
              </Col>
              <Col>
                <Button
                  className='button2'
                  theme="rounded"
                  disabled={isLoading}
                  onClick={this.handleCancelClick}>
                  Reset prediction
                </Button>
              </Col>
            </Row> */}
          </Form>
          <Button className='button1' theme="ROUNDED"
                  disabled={isLoading}
                  onClick={!isLoading ? this.handlePredictClick : null}>
                  {isLoading ? 'Making prediction' : 'Predict'}
          </Button>
          
        </Content>
        {result === "" ? null :
            (<Row>
              <Col >
              <Ayush>
              <ResultBox><h5 id="result">{result}</h5></ResultBox>
              </Ayush> 
              </Col>
            </Row>)
          }
        <Text>By Ayush Kumar</Text>
      </div>
    );
  }
}

export default HeartDisease;