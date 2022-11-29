import "./Header.css";
import logo from '../images/react-logo.png';
export default function Header() {
    return(
        <div className="header">
            <nav className="nav">
                <img src={logo}  className="nav-icon" /> 
                <h3 className='nav-logo-text'>Meme Generator</h3>
                <label className='nav-title'>React Course - Project 1</label>
            </nav>
            
        </div>
    )

}
