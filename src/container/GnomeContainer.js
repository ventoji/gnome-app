import {connect} from 'react-redux';
import Gnome from '../components/Gnome';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        state: state.gnome
    };
};

const GnomeContainer = connect(mapStateToProps)(Gnome);

export default withRouter(GnomeContainer);

