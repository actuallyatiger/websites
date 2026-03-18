import { FiMenu, FiX } from "react-icons/fi";
import {
  FaArrowUp,
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa";
import { SiGithub } from "react-icons/si";

type IconName =
  | "menu"
  | "x"
  | "arrow-up"
  | "chevron-down"
  | "chevron-up"
  | "external-link"
  | "envelope"
  | "phone"
  | "linkedin"
  | "github";

type IconProps = {
  name: IconName;
  className?: string;
  size?: string | number;
};

export default function Icon({ name, className, size }: IconProps) {
  switch (name) {
    case "menu":
      return <FiMenu className={className} size={size} />;
    case "x":
      return <FiX className={className} size={size} />;
    case "arrow-up":
      return <FaArrowUp className={className} size={size} />;
    case "chevron-down":
      return <FaChevronDown className={className} size={size} />;
    case "chevron-up":
      return <FaChevronUp className={className} size={size} />;
    case "external-link":
      return <FaExternalLinkAlt className={className} size={size} />;
    case "envelope":
      return <FaEnvelope className={className} size={size} />;
    case "phone":
      return <FaPhone className={className} size={size} />;
    case "linkedin":
      return <FaLinkedin className={className} size={size} />;
    case "github":
      return <SiGithub className={className} size={size} />;
    default:
      return null;
  }
}
