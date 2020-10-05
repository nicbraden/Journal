import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/appNavBar';
import NotesList from './components/notelist';
import { Provider } from 'react-redux';
import store from './store';
import NoteModal from './components/noteModal';
import { Container } from 'reactstrap';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <Container>
          <NoteModal />
          <NotesList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
