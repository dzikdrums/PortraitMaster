import { connect } from 'react-redux';
import { votePhotoRequest, getRequest, LOAD_PHOTOS } from '../../../redux/photosRedux';
import { LOAD_VOTERS, getVoters, likePhotoRequest } from '../../../redux/votersRedux';
import Photos from './Photos'

const mapStateToProps = state => ({
  request: getRequest(state, LOAD_PHOTOS),
  getVoters: getVoters(state, LOAD_VOTERS),
});

const mapDispatchToProps = dispatch => ({
  votePhoto: id => dispatch(votePhotoRequest(id)),
  likePhoto: id => dispatch(likePhotoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
