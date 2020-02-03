import React from 'react';
import  Blok  from '../../styledComponents/Blok';
import { Link } from 'react-router-dom';
// import { Button } from '../../../small';

const Header = () => {
    return(
        <div>
            <Blok width='100%' height='150px' background='aqua'>
                {/* <Button></Button> */}
            </Blok>
        </div>
    );
};

export default Header;