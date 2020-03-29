import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;

class CustomForm extends Component {

  state = {
    title: "",
    content: ""
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFormSubmit = (event, requestType, articleID) => {

    const { title, content } = this.state;

    console.log("x");

    switch (requestType) {
      case 'post':
        return axios.post('http://localhost:8000/api/', {
          title: title,
          content: content
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
      case 'put':
        return axios.put(`http://localhost:8000/api/${articleID}/`, {
          title: title,
          content: content
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }

  render() {
    const { title, content } = this.state;
    return (
      <div>
        <Form >
          <FormItem>
            <Input value={title} name="title" placeholder="Enter title.." onChange={this.onChange}/>
          </FormItem>
          <FormItem>
            <Input value={content} name="content" placeholder="Enter content.." onChange={this.onChange}/>
          </FormItem>
        </Form>
        <Button type="primary" onClick={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.articleID)}>{this.props.btnText}</Button>
      </div>
    );
  }
}

export default CustomForm;
