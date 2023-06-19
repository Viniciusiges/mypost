import React from "react";
import { Container } from "./styles";


const ButtonTheme = ({ onToggleTheme }) => {
    return (
        <Container>
            <button 
                onClick={onToggleTheme}    
            >Tema</button>
        </Container>
    );
}

export default ButtonTheme;