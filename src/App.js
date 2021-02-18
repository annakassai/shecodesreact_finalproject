import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Vienna"/>
        <div className="footer-container">
        <small className="link">Coded by 
            <a 
            className="linkedin-link"
            href="https://www.linkedin.com/in/annakassai91/"
            target="_blank"
            rel="noreferrer"
            > Anna Kassai 
            </a> open sourced on <a
            className="github-link"
            href="https://github.com/annakassai/shecodesreact_finalproject"
            target="_blank"
            rel="noreferrer"
            >
            GitHub
            </a> hosted on
            <a
            className="netlify-link"
            href="https://confident-dijkstra-8805d3.netlify.app"
            target="_blank"
            rel="noreferrer"> Netlify
            </a>
        </small>
      </div>
    </div>
  </div>  
  );
}

export default App;
