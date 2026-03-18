import type { IconName } from "../lib/declarations";
import { SiInstagram, SiSnapchat, SiDiscord, SiThreads, SiFacebook, SiGithub, SiProtonmail } from "react-icons/si";
import { FaLinkedin, FaPhone } from "react-icons/fa";

type IconProps = {
  name: IconName;
  className?: string;
};

export default function Icon({ name, className }: IconProps) {
  switch (name) {
    case "instagram":
      return <SiInstagram className={className} />;
    case "snapchat":
      return <SiSnapchat className={className} />;
    case "discord":
      return <SiDiscord className={className} />;
    case "threads":
      return <SiThreads className={className} />;
    case "facebook":
      return <SiFacebook className={className} />;
    case "linkedin":
      return <FaLinkedin className={className} />;
    case "github":
      return <SiGithub className={className} />;
    case "protonmail":
      return <SiProtonmail className={className} />;
    case "phone":
      return <FaPhone className={className} />;
    default:
      return null;
  }
}