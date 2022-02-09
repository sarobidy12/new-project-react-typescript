import { Provider as StoreProvider } from 'mobx-react';
import * as stores from './Store';
import { BrowserRouter } from 'react-router-dom';
import Route from "./Route";

function App() {

  // Component will mount check for the session check

  return (
    <BrowserRouter>
      <StoreProvider {...stores}>
        <div className="app">
          <Route />
        </div>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
