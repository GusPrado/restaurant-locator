/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurantDefaultPic from '../../assets/restaurante-fake.png';
import Skeleton from '../Skeleton';

import {
  Restaurant,
  RestaurantInfo,
  Title,
  Address,
  RestPhoto,
} from './styles';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imagedLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars
          count={5}
          isHalf
          value={4}
          edit={false}
          activeColor="#e7711c"
        />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestPhoto
        imagedLoaded={imagedLoaded}
        src={
          restaurant.photos
            ? restaurant.photos[0].getUrl()
            : restaurantDefaultPic
        }
        onLoad={() => setImageLoaded(true)}
        alt="Restaurant front"
      />
      {!imagedLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
};

export default RestaurantCard;
