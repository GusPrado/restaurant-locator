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
  ModalTitle,
  ModalContent,
} from './styles';

import {
  Card,
  RestaurantCard,
  Modal,
  Map,
  Loader,
  Skeleton,
} from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpen, setModalOpen] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [query, setQuery] = useState(null);
  const { restaurants, restaurantSelected } = useSelector(
    state => state.restaurants,
  );

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
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

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpen(true);
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
          {restaurants.length > 0 ? (
            <>
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
            </>
          ) : (
            <Loader />
          )}
        </Search>
        {restaurants.map(restaurant => (
          <RestaurantCard
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpen} onClose={() => setModalOpen(!modalOpen)}>
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>
              {restaurantSelected?.formatted_phone_number}
            </ModalContent>
            <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
            <ModalContent style={{ fontWeight: 'bold' }}>
              {restaurantSelected?.opening_hours?.open_now
                ? 'Aberto agora :-)'
                : 'Fechado neste momento :('}
            </ModalContent>
          </>
        ) : (
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>
  );
};

export default Home;
