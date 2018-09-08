import React from 'react';
import Pet from './components/Pet';
import {connect} from 'react-redux';
import actions from './actions';
import './Dashboard.css';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchCat());
    this.props.dispatch(actions.fetchDog());
  }

  render() {
    if(!this.props.catToAdopt || !this.props.dogToAdopt){
      return <h2>Loading</h2>;
    } else {
      return (
        <div className="dashboard">
          <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={() => this.props.dispatch(actions.adoptCat())} />
          <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={() => this.props.dispatch(actions.adoptDog())} />
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  catToAdopt: state.catReducer.data,
  dogToAdopt: state.dogReducer.data
});

export default connect(mapStateToProps)(Dashboard);