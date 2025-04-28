import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import PageTitle from "../PageTitle";

function Home() {
  return (
    <>
      <PageTitle />
      <Navbar />
      <main>
        <h1>Welcome to our shop !</h1>
        <p>We have a large selection of products you might find interesting.</p>
        <p>
          You can visit our Shop by using our navigation bar on top of the page,
          or by clicking this <Link to="/shop">link</Link> !
        </p>
      </main>
    </>
  );
}
export default Home;
