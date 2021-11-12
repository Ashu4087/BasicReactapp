//  import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header' ;
import Weather from '../Weather/Weather';

export default function App() {

  // const appname = 'App' ;
  // const usrname = "Ashutosh";
  // const usrtitle = 'kumar' ;
  return (
    // <div className= 'App'>
    //   <h1 className='hello'>Hello World</h1>
    // </div>
    <div className={appname}>
      <Weather/>
    </div>
  );
}

