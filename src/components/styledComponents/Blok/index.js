import styled from 'styled-components';


const Blok = styled.div`
    ${({width}) => width ? `width: ${width};` : ''}
    ${({height}) => height ? `height: ${height};` : ''}
    ${({bgColor}) => bgColor ? `background-color: ${bgColor};` : ''}
    ${ ({margin}) => margin ? `margin: ${margin}` : '' }
    ${ ({border}) => border ? `border: ${border}` : '' }
   
`;


export default Blok;