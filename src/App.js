import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Logo from './images/logo.png';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import SchoolIcon from '@mui/icons-material/School';
import GoogleIcon from '@mui/icons-material/Google';

export default function App()
{

  
  const [lang,setLang] = React.useState("English");

  const changeLang = (event) => {
    setLang(event.target.value);
  }

  return(
   
    <div className = 'container'>

      <div className = 'container_wallpaper'>
        <img src = {Logo} className = 'logo' />
        <h1 className = 'wallpaper_heading'> WOODS UNIVERSITY </h1>
        <p className = 'wallpaper_context'> LEARN. EARN </p>
      </div>
      
      <div className = 'container_main'>

        <div className = 'language'> 
         <FormControl variant = 'standard' sx = {{m : 1,minWidth : 100}}> 

            <InputLabel id="language-label"> Language </InputLabel>
            <Select labelId = 'language-label' value = {lang} onChange = {changeLang} label = 'Language'>
              <MenuItem value = 'English'> English (EN) </MenuItem>
              <MenuItem value = 'Hindi'> Hindi (HI) </MenuItem>
              <MenuItem value = 'French'> French (FR) </MenuItem>
              <MenuItem value = 'Russian'> Russian (RU) </MenuItem>
              <MenuItem value = 'British English'> British English (BE) </MenuItem>
            </Select>
         
         </FormControl>
        </div>

        <h1 className = 'signup_heading'> Sign up here </h1> 
        
        <FormGroup>
          <TextField sx = {{width : 260,height : 40,marginTop : 3,marginLeft : 3,input : {fontFamily : 'Poppins',fontSize : 15} }} required label = 'Name' color = 'secondary'/>
          <TextField sx = {{width : 260,height : 40,marginTop : 3,marginLeft : 3,input : {fontFamily : 'Poppins',fontSize : 15}}} required label = 'Email' color = 'secondary'/>
          <TextField type = 'password' sx = {{width : 260,height : 40,marginTop : 3,marginLeft : 3,input : {fontFamily : 'Poppins',fontSize : 15}}} required label = 'Password' color = 'secondary'/>
          <FormControlLabel sx = {{ marginTop : 3,marginLeft : 2,'& .MuiFormControlLabel-label': { fontFamily: 'Poppins',fontSize : 15,letterSpacing : -0.6} }} control={<Checkbox sx = {{ color: purple[800],'&.Mui-checked': { color: purple[600]} }} />} label= "Keep me signed in" />
        </FormGroup>

        <div className = 'signup_extra'>
          <FormControlLabel sx = {{marginTop : 1,marginLeft : 3}} control = {<Button sx = {{ fontFamily : 'Poppins'}} variant = 'contained' color = 'secondary' endIcon = {<SchoolIcon />}> Sign Up </Button>}/>
          <h2 className = 'signup_extra_heading'> OR </h2>
          <FormControlLabel sx = {{marginTop : 1,marginLeft : 3}} control = {<Button sx = {{ fontFamily : 'Poppins'}} variant = 'contained' color = 'error' endIcon = {<GoogleIcon />}> Sign Up With Google </Button>}/>
        </div>

      </div>

    </div> 
  )
}