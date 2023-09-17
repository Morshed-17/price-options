import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1, HiX } from 'react-icons/hi';

const NavBar = () => {
    const [open, setOpen] = useState(false)
  const routes = [
    { path: "/", name: "Home", id: "home" },
    { path: "/about", name: "About Us", id: "about" },
    { path: "/services", name: "Our Services", id: "services" },
    { path: "/contact", name: "Contact Us", id: "contact" },
    { path: "/dashboard", name: "User Dashboard", id: "dashboard" },
  ];
  return (
    <nav className="py-8">
    <div  className="text-2xl block md:hidden" onClick={()=> setOpen(!open)}>
    {
        open? <HiX/> : <HiOutlineMenuAlt1/>
    }
    
    </div>
      <ul className={`md:flex md:justify-between gap-8 absolute bg-white border-2 md:static duration-500 shadow-lg p-6 rounded-lg ${open? 'top-16': '-top-64'}`}>
        {routes.map((route) => <Link route={route} key={route.id}/>)}
      </ul>
    </nav>
  );
};

export default NavBar;
