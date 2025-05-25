import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

export const Navbar = () => {
  // Show hide khung menu khi ở trạng thái mobile
  const [open, setOpen] = React.useState(false);

  const { user, setUser, setShowUserLogin, navigate } = useAppContext();

  // Xử lý logout
  const logout = async () => {
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to={"/"} onClick={() => setOpen(false)}>
        <img className="h-9" src={assets.logo} alt="logo" />
      </NavLink>

      <div className="hidden sm:flex items-center gap-8">
        {/* Tabs */}
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/products"}>All Product</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>

        {/* Search bar */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="search" className="w-4 h-4" />
        </div>

        {/* Cart */}
        <div className="relative cursor-pointer">
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-6 opacity-80"
            onClick={() => navigate("/cart")}
          />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>

        {/* Personal */}
        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt="profile"
              className="w-10 cursor-pointer"
            />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-35 rounded-md text-sm font-medium z-40">
              <li
                onClick={() => navigate("/my-info")}
                class="flex items-center gap-3 cursor-pointer px-3 py-2 rounded hover:bg-gray-300/40 transition"
              >
                <img src={assets.my_info_icon} alt="info" className="w-5" />
                <div>My info</div>
              </li>
              <li
                onClick={() => navigate("/favorite")}
                class="flex items-center gap-3 cursor-pointer px-3 py-2 rounded hover:bg-gray-300/40 transition"
              >
                <img
                  src={assets.favorite_icon}
                  alt="favorite"
                  className="w-5"
                />
                <div>Favorite</div>
              </li>
              <li
                onClick={() => navigate("/orders")}
                class="flex items-center gap-3 cursor-pointer px-3 py-2 rounded hover:bg-gray-300/40 transition"
              >
                <img src={assets.my_order_icon} alt="orders" className="w-5" />
                <div>Orders</div>
              </li>
              <div class="w-full h-px bg-gray-300/50 my-2"></div>
              <li
                onClick={logout}
                class="flex items-center gap-3 cursor-pointer px-3 py-2 rounded hover:bg-primary-dull transition"
              >
                <img src={assets.logout_icon} alt="orders" className="w-5" />
                <div>Logout</div>
              </li>
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <img src={assets.menu_icon} alt="menu" />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to={"/products"} onClick={() => setOpen(false)}>
            All Product
          </NavLink>
          <NavLink to={"/contact"} onClick={() => setOpen(false)}>
            Contact
          </NavLink>

          {/* Nếu user đã đăng nhập */}
          {user && (
            <NavLink to={"/orders"} onClick={() => setOpen(false)}>
              My Orders
            </NavLink>
          )}

          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};
