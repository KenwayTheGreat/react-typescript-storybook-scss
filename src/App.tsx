import Box from './Components/Box/Box';
import Grid from './Components/Grid/Grid';


function App() {
  return (
    <div className="App" style={{margin: '16px'}}>
      <Grid container spacing="md" >
        <Grid item cols={6}>
          <Box>Box 1 </Box>
        </Grid>

        <Grid item cols={6}>
          <Box>Box 2 </Box>
        </Grid>

        <Grid item cols={6}>
          <Box>Box 3 </Box>
        </Grid>

        <Grid item cols={6}>
          <Box>Box 4 </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
