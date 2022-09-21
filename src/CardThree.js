import "./Card_Three.css"

import { Done } from "@mui/icons-material";

export function CardThree() {
  return (
    <div className='container cardthree'>
      <div className='card_three'>
        <div className='card-content-top'>
          <p>PRO</p>
          <h1>$49<small>/month</small></h1>
        </div>
        <div className='card-content-middle  cdcnmm'>
          <p><Done color="black"/>Unlimited User</p>
          <p><Done color="black"/>150 GB Storage</p>
          <p><Done color="black"/>Unlimited Public Projects</p>
          <p><Done color="black"/>Community Access</p>
          <p><Done color="black"/>Unlimite Private Projects</p>
          <p><Done color="black"/>Dedicated Phone Support</p>
          <p><Done color="black"/><b>Unlimited</b> Free Subdomains</p>
          <p><Done color="black"/>Monthly Status Reports</p>
          <button>Button</button>
         
       
        </div>
      </div>
    </div>
  );
}
