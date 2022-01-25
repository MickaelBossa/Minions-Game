// Librairies
import React from 'react';
import classes from './App.module.css';

// Composants
import Header from './Components/Header/Header';
import Commander from './Components/Commander/Commander';

// Redux
import { connect } from 'react-redux';

function App(props) {



  return (
    <div className={classes.App}>
      <Header />

      <div className="container">
        <div className={classes.content}>
          <h1>À la conquête du monde</h1>
          <div className={classes.minions}>
            <span>{props.minions}</span>
            minions infiltrés
          </div>
        </div>

        <Commander />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    minions: state.minions
  }
}

export default connect(mapStateToProps)(App);
