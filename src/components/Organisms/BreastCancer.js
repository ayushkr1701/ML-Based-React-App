import React, { Component } from 'react';
import '../../App.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import Button, { Ayush, Content, Heading, ResultBox, Text } from '../Atoms';
import Label from '../Molecules/Label';


class BreastCancer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {
        clump_thickness: 0,
        uniform_cell_size: 0,
        uniform_cell_shape: 0,
        marginal_adhesion: 0,
        single_epithelial_size: 0,
        bare_nuclei: 0,
        bland_chromatin: 0,
        normal_nucleoli: 0,
        mitoses: 0
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
    fetch('https://flask-api-ayush.onrender.com/BreastCancerApi/',
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
    this.formData.reset()
    // this.setState({ 
      
    // });
  }

  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;
    return (
      <div>
        <div>
          <Heading>Breast Cancer Predictor</Heading>
        </div>
        <Content>
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Label for="clump_thickness" title="Clump Thickenss" />
                <Form.Control
                  as="input"
                  name="clump_thickness"
                  value={formData.clump_thickness}
                  onChange={this.handleChange} />


                <Label for="uniform_cell_size" title="Uniform Cell Size" />
                <Form.Control
                  as="input"
                  name="uniform_cell_size"
                  value={formData.uniform_cell_size}
                  onChange={this.handleChange} />


                <Label for="uniform_cell_shape" title="Uniform Cell Shape" />
                <Form.Control
                  as="input"
                  name="uniform_cell_shape"
                  value={formData.uniform_cell_shape}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Label for="cmarginal_adhesion" title="Marginal Adhesion" />
                <Form.Control
                  as="input"
                  name="marginal_adhesion"
                  value={formData.marginal_adhesion}
                  onChange={this.handleChange} />


                <Label for="single_epithelial_size" title="Single Epithelial Size" />
                <Form.Control
                  as="input"
                  name="single_epithelial_size"
                  value={formData.single_epithelial_size}
                  onChange={this.handleChange} />


                <Label for="bare_nuclei" title="Bare Nuclei" />
                <Form.Control
                  as="input"
                  name="bare_nuclei"
                  value={formData.bare_nuclei}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Label for="bland_chromatin" title="Bland Chromatin" />
                <Form.Control
                  as="input"
                  name="bland_chromatin"
                  value={formData.bland_chromatin}
                  onChange={this.handleChange} />


                <Label for="normal_nucleoli" title="Normal Nucleoli" />
                <Form.Control
                  as="input"
                  name="normal_nucleoli"
                  value={formData.normal_nucleoli}
                  onChange={this.handleChange} />


                <Label for="mitoses" title="Mitoses" />
                <Form.Control
                  as="input"
                  name="mitoses"
                  value={formData.mitoses}
                  onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
            {/* <Row>
              <Col>
                <Button className='button1' theme="ROUNDED"
                  disabled={isLoading}
                  onClick={!isLoading ? this.handlePredictClick : null}>
                  {isLoading ? 'Making prediction' : 'Predict'}
                </Button>
              </Col>
              <Col>
                <Button
                  className='button2'
                  theme="rounded"
                  disabled={isLoading}
                  onClick={this.handleCancelClick }>
                  Reset Prediction
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

export default BreastCancer;