import styled from "styled-components";


const Text = styled.span`
    ${({size}) => size ? `font-size : ${size};` : ''}
    ${({color}) => color ? `color : ${color};` : ''}
    ${({weight}) => weight ? `font-weight : ${weight};` : ''}
    ${({decoration}) => decoration ? `text-decoration : ${decoration};` : ''}
    ${({shadow}) => shadow ? ` text-shadow : ${shadow};` : ''}
   
`;

export default Text;