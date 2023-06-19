import React from 'react';

import { Container } from './styles';
import ButtonTheme from '../ButtonTheme';

export default function Footer({onToggleTheme, selectedTheme}) {
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <ButtonTheme
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
    </Container>
  );
}