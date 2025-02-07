import { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "About Me", icon: <InfoIcon />, path: "/about" },
    { text: "Skills", icon: <InfoIcon />, path: "/skills" },
    { text: "Education", icon: <InfoIcon />, path: "/education" },
    { text: "Experience", icon: <WorkIcon />, path: "/experience" },
    { text: "Top Projects", icon: <WorkIcon />, path: "/projects" },
    { text: "Contact", icon: <ContactMailIcon />, path: "/contact" },
  ];

  return (
    <div className="poppins max-w-[80vw] mx-auto flex items-center justify-between px-6 py-4 rounded-2xl bg-purple-950/85 border-2 fixed z-10 w-full left-8 md:left-20 lg:left-30 xl:left-36">
      {/* Logo */}
      <div className="text-xl font-bold text-white w-full">Moin</div>

      {/* Menu Icon */}
      <button onClick={() => setOpen(true)} className="text-gray-700 cursor-pointer">
        <MenuIcon fontSize="large" className="text-white" />
      </button>

      {/* Sidebar Drawer */}
      <div className="">
        <Drawer anchor="top" open={open} onClose={() => setOpen(false)}
          sx={{ "& .MuiPaper-root": { backgroundColor: "white" } }}>
          <div className="bg-amber-400 flex justify-between items-center w-full md:max-w-[80vw] mx-auto my-2 rounded-2xl">
            <div>
              {/* Menu Items */}
              <ul className="flex flex-col md:flex md:flex-row md:justify-center space-y-4 mt-5">
                {menuItems.map((item) => (
                  <li key={item.text} className="flex justify-center poppins">
                    <Link
                      to={item.path}
                      className="flex gap-3 px-6 py-3 hover:underline "
                    >
                      {item.icon} <span className="text-lg">{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* Close Button */}
              {/* <button onClick={() => setOpen(false)} className="self-end pr-4 text-xl font-bold cursor-pointer">
                ✖
              </button> */}
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
