// Librairies
import React from 'react';
import classes from './Commander.module.css';
import actionTypes from '../../store/actions';

// Redux
import { connect } from 'react-redux';

function Commander(props) {
    return (
        <div className={classes.Commander}>
            <button onClick={() => props.createMinion(1)}>Créer un minion</button>
            <button onClick={() => props.destroyMinion(1)}>Détruire un minion</button>
            <button onClick={() => props.createTeam(5)}>Créer une équipe de 5 minions</button>
            <button onClick={() => props.destroyTeam(5)}>Détruire une équipe de 5 minions</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        createMinion: (nbr) => dispatch({type: actionTypes.CREATE_MINION, value: nbr}),
        destroyMinion: (nbr) => dispatch({type: actionTypes.DESTROY_MINION, value: nbr}),
        createTeam: (nbr) => dispatch({type: actionTypes.CREATE_TEAM, value: nbr}),
        destroyTeam: (nbr) => dispatch({type: actionTypes.DESTROY_TEAM, value: nbr}),
    }
}

export default connect(null, mapDispatchToProps)(Commander);