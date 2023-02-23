import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, makeStyles, Box, Grid, TextField, Radio, RadioGroup, FormControlLabel, Button, FormControl, FormLabel, Checkbox } from "@material-ui/core";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState({
    image: '',
    name: '',
    email: '',
    number: '',
    password: '',
    select: '',
    radio: '',
    checkbox: false
  })
  const [error, setError] = useState("");

console.log(user);

  const handleInputChange = (event) => {
    const { name, value, type, checked,files } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value

    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const addError={}

    if(!user.name){
      addError.name="This field is required"
    }
    setError(addError)

    if (Object.keys(addError).length === 0){
      

      try {
        console.log(user);
        await axios.post(`http://localhost:3004/users`, user)
        
        navigate('/list')
      } catch (erroe) {
        console.log("something is wrong");
      }
    }

  };



  return (
    <>
      <div style={{ textAlign: "center", background: "#3f51b5" }}>
        <Typography >
          <h1 style={{ color: "aliceblue", padding: "15px" }}>Add User  </h1>
        </Typography>
      </div>

      <Box sx={{ flexGrow: 1 }} style={{ padding: "40px" }} >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} >
            <Grid xs={6} style={{ paddingBottom: "20px" }}>
              <TextField     name="image" type="file" variant="outlined"  onChange={handleInputChange} fullWidth />

            </Grid>

            <Grid xs={6}>
              <TextField id="name"  name="name" label="Name" variant="outlined" fullWidth value={user.name} onChange={handleInputChange} />
               <span style={{ color: 'red' }}>{error.name}</span>

            </Grid>

            <Grid xs={6} style={{ paddingBottom: "20px" }}>
              <TextField id="email" name="email" label="Email" variant="outlined" fullWidth value={user.email} onChange={handleInputChange} />

            </Grid>

            <Grid xs={6}>
              <TextField id="number" name="number" label="Number" variant="outlined" fullWidth value={user.number} onChange={handleInputChange} />

            </Grid>
            <Grid xs={6} >
              <TextField id="password" name="password" label="Password" variant="outlined" fullWidth value={user.password} onChange={handleInputChange} />

            </Grid>
            <Grid xs={6}>
              <label for="pet-select">Choose a pet:</label>

              <select id="pet-select" name="select" value={user.select} onChange={handleInputChange}>
                <option value="">--Please choose an option--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
              </select>

            </Grid>
            <Grid xs={6}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup

                  style={{ flexDirection: "initial " }}

                >
                  <FormControlLabel type="radio" name="radio" value="female" control={<Radio />} label="Female" checked={user.radio === 'female'} onChange={handleInputChange} />

                  <FormControlLabel type="radio" name="radio" value="male" control={<Radio />} checked={user.radio === 'male'} onChange={handleInputChange} label="Male" />
                  <FormControlLabel type="radio" name="radio" value="other" control={<Radio />} checked={user.radio === 'other'} onChange={handleInputChange} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid xs={6}>
              <label for="pet-select">Termis and conditions:</label>

              <Checkbox name="checkbox" value={user.checkbox} onChange={handleInputChange} />

            </Grid>

          </Grid>
          <Grid xs={12} style={{ textAlign: "center" }}>

            <Button type='submit' variant="contained">Create User</Button>
          </Grid>


        </form>
      </Box>



    </>
  )
}

export default Home
