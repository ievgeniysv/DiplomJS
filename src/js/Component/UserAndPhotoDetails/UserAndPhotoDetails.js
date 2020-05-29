import React from 'react';
// noinspection ES6CheckImport
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserDetails } from '../UserDetails/UserDetails';
import { PhotoDetails } from '../PhotoDetails/PhotoDetails';
import { photoAndUserDetailsAC, unsplashPhotosAC } from '../../redux/Actions/Actions';
import { MainPreloader } from '../Common/MainPreloader';


export class UserAndPhotoDetails extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    // noinspection JSUnresolvedVariable
    this.props.setUserAndPhotoInfo(this.props.match.params.userName, this.props.match.params.photoId);
  }

  render() {
    if (this.props.isFetching) {
      return <MainPreloader/>
    } else {
      return (
        <>
          <UserDetails
            user={this.props.user}
          />
          <PhotoDetails
            photo={this.props.photo}
          />
        </>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userAndPhotoDetails.user,
    photo: state.userAndPhotoDetails.photo,
    isFetching: state.common.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserAndPhotoInfo: (userName, photoId) => {
      dispatch(photoAndUserDetailsAC.setUserAndPhotoInfo(userName, photoId));
    }
  }
}
UserAndPhotoDetails = withRouter(UserAndPhotoDetails);

UserAndPhotoDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAndPhotoDetails);