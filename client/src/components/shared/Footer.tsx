import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitch,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

// let footerLinkSection = [];
let footerLinkSection = [
  {
    name: 'Customer Service',
    links: [
      { name: 'FAQs', href: '/faqs' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Product Recalls', href: '/' },
      { name: 'Registering Gift Packs', href: '/' },
      { name: 'Cookie Preferences', href: '/' },
      { name: 'Cookies', href: '/' },
    ],
  },
  {
    name: 'Shopping With Above',
    links: [
      { name: 'Delivery', href: '/' },
      { name: 'Returns & Refunds', href: '/' },
      { name: 'Students Discounts', href: '/' },
      { name: 'Payment', href: '/' },
      { name: 'School Accounts', href: '/' },
      { name: 'Business Accounts', href: '/' },
    ],
  },
  {
    name: 'About Us',
    links: [
      { name: 'Above Affiliate Programmed', href: '/' },
      { name: 'Brands', href: '/' },
      { name: 'Modern Slavery Statement', href: '/' },
      { name: 'WEEE Policy', href: '/' },
      { name: 'WHSmith PLC', href: '/' },
      { name: 'WHSmith Careers', href: '/' },
      { name: 'WHSmith Blogs', href: '/' },
    ],
  },
  {
    name: 'Help',
    links: [
      { name: 'Terms & Conditions', href: '/' },
      { name: 'Privacy Policy', href: '/' },
      { name: 'GDPR', href: '/' },
      { name: 'Track Your Order', href: '/' },
      { name: 'Coronavirus Update', href: '/' },
      { name: 'Change An Order', href: '/' },
      { name: 'Pricing', href: '/' },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto grid grid-cols-5">
        {footerLinkSection.map((section) => (
          <div key={section.name} className="flex flex-col gap-4">
            <div className="text-lg font-semibold">{section.name}</div>
            <div className="flex flex-col gap-4">
              {section.links.map((link) => (
                <Link
                  key={link.name}
                  className="hover:underline"
                  to={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-4">
          <div className="text-lg font-semibold">Social Media</div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[#4267B2] hover:text-black">
              <FiFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-[#405DE6] hover:text-black">
              <FiInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-[#1DA1F2] hover:text-black">
              <FiTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-[#FF0000] hover:text-black">
              <FiYoutube className="h-6 w-6" />
            </a>
            <a href="#" className="text-[#0077B5] hover:text-black">
              <FiLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
