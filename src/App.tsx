import React from "react";
import { Header, Loader } from "./components/elements";
import "./App.scss";
import partLogo from "./img/Vector (2).png";
import partLogoSecond from "./img/Vector (3).png";
function App() {
  return (
    <div className="App">
      <Header /> <Loader />
      <div className="glass">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos
          molestiae dicta in ut aliquid quia? Aliquid, nostrum ducimus vitae
          reprehenderit placeat id, qui perspiciatis praesentium, dignissimos
          suscipit eaque laboriosam? Porro facere ratione fugiat accusamus
          aliquam amet, maxime ipsa excepturi minima aut unde consequuntur?
          Quaerat ipsa error dicta blanditiis. Animi hic voluptatem amet harum,
          inventore eligendi modi rem dolores it.
        </p>
        <div className="glass__block">
          <img src={partLogo} alt="partLogo" />
          <img src={partLogoSecond} alt="partLogoSecond" />
        </div>
      </div>
    </div>
  );
}

export default App;
