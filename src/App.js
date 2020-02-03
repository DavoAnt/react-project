import React, {useEffect} from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Blok, Text, Button, Input, Header } from "./components";
import { Users } from './pages';
import { Route, Switch } from 'react-router-dom';



    const App = () => {
        return (
            <>
                <GlobalStyles />
    
            
                <Route exact path='/Header'>
                    <Header />
                </Route>   

                <Route exact path='/Users'>
                    <Users />
                </Route>   

                <Route exact path='/Input'>
                    <Input />
                </Route>   

                <Route exact path='/Button'>
                    <Button>Button</Button>
                </Route>   

               
            </>
        )
    };
export default App;