import styled from 'styled-components';


const Blok = styled.div`
    ${({width}) => width ? `width: ${width};` : ''}
    ${({height}) => height ? `height: ${height};` : ''}
    ${({bgColor}) => bgColor ? `background-color: ${bgColor};` : ''}
    ${ ({margin}) => margin ? `margin: ${margin};` : '' }
    ${({padding}) => padding ? `padding: ${padding};` : ''}
    ${ ({border}) => border ? `border: ${border};` : '' }
    ${({radius}) => radius ? `border-radius: ${radius};` : ''}
    ${({flex}) => flex ? `flex : ${flex};` : ''}
    ${({justifyContent}) => justifyContent ? `justifyContent : ${justifyContent};` : ''}
    ${({alignItems}) => alignItems ? `alignItems : ${alignItems};` : ''}
    ${({direction}) => direction ? `flex-direction : ${direction};` : ''}
    ${({shadow}) => shadow ? `box-shadow : ${shadow};` : ''}
    ${({position}) => position ? `position : ${position};` : ''}
    ${({top}) => top ? `top : ${top};` : ''}
    ${({left}) => left ? `left : ${left};` : ''}
    ${({overflow}) => overflow ? `overflow : ${overflow};` : ''}
`;

export default Blok;