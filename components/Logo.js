import Image from "next/image";
//import * from "app/global.css";

const Logo = () => {
    return (
      <div className="text-2xl font-bold text-white">
        <a href="/">
          <img src="/logo_black.png" alt="Boodmo Logo" className="h-12" />
        </a>
      </div>
    );
  };
  
  export default Logo;
  