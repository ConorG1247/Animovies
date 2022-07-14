import NavBar from "../NavBar/NavBar";
import Main from "../Main/Main";
import NewMovies from "../NewMovies/NewMovies";

function Home() {
  return (
    <div>
      <NavBar />
      <br />
      <Main />
      <NewMovies />
    </div>
  );
}

export default Home;

// style={{ transform: `translateY(${offsetY * 0.5}px)`}}
