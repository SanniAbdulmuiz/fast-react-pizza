import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza.co</Link>

      <SearchOrder />

      <p>Jonas</p>
    </header>
  );
}

export default Header;
