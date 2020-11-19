/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurantDefaultPic from '../../assets/restaurante-fake.png';

import {
  Container,
  Search,
  Logo,
  Wrapper,
  CarouselTitle,
  Carousel,
} from './styles';

import { Card, RestaurantCard, Modal, Map } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [query, setQuery] = useState(null);
  const { restaurants } = useSelector(state => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(evt) {
    if (evt.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="App logo" />
          <TextField
            label="Pesquisar restaurantes"
            outlined
            value={inputValue}
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              onKeyPress={handleKeyPress}
              onChange={evt => setInputValue(evt.target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua área</CarouselTitle>
          <Carousel {...settings}>
            {restaurants.map(restaurant => (
              <Card
                key={restaurant.place_id}
                photo={
                  restaurant.photos
                    ? restaurant.photos[0].getUrl()
                    : restaurantDefaultPic
                }
                title={restaurant.name}
              />
            ))}
          </Carousel>
        </Search>
        {restaurants.map(restaurant => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </Container>
      <Map query={query} />
      {/* <Modal open={modalOpen} onClose={() => setModalOpen(!modalOpen)} /> */}
    </Wrapper>
  );
};

export default Home;
