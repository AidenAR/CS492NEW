
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; path: string }[];
}

const MobileNav = ({ isOpen, onClose, links }: MobileNavProps) => {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white md:hidden">
      <div className="container mx-auto px-4 py-4 flex flex-col h-full">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800" onClick={onClose}>
            Accessible CAPTCHA
          </Link>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>

        <nav className="flex flex-col space-y-6 mt-12">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xl font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-gray-600"
              }`}
              onClick={onClose}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
