import { useEffect, useState } from "react";
import SignIn from "./page/SignIn";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className='App'>
      {isLogin ?
        <></>
        :
        <SignIn />
      }
    </div>
  );
}

export default App;
