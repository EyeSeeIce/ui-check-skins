import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {PrimeReactProvider} from "primereact/api";
import {store} from "./redux/store.ts";
import {Provider} from "react-redux";
import { BrowserRouter } from "react-router";
import 'rsuite/dist/rsuite.min.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
          <PrimeReactProvider>
            <Provider store={store}>
              <App/>
            </Provider>
          </PrimeReactProvider>
        </BrowserRouter>
    </StrictMode>,
)
