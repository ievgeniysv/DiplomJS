import React from 'react';
import { connect } from 'react-redux';
import { unsplashPhotosAC } from '../../redux/Actions/Actions';
import { RandomPhoto } from '../../Component/RandomPhoto/RandomPhoto';
import { Photos } from '../../Component/Photos/Photos';

export class UnsplashPhotos extends React.Component {

  componentDidMount() {
    this.props.getPhotos();
    this.props.getRandomPhoto();
    window.addEventListener('scroll', this.downloadPhotos);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.downloadPhotos);
  }

  downloadPhotos = () => {
    const BEFORE_BOTTOM = 450;
    let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    let scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    let clientHeight = document.documentElement.clientHeight || window.innerHeight;
    let scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= (scrollHeight - BEFORE_BOTTOM);
    if (scrolledToBottom && !this.props.isFetching) {
      this.props.addPhotos();
    }
  }

  toggleLikeOnPhotoHandler = (id, like) => {
    this.props.toggleLikeOnPhoto(id, like);
  }

  render() {
    return (
      <>
        <RandomPhoto
          randomPhoto={this.props.randomPhoto}
        />
        <Photos
          photos={this.props.photos}
          toggleLikeOnPhoto={this.props.toggleLikeOnPhoto}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.unsplashPhoto.photos,
    randomPhoto: state.unsplashPhoto.randomPhoto,
    isFetching: state.common.isFetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotos: () => {
      dispatch(unsplashPhotosAC.getPhotos());
    },
    addPhotos: () => {
      dispatch(unsplashPhotosAC.addPhotos());
    },
    getRandomPhoto: () => {
      dispatch(unsplashPhotosAC.getRandomPhoto());
    },
    toggleLikeOnPhoto: (id, like) => {
      dispatch(unsplashPhotosAC.toggleLikeOnPhoto(id, like));
    }
  }
}

UnsplashPhotos = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnsplashPhotos);
