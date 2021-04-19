import './App.css';
import FilmList from "./containers/FilmList";

function App() {
  return (
    <div className="App">
      <h1>Upcoming Film Releases for the UK</h1>
      <div>
        <hr></hr>
        <FilmList />
        <hr></hr>
        <div id = 'link'>
          <a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases >></a>
        </div>
      </div>
    </div>
  );
}

export default App;
