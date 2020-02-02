import React from 'react';
import ButtonStyled from "./styled/buttonStyled";

const Button = ({children}) => {
    return(
        <ButtonStyled>
            {children}
        </ButtonStyled>
    );
}

export default Button;