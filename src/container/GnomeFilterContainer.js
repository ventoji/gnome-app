import {connect} from 'react-redux';
import { setTextFilter } from '../actions/filter';
import { bindActionCreators } from 'redux';
import GnomeFilter from '../components/GnomeFilter';


const mapStateToProps = (state) => {
    return {
      state: state.filters,
      gnome: state.gnome
    };
  };

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ setTextFilter} , dispatch);

const GnomeFilterContainer = connect(mapStateToProps,mapDispatchToProps)(GnomeFilter);

export default GnomeFilterContainer;