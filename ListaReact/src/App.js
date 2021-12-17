import { Container } from '@mui/material';
import { Grid, Box, AppBar, Toolbar, Typography } from '@mui/material'
import { getAllPhotos } from './Api/GetInfo';
import { CardPhoto } from './Components/CardUser';
import { useEffect, useState } from 'react'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    setUsers(await getAllPhotos());
  }, [])

  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: 5 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Photos List
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container>
        <Grid container spacing={2} >
          {users.map(item => <CardPhoto key={item.id} photoInfo={item} />)}
        </Grid>
      </Container>
    </>
  );
}

export default App;
