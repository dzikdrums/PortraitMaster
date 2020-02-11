import { connect } from 'react-redux';
import { loadPhotosRequest } from './redux/photosRedux';
import { loadVotersRequest } from './redux/votersRedux';
import App from './App';

const mapDispatchToProps = dispatch => ({
  loadPhotos: () => dispatch(loadPhotosRequest()),
  loadVoters: () => dispatch(loadVotersRequest()),
});

export default connect(null, mapDispatchToProps)(App);
