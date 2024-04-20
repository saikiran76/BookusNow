import { Provider } from 'react-redux';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Recommended from './components/List';
import Location from './components/location';
import appStore from './utils/appStore';
// import SecondaryContainer from './components/Container';
import Upcoming from './components/Upcoming';
import { lazy } from 'react';
import { Suspense } from "react";
import Shimmer from './components/Shimmer';


const SecondaryContainer = lazy(() => import('./components/SecondaryContainer'));

function App() {
  return (
   
        <div>
        <Provider store={appStore}>
            <Header/>
            <Location/>
            <Banner/>
            <Suspense fallback={<div className="spinner text-center">
                <span>Events on fly</span>
                <div className="half-spinner"></div>
              </div>}>
                <SecondaryContainer/>

            </Suspense>
            <Upcoming/>
        
            </Provider>
        </div>
        
      

  );
}

export default App;
