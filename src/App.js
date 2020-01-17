import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';


const Blok = styled.div`
    ${({width}) => width ? `width: ${width};` : ''}
    ${({height}) => height ? `height: ${height};` : ''}
    ${({bgColor}) => bgColor ? `background-color: ${bgColor};` : ''}
   
`;

const App = () => {
    return (
        <>
            <GlobalStyles />
            <h1>Hello!!!</h1>
            <Blok width='170px' height='50px' bgColor='orange'></Blok> 
            <Blok width='80px' height='100px' bgColor='violet'></Blok> 
        </>
        
    )
};

export default App;