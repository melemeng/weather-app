import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';



function  SearchBar(){

    const style = {

        position: 'absolute',
        top: '50px',
        left: '50%',
        transform:' translate(-50%, -50%)'
         };

    return(
        <Paper style={style} component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600 }}>
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ 'aria-label': 'search google maps' }}
        />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>


        </Paper>


    );
}

export default SearchBar;