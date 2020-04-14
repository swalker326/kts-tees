import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

import {useInterval} from '../hooks/useInterval';

import './Carousel.css';

const Carousel = (props) => {
  const { images } = props;
  const { autoplay } = props;
  const { delay } = props;
  const { fluid } = props;
  const { thumbnails } = props;

  const [displayImageIndex, setDisplayImageIndex] = useState(0);

  const nextPhoto = () => {
    displayImageIndex === images.length - 1 ? setDisplayImageIndex(0) : setDisplayImageIndex(displayImageIndex + 1);
  }
  const previousPhoto = () => {
    displayImageIndex === 0 ? setDisplayImageIndex(images.length - 1) : setDisplayImageIndex(displayImageIndex - 1);
  }
  const setPhoto = (index) => {
    setDisplayImageIndex(index);
  }
  useInterval(() => {
    if (autoplay) nextPhoto();
  }, delay)

  return (
    <div className='Carousel' >
      <div className='Carousel-display-image' style={{backgroundImage: `url(${images[displayImageIndex]})`}}>
        <span onClick={() => previousPhoto()} style={{cursor: 'pointer'}}>
          <ArrowLeft size={70}/>
        </span>
        {/* <Image className ='displayed-image' fluid={fluid} src={images[displayImageIndex]} alt='' /> */}
        <span onClick={() => nextPhoto()} style={{cursor: 'pointer'}}>
          <ArrowRight size={70} />
        </span>
      </div>
      {thumbnails ?
      <div className='Carousel-thumbnails' style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        {images.map((image,index) => <Image key={index} onClick={() => setPhoto(index)} className='image-thumb' src={image} fluid thumbnail />)}
      </div> : null}

    </div>
  )
}

export default Carousel