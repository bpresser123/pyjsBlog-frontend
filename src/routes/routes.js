import React from 'react';
import { Route } from 'react-router-dom';
import ArticleList from '../containers/ArticleListView';
import ArticleDetail from '../containers/ArticleDetailView';

const BaseRouter = () => (

  // No return() needed when using () in arrow function 
    <div>
      <Route exact path='/' component={ArticleList} />
      <Route exact path='/:articleID' component={ArticleDetail} />
    </div>
)

export default BaseRouter;