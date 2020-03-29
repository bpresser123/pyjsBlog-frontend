import React from 'react';
import axios from 'axios';
import { Card } from 'antd';

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

  render() {
    return(
     <div>
      <Card title={this.state.article.title}>
        <p>{ this.state.article.content }</p>
      </Card>
     </div>
    )
  }
}

export default ArticleDetail;