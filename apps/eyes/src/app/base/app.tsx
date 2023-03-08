import React from 'react';
import PageContainer from '../components/Containers/page';
import Files from '../modules/files/index';
import Gamers from '../modules/gamers/index';

const App: React.FC = () => {
  return (
    <PageContainer id="app-container">
      <Gamers />
      <Files />
    </PageContainer>
  );
};

export default App;
