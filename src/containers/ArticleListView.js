import React from 'react'
import Articles from '../components/Article'
import axios from 'axios';

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
      <Articles data={this.state.articles}/>
    )
  }
}

export default ArticleList;