import React from 'react';

import AppBar from './components/AppBar/AppBar';
import Footer from './components/Footer/Footer';
import { StateProvider } from './context/StateContext';
import AppRouter from './routes/AppRouter';

import './App.css';

function App() {

  return (
    <div className="App">
      <StateProvider>
        <AppBar />
        <AppRouter />
        <Footer />
      </StateProvider>
    </div>
  );
}

export default App;
