import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import logo from '../../assets/logo.svg';

import { Container, Search } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Container>
      <Search>
        <img src={logo} alt="App logo" />
        <TextField label="Pesquisar" outlined>
          <Input
            value={inputValue}
            onChange={evt => setInputValue(evt.target.value)}
          />
        </TextField>
      </Search>
    </Container>
  );
};

export default Home;
