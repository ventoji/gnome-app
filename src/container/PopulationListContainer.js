import {connect} from 'react-redux';
import { addGnomeItem } from '../actions/gnome';
import { addGnomes } from '../actions/gnomes';
import { bindActionCreators } from 'redux';
import PopulationList from '../components/PopulationList';
import selectGnomes from '../selectors/gnome';


const mapStateToProps = (state, props) => {

    return {
      gnome: state.gnome,
      filters: state.filters,
      gnomes: selectGnomes(state.gnomes, state.filters)
    };
  };

const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators({ addGnomeItem, addGnomes} , dispatch);

const PopulationListContainer = connect(mapStateToProps,mapDispatchToProps)(PopulationList);

export default PopulationListContainer;