import { FC } from 'react';
import { FaLinkedin, FaGithub,  FaInstagram, FaFacebook } from 'react-icons/fa'; // Example icons; adjust based on your social profiles
import { IconType } from 'react-icons';

// Define the type for social media link props
type SocialLink = {
  href: string;
  icon: IconType;
  label: string;
};

// Social media links data (customize with your actual URLs)
const socialLinks: SocialLink[] = [
  { href: 'https://www.linkedin.com/feed/yourusername', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/yourusername', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.facebook.com/people/Prakash-Rai/100009014415454//yourusername', icon: FaFacebook, label: 'Twitter' },
  { href: 'https://instagram.com/yourusername', icon: FaInstagram, label: 'Instagram' },
];



export const Socialmedia: FC = () => {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 bg-gray-500 rounded-lg p-2 shadow-md">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-2 rounded hover:bg-gray-600 transition-colors"
            aria-label={link.label}
            data-tooltip={link.label} // Tooltip text on hover
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
};