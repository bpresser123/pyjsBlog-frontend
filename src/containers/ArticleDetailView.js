import React from 'react';
import axios from 'axios';
import { Card, Button, Form } from 'antd';
import CustomForm from '../components/Form';

class ArticleDetail extends React.Component {

  state = {
    article: {}
  }

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://localhost:8000/api/${articleID}`)
    .then(res => {
      this.setState({
        article: res.data
      })
      console.log("Articles: " + JSON.stringify(this.state.article, undefined, 2))
    })
  }

  handleDelete = (event) => {
    const articleID = this.props.match.params.articleID;
    axios.delete(`http://localhost:8000/api/${articleID}`)

    //Not Great 
    this.props.history.push('/');
    this.forceUpdate();
  }

  render() {
    return(
     <div>
      <Card title={this.state.article.title}>
        <p>{ this.state.article.content }</p>
      </Card>
      <CustomForm requestType="put" articleID={this.props.match.params.articleID} btnText="Update"/>
      <Form>
        <Button type="danger" onClick={this.handleDelete}>Delete</Button>
      </Form>
     </div>
    )
  }
}

export default ArticleDetail;