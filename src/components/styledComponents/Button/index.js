import styled from 'styled-components';


const Button = styled.button`
    ${({background}) => background ? `background : ${background};` : '' }
    ${({width}) => width ? `width: ${width};` : ''}
    ${({height}) => height ? `height: ${height};` : ''}
`;


export default Button;
