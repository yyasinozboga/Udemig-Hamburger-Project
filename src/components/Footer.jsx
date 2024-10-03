import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <footer className="footer">
      <span>&copy; 2024 burger06.com</span>
      <div className="social-media flex">
        <Link to={"https://www.instagram.com/"}>
          <InstagramIcon />
        </Link>
        <Link to={"https://x.com/"}>
          <TwitterIcon />
        </Link>
        <Link to={"https://www.facebook.com/"}>
          <FacebookIcon />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
