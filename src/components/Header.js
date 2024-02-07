import { useState, useEffect } from "react";
import Applogo from "../../assets/app-logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Title = () => (
  <Link className=" " to="/">
    {" "}
    <div className="text-white flex items-center mx-4">
      <img data-testid="logo" className=" h-10" src={Applogo} alt="" />
      <h1 className="font-serif font-bold text-2xl m-0 mx-1 ml-4">MealMaster</h1>
    </div>
  </Link>
);

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();
  const cartItems = useSelector((store) => store.cart.items);
  const [btnName, setBtnName] = useState("Login");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`font-Lato ${isFixed ? "fixed z-10" : "relative"} w-full`}>
      <div className="bg-fixed items-center bg-black shadow-xl flex flex-col sm:justify-between sm:flex-row ">
        <Title />
        <div className="nav-items py-5 whitespace-nowrap">
          <ul className="flex text-white space-x-1 mx-4 ">
            <li
              className={`p-2 px-4 rounded-2xl hover:bg-slate-800   ${
                location.pathname == "/" ? "bg-slate-800" : "hover:scale-110"
              }`}
            >
              <Link className=" " to="/">
                Home
              </Link>
            </li>
            <li
              className={`p-2 px-4 rounded-2xl hover:bg-slate-800   ${
                location.pathname == "/about"
                  ? "bg-slate-800"
                  : "hover:scale-110"
              }`}
            >
              <Link className=" " to="/about">
                About
              </Link>
            </li>
            <li
              className={`p-2 px-4 rounded-2xl hover:bg-slate-800   ${
                location.pathname == "/help"
                  ? "bg-slate-800"
                  : "hover:scale-110"
              }`}
            >
              <Link className="" to="/help">
                Help
              </Link>
            </li>
            <li
              className={`p-2 px-4 rounded-2xl hover:bg-slate-800   ${
                location.pathname == "/cart"
                  ? "bg-slate-800"
                  : "hover:scale-110"
              }`}
            >
              <Link data-testid="cart" className="" to="/cart">
                Cart-{cartItems.length}
              </Link>
            </li>
            <li
              className={`p-2 px-4 rounded-2xl hover:bg-slate-800 hover:scale-110`}
            >
              <button
                className="login"
                onClick={() => {
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login");
                }}
              >
                {btnName}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
