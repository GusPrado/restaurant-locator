/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurant from '../../assets/restaurante-fake.png';

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
            <Card photo={restaurant} title="Rest name" />
            <Card photo={restaurant} title="Rest name" />
            <Card photo={restaurant} title="Rest name" />
            <Card photo={restaurant} title="Rest name" />
            <Card photo={restaurant} title="Rest name" />
            <Card photo={restaurant} title="Rest name" />
          </Carousel>
        </Search>
        <RestaurantCard />
      </Container>
      <Map query={query} />
      {/* <Modal open={modalOpen} onClose={() => setModalOpen(!modalOpen)} /> */}
    </Wrapper>
  );
};

export default Home;
