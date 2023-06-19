import styled from 'styled-components';


export const Container = styled.button`
    
    button {
        font-size: 24px;
        background: ${({ theme }) => theme.buttonBackgroundColor};
        color: ${({ theme }) => theme.textColorButton};
        border-radius: 15px;
        padding: 8px;
    }
    `;
