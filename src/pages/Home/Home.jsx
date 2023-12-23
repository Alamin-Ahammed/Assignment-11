import logo from '../../assets/react.svg';
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <img src={logo} alt="logo" className="logo_Home_page" />
      <h1 className="heading">React Dev</h1>
      <h2 className="subheading">The library for web and native user interfaces</h2>
      
      <div className="button-container">
        <button className="button">Learn More</button>
        <button className="button api-button">API Reference</button>
      </div>
    </div>
  );
}
