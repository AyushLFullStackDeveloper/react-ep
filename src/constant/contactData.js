import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { TbBrandX } from "react-icons/tb"; // Modern X icon

const contactData = [
  {
    icon: FaPhoneAlt,
    title: "Call Us On",
    text: "+91 7275757670",
    link: "tel:+917275757670",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    text: "supportdesk@enjoyprogramming.info",
    link: "mailto:supportdesk@enjoyprogramming.info",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Find Us",
    text: "Nagpur, India",
    link: "https://www.google.com/maps/place/Nagpur",
  },
  {
    icon: FaGlobe,
    title: "Website",
    text: "Enjoyprogramming.com",
    link: "https://enjoyprogramming.com",
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    text: "Enjoy Programming",
    link: "https://www.instagram.com/enjoyprogramming",
  },
  {
    icon: FaLinkedinIn,
    title: "LinkedIn",
    text: "Enjoy Programming",
    link: "https://www.linkedin.com/company/enjoyprogramming",
  },
  {
    icon: TbBrandX,
    title: "X",
    text: "Enjoy Programming",
    link: "https://x.com/enjoyprogramming",
  },
  {
    icon: FaFacebookF,
    title: "Facebook",
    text: "Enjoy Programming",
    link: "https://www.facebook.com/enjoyprogramming",
  },
];

export default contactData;
