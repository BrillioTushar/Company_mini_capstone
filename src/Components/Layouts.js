import React from "react";
// import reportWebVitals from './src/reportWebVitals';

// import { createRoot } from 'react-dom/client';
import Wheel from "C:/Users/Tanishq.Sahay/minicap/src/Components/Wheel.js";

import "C:/Users/Tanishq.Sahay/minicap/src/Components/styles.css";

export class Layouts extends React.Component {
  constructor() {
    super();
    this.places = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10"];
  }

  render() {
    return (
      <div className="Layouts">
        <h1>Spin the Wheel!</h1>
        <Wheel items={this.places} />
      </div>
    );
  }
}
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<React.StrictMode>
//   <App />
// </React.StrictMode>);


// reportWebVitals();
export default Layouts