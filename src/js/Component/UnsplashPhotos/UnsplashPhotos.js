import React from 'react';
import s from './UnsplashPhotos.scss';
import { Photos } from '../Photos/Photos';
import { connect } from 'react-redux';
import { unsplashPhotosAC } from '../../redux/Actions/Actions';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { RandomPhoto } from '../RandomPhoto/RandomPhoto';

export class UnsplashPhotos extends React.Component {

  componentDidMount() {
    this.props.getPhotos();
    this.props.getRandomPhoto();
    window.addEventListener('scroll', this.downloadPhotos);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll',this.downloadPhotos);
  }

  downloadPhotos = () => {
    const BEFORE_BOTTOM = 450;
    let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    let scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    let clientHeight = document.documentElement.clientHeight || window.innerHeight;
    let scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= (scrollHeight - BEFORE_BOTTOM);
    if (scrolledToBottom) {
      this.props.addPhotos();
    }
  }

  render() {
    const photos = this.props.photos;
    const photoList = photos.map(p => {
      // noinspection JSUnresolvedVariable
      const date = new Date(p.created_at).toLocaleString('ru');
      // noinspection JSUnresolvedVariable
      return (
        <Photos
          key={p.id}
          id={p.id}
          likes={p.likes}
          createdAt={date}
          user={p.user.name}
          userImg={p.user.profile_image.small}
          url={p.urls.small}
        />
      )
    })
    return (
      <>
        <RandomPhoto
          randomPhoto={this.props.randomPhoto}
        />
        <div className={`${s.photoContainer} center`}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{320: 1, 450: 2, 768: 3}}
          >
            <Masonry
              gutter={'10'}
            >
              {photoList}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.unsplashPhoto.photos,
    randomPhoto:state.unsplashPhoto.randomPhoto,
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

  }
}

UnsplashPhotos = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnsplashPhotos);
