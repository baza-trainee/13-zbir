import { FC } from "react";
import style from "./Test.module.scss";

const Test: FC = () => {
  return (
    <main>
      <div className={style.test}>Test</div>
<<<<<<< HEAD
=======
      <ReusableButton
        text="Задонатити"
        href="url"
        target="_blank"
        rel="noopener noreferrer"
      />
      <ReusableButton text="Поділитися збором" onClick={() => alert('Hello')} />
>>>>>>> 2ce5ad8 (fix button props, add props type ts file)
    </main>
  );
};

export default Test;
