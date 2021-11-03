import Box from './Components/Box/Box';
import Grid from './Components/Grid/Grid';
import GridRuler from './Components/GridRuler/GridRuler';


function App() {
  return (
    <div className="App" style={{ margin: '16px', position: 'relative' }}>
      <GridRuler spacing={'sm'} />
      <Grid container spacing="sm" justifyContent='center' >
        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 1 </Box>
        </Grid>

        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 2 </Box>
        </Grid>

        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 3 </Box>
        </Grid>

        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 4 </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
