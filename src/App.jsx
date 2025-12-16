import { HashRouter } from "react-router-dom";

import {Hero,Navbar} from "./components";

const App = () => {
  return (
    <HashRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
       </div>
    </HashRouter>
  );
}

export default App;
