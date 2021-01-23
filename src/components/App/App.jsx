import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import FeedbackForm from '../FeedbackForm/FeedbackForm';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <div>
        <Router>
            <Route path="/">
              <FeedbackForm />
            </Route>
            <Route path="/review">
              <ReviewFeedback />
            </Route>
        </Router>
      </div>
    </div>
  );
}

export default App;
