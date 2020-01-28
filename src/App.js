import React, {useEffect} from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Blok, Text, Button } from "./components";


const App = () => {
    useEffect(() =>{
        fetch('https://api.github.com/users')
           .then(response =>{
               response.json()
               .then((data) => {
                   const names = data.map(p => p.login);
                   const avatar = data.map(p => p.avatar_url);
                   console.log(names, avatar);
                //    console.log(data[0].login, data[0].avatar_url);
               })
           })
    });


    return (
        <>
            <GlobalStyles />
            <h1>Hello!!!</h1>
            <Blok 
                background="orange"
                width="500px"
                height="400px"
                border="4px solid"
                radius="15px"
                display-flex=" center "                
                position="relative"
                top="50px"
                left="350px"
                shadow="1px 1px 5px black"
                justifyContent="center"
                alignItems="center"
                direction="column"
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

             <Button
                width="45px"
                height="30px"
                background="red"
             >
                 ok
             </Button>

             
        </>
        
    )
};

export default App;