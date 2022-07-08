import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Main from "../Main/Main";

function Home() {
  // handles scrolling parralax effect state
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <NavBar />
      <br />
      <Main offsetY={offsetY} />
      <div style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
      </div>
    </div>
  );
}

export default Home;

// style={{ transform: `translateY(${offsetY * 0.5}px)`}}
