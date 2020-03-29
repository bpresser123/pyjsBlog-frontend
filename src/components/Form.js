import React, { Component } from 'react';
import { Input, Button } from 'antd';
import axios from 'axios';

class CustomForm extends Component {

  handleFormSubmit = (event, requestType, articleID) => {

    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;

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
    return (
      <div>
        <form onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.articleID)}>
            <Input name="title" placeholder="Enter title.." />
            <Input name="content" placeholder="Enter content.." />
          <Button type="submit" htmlType="submit">{this.props.btnText}</Button>
        </form>
      </div>
    );
  }
}

export default CustomForm;
