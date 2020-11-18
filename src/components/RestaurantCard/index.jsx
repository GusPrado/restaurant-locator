import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurant from '../../assets/restaurante-fake.png';

import {
  Restaurant,
  RestaurantInfo,
  Title,
  Address,
  RestPhoto,
} from './styles';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do restaurante</Title>
      <ReactStars
        count={5}
        isHalf
        value={4}
        edit={false}
        activeColor="#e7711c"
      />
      <Address>Rua dos bobos, no. 0</Address>
    </RestaurantInfo>
    <RestPhoto src={restaurant} alt="Restaurant front" />
  </Restaurant>
);

export default RestaurantCard;
