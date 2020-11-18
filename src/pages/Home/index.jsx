import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from 'react-slick';

import logo from '../../assets/logo.svg';
import restaurant from '../../assets/restaurante-fake.png';

import {
  Container,
  Search,
  Logo,
  Wrapper,
  Map,
  CarouselTitle,
  Carousel,
} from './styles';
import { Card } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

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
            <Input onChange={evt => setInputValue(evt.target.value)} />
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
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
