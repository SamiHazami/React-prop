import React from "react";
import FullName from "./Components/Profile/FullName";
import Bio from "./Components/Profile/Bio";
import Profession from "./Components/Profile/Profession";
function App() {
  
  return (
    <>
    
    
      <FullName firstName="Sami" lastName="Al-Hazemi"> </FullName>
      <br/>
    
      <Bio FullName="Sami Al-Hazemi" Age="39" Gender="Male" Interests="Learning,Practising sport,diving,coding,working" />
      <br/>
      <div>
      <Profession/>
      </div>
      

    </>
  );
}
export default App;
