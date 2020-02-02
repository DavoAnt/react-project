import React, {useEffect} from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Blok, Text, Button, Input } from "./components";
import { Users } from './pages';



    const App = () => {
        return (
            <>
                <GlobalStyles />
    
                <Users />

                <Button>Button</Button>
                <Input></Input>
            </>
        )
    };
export default App;