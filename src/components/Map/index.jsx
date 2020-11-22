/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { setRestaurants, setRestaurant } from '../../redux/modules/restaurants';

export const MapContainer = props => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector(state => state.restaurants);
  const [map, setMap] = useState(null);
  const { google, query, placeId } = props;

  const searchByQuery = useCallback(
    (map, query) => {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setRestaurants([]));

      const request = {
        location: map.center,
        radius: '300',
        type: ['restaurant'],
        query,
      };

      service.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurants(results));
        }
      });
    },
    [dispatch, google],
  );

  const getRestaurantDetails = useCallback(
    (placeId, map) => {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setRestaurant(null));

      const request = {
        placeId,
        fields: [
          'name',
          'opening_hours',
          'formatted_address',
          'formatted_phone_number',
        ],
      };

      service.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurant(place));
        }
      });
    },
    [dispatch, google],
  );

  useEffect(() => {
    if (query) {
      searchByQuery(query);
    }
  }, [query, searchByQuery]);

  useEffect(() => {
    if (placeId) {
      getRestaurantDetails(placeId);
    }
  }, [getRestaurantDetails, placeId]);

  function searchNearby(map, center) {
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurants([]));

    const request = {
      location: center,
      radius: '5000',
      type: ['restaurant'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    });
  }

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
      {...props}
    >
      {restaurants.map(restaurant => (
        <Marker
          key={restaurant.place_id}
          name={restaurant.name}
          position={{
            lat: restaurant.geometry.location.lat(),
            lng: restaurant.geometry.location.lng(),
          }}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);
