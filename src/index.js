import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import App from './App';

export default App

if (typeof document !== 'undefined') {
    const target = document.getElementById('root')
  
    const renderMethod = module.hot
      ? ReactDOM.hydrate
      : ReactDOM.render
  
    const render = Comp => {
      renderMethod(
        <AppContainer>
          <Comp />
        </AppContainer>,
        target
      )
    }
    
    render(App)

}