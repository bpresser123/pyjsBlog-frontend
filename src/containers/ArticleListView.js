import React from 'react'
import Articles from '../components/Article'
import axios from 'axios';
import CustomForm from '../components/Form';

class ArticleList extends React.Component {

  state = {
    articles: []
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/')
    .then(res => {
      this.setState({
        articles: res.data
      })
      console.log("Articles: " + JSON.stringify(this.state.articles, undefined, 2))
    })
  }

  render() {
    return(
      <div>
        <Articles data={this.state.articles}/>
        <h2>Create an Article</h2>
        <br />
        <CustomForm requestType="post" articleID={null} btnText="Submit"/>
      </div>
    )
  }
}

export default ArticleList;