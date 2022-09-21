
import "./Card_Two.css"
import { Done,Clear } from "@mui/icons-material";

export function CardTwo() {
  return (
    <div className='container cardtwo'>
      <div className='card_two'>
        <div className='card-content-top'>
          <p>PLUS</p>
          <h1>$9<small>/month</small></h1>
        </div>
        <div className='card-content-middle'>
          <p><Done color="black"/>5 Users</p>
          <p><Done color="black"/>50 GB Storage</p>
          <p><Done color="black"/>Unlimited Public Projects</p>
          <p><Done color="black"/>Community Access</p>
          <p><Done color="black"/>Dedicated Phone Support</p>
          <p><Done color="black"/>Unlimited Private Projects</p>
          <p><Done color="black"/>Free Subdomain</p>
          <p className='blur'><span><Clear color="black"/></span>Monthly Status Reports</p>
          <button>Button</button>
        
        </div>
      </div>
    </div>
  );
}
