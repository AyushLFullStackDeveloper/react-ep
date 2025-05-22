// src/constant/contactData.js

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

// Named exports for header info
export const title = "Contact Us";
export const subtitle = "Have you any question?";
export const description = "We Are At Your Service";

// Default export for contact items
const contactData = [
  {
    icon: <FaPhoneAlt className="contact-icon" />,
    title: "Call Us On",
    text: "+91 7275757670",
    link: "tel:+917275757670",
  },
  {
    icon: <FaEnvelope className="contact-icon" />,
    title: "Email",
    text: "supportdesk@enjoyprogramming.info",
    link: "mailto:supportdesk@enjoyprogramming.info",
  },
  {
    icon: <FaMapMarkerAlt className="contact-icon" />,
    title: "Find Us",
    text: "Nagpur, India",
    link: "https://www.google.com/maps/place/Enjoy+Programming/@21.2765396,78.5808436,17z/data=!4m14!1m7!3m6!1s0x3bd457558b6f564f:0x948c192f86a29d0f!2sEnjoy+Programming!8m2!3d21.2765396!4d78.5834185!16s%2Fg%2F11l2lr0wcg!3m5!1s0x3bd457558b6f564f:0x948c192f86a29d0f!8m2!3d21.2765396!4d78.5834185!16s%2Fg%2F11l2lr0wcg?entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: <FaGlobe className="contact-icon" />,
    title: "Website",
    text: "enjoyprogramming.com",
    link: "http://enjoyprograming.com",
  },
  {
    icon: <FaInstagram className="contact-icon" />,
    title: "Instagram",
    text: "Enjoy Programming",
    link: "https://www.instagram.com/enjoyprogrammingpvt.ltd/",
  },
  {
    icon: <FaLinkedinIn className="contact-icon" />,
    title: "LinkedIn",
    text: "Enjoy Programming",
    link: "https://www.linkedin.com/in/enjoy-programming-pvt-ltd-996218347/",
  },
  {
    icon: <TbBrandX className="contact-icon" />,
    title: "Twitter",
    text: "Enjoy Programming",
    link: "https://x.com/EnjoyProgra",
  },
  {
    icon: <FaFacebookF className="contact-icon" />,
    title: "Facebook",
    text: "Enjoy Programming",
    link: "https://www.facebook.com/enjoyprogramingpvtltd/",
  },
];

export default contactData;
