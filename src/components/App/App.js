//  import logo from './logo.svg';
import './App.css';

import Header from '../Header/Header' ;

export default function App() {

  const appname = 'App' ;
  const usrname = "Ashutosh";
  const usrtitle = 'kumar' ;
  return (
    // <div className= 'App'>
    //   <h1 className='hello'>Hello World</h1>
    // </div>
    <div className={appname}>
      <Header yourname = {usrname}  yourtitle = {usrtitle}/>
    </div>
  );
}

