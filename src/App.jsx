import React, { Component } from 'react'
import './App.css';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder />
        </Layout>
    </div>
    )
  }
}

