import './header.css' ;
import Nav from '../Nav/Nav' ; //.js 


export default function Header(props){
    const name = props.yourname ;
    const title = props.yourtitle ;
    const fullname = name+title ;
    return(
        
        <div className='head'>
            <h1> Hello , {name} {title}</h1>
            <Nav check = {fullname}/>
        </div>
        
    );
}