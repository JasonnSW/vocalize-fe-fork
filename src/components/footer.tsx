import Logo from "../../public/blue-vocalize-logo.svg";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io5";

const footerLinks = [
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Vocalize",
    links: [
      { label: "AI Vocalizer", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Library", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

const socialMedia = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaXTwitter, href: "#" },
  { icon: SiInstagram, href: "#" },
  { icon: IoLogoYoutube, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#252525] py-12">
      <div className="container mx-auto px-6 md:max-w-xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-6 text-lg footer-hover-btn">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm footer-hover-btn"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col items-start md:items-end">
            <div className="flex space-x-4 mb-6">
              {socialMedia.map(({ icon: Icon, href }, i) => (
                <a key={i} href={href}>
                  <Icon className="w-6 h-6 text-white hover:text-blue-200 " />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center border-gray-700 pt-4">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center">
              <Image src={Logo} alt="vocalize-logo" />
              <div className="">
                <span className="text-6xl font-normal text-professional-song flex items-start">
                  Vocalize
                </span>
                <div className="text-lg text-[#FFFFFF] font-normal">
                  Unleash Your Inner Singer
                </div>
              </div>
            </div>
          </div>
          <p className="text-[#F4F4F4] text-lg">
            ©2025-2030 Vocalize, Corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
