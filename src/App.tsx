import Box from './Components/Box/Box';
import Grid from './Components/Grid/Grid';


function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item>
          <Box>Box 1 </Box>
        </Grid>

        <Grid item>
          <Box>Box 2 </Box>
        </Grid>

        <Grid item>
          <Box>Box 3 </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
