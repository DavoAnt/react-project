import styled from 'styled-components';


const Blok = styled.div`
    ${({width}) => width ? `width: ${width};` : ''}
    ${({height}) => height ? `height: ${height};` : ''}
    ${({background}) => background ? `background: ${background};` : ''}
    ${ ({margin}) => margin ? `margin: ${margin};` : '' }
    ${({padding}) => padding ? `padding: ${padding};` : ''}
    ${ ({border}) => border ? `border: ${border};` : '' }
    ${({radius}) => radius ? `border-radius: ${radius};` : ''}
    ${({flex}) => flex ? 'display: flex;' : ''}
    ${({justifyContent}) => justifyContent ? `justify-content : ${justifyContent};` : ''}
    ${({alignItems}) => alignItems ? `align-items : ${alignItems};` : ''}
    ${({direction}) => direction ? `flex-direction : ${direction};` : ''}
    ${({shadow}) => shadow ? `box-shadow : ${shadow};` : ''}
    ${({position}) => position ? `position : ${position};` : ''}
    ${({top}) => top ? `top : ${top};` : ''}
    ${({left}) => left ? `left : ${left};` : ''}
    ${({overflow}) => overflow ? `overflow : ${overflow};` : ''}
`;

export default Blok;