import { Done,Clear } from "@mui/icons-material";
import "./Card.css"


export function CardOne() {
  return (
    <div className='container cardone'>
      <div className='card'>
        <div className='card-content-top'>
          <p>FREE</p>
          <h1>$0<span><small>/month</small></span></h1>
        </div>
        <div className='card-content-middle'>
          <p><Done color="black"/>Single User</p>
          <p><Done color="black"/>5 GB Storage</p>
          <p><Done color="black"/>Unlimited Public Projects</p>
          <p><Done color="black"/>Community Access</p>
          <p className='blur'><span><Clear color="black"/></span>Unlimited Private Projects</p>
          <p className='blur'><span><Clear color="black"/></span>Dedicated Phone</p>
          <p className='blur'><span><Clear color="black"/></span>Free Subdomain</p>
          <p className='blur'><span><Clear color="black"/></span>Monthly Status Reports</p>
          <button>Button</button>
        </div>
      </div>
    </div>
  );
}
