import {connect} from 'react-redux';
import { setTextFilter } from '../actions/filter';
import { bindActionCreators } from 'redux';
import GnomeFilter from '../components/GnomeFilter';


export const mapStateToProps = state => ({
  state: state.filters
});

export const mapDispatchToProps = dispatch =>
    bindActionCreators({ setTextFilter} , dispatch);

const GnomeFilterContainer = connect(mapStateToProps,mapDispatchToProps)(GnomeFilter);

export default GnomeFilterContainer;