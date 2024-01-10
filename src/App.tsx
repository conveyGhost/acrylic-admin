import AuthProvider from "./provider/authProvider";

import './assets/css/App.scss';
import { store } from "./store";
import { Provider } from "react-redux";
import { Router } from "./router";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router/>
      </Provider>
    </div>
    
  );
}

export default App
