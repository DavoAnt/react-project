import React from 'react';
import InputStyled from './styled/inputStyled';


const Input = ({children}) => {
    return(
        <InputStyled>
            {children}
        </InputStyled>
    )
}

export default Input;