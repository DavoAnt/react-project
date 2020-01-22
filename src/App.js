import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Blok, Text } from "./components";


const App = () => {
    return (
        <>
            <GlobalStyles />
            <h1>Hello!!!</h1>
            <Blok 
                bgColor="orange"
                width="500px"
                height="400px"
                border="4px solid"
                radius="15px"
                display-flex=" center "                
                position="relative"
                top="50px"
                left="300px"
                shadow="1px 1px 5px black"
                // justifyContent="center"
                // alignItems="center"
                // direction="column"
                overflow="auto"
             ></Blok>
             <Text
                size="50px"
                color="aqua"
                weight="bold"
                decoration="underline"
                shadow="2px 2px #ff0000"
                position="relative"
                left="25px"
             >
                 <span>lorem ipsum </span>
                 
             </Text>
        </>
        
    )
};

export default App;