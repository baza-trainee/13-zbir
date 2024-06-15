import { FC } from "react";
import Test from "./components/Test/Test";
import Header from "./components/Header/Header";
import "./styles/index.scss";

const App: FC = () => {
  return (
    <>
      <Header/>
      <Test />
      <footer>Footer</footer>
    </>
  );
};

export default App;
