import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import Header from './header/Header';
import Footer from './footer/Footer';
import Albums from './albums/Albums';


class App extends Component {

  render() {
    const { loading, error } = this.props;
    return (
      <div className="app">
      
        <p>{loading ? 'I am loading' : 'I am NOT loading'}</p>
        
        <Router>
          <div>
            <Header/>
            <main role="main" id="main">

              { error && 
                <pre style={{ color: 'red' }}>
                  {error.message 
                    ? error.message 
                    : error.error ? error.error : error
                  }
                </pre>
              }

              <Switch>
                <Route exact path="/" component={Albums}/>
                {/* <Route path="/about" component={About}/> */}
                {/* <Route path="/movies/:id" render={({ match }) => <MovieDetail imdbID={match.params.id}/>}/> */}
                <Redirect to="/"/>
              </Switch>

            </main>
          </div>
        </Router>

        <Footer/>
      </div>
    );
  }
}

export default connect(
  state => ({ 
    loading: state.loading,
    error: state.error 
  }),
  null
)(App);