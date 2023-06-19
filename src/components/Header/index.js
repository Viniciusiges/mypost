import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import ButtonTheme from '../ButtonTheme';

export default function Header({ onToggleTheme, selectedTheme }) {
  
  const history = useHistory();

  function handleNavegate() {
    history.push('/posts');
  }

console.log(history)
  
  return (
    <Container>
      <h1>JavaScript | React Blog</h1>
      <ButtonTheme
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}/>
      <butom onClick={handleNavegate} style={{color: '#fff'}}>Navegate</butom>

    </Container>
  );
}

/*<button 
type="button"
onClick={onToggleTheme}
>🌞</button>*/