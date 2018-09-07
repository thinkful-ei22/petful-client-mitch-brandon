import React from 'react';
import Pet from './components/Pet';
import {connect} from 'react-redux';
import actions from './actions';

export class Dashboard extends React.Component {
  componentWillMount() {
    this.props.dispatch(actions.fetchCat());
    this.props.dispatch(actions.fetchDog());
  }

  render() {
    console.log('props:', this.props);

    if (this.props.catToAdopt === null || this.props.dogToAdopt === null){
      return <h2>Loading</h2>;
    } else {
      return (
        <div className="dashboard">
          <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={() => this.props.dispatch(actions.adoptCat())} />
          <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={() => this.props.dispatch(actions.adoptDog())} />
        </div>
      );}
  }
}

export const mapStateToProps = state => ({
  catToAdopt: state.catReducer,
  dogToAdopt: state.dogReducer
});

export default connect(mapStateToProps)(Dashboard);