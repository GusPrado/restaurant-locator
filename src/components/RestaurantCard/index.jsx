/* eslint-disable react/prop-types */
import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurantDefaultPic from '../../assets/restaurante-fake.png';

import {
  Restaurant,
  RestaurantInfo,
  Title,
  Address,
  RestPhoto,
} from './styles';

const RestaurantCard = ({ restaurant, onClick }) => (
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
      src={
        restaurant.photos ? restaurant.photos[0].getUrl() : restaurantDefaultPic
      }
      alt="Restaurant front"
    />
  </Restaurant>
);

export default RestaurantCard;
