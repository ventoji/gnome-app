import {connect} from 'react-redux';
import Gnome from '../components/Gnome';
import { withRouter } from 'react-router-dom';

export const mapStateToProps = state => ({
        ...state.gnome
});

const GnomeContainer = connect(mapStateToProps)(Gnome);

export default withRouter(GnomeContainer);

