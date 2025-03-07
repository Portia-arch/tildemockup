import './App.css';
// import { Fragment } from 'react';
import styled from 'styled-components';
import NavBar from './components/Navbar/NavBar'

const AppContainer = styled.div`
  max-width: full;
  margin: 0 auto;
`;

const App = () => {
  return (
    <AppContainer>
      <NavBar />
      {/* Your app content goes here */}
    </AppContainer>
  );
};

// function App() {
//   return (
//     <Fragment>|
//       <MenuAppBar />
//       </Fragment>
    
//   );
// }

export default App;