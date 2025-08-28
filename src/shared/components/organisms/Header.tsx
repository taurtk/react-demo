import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '@/shared/components/atoms/Logo';
import { NAVIGATION_LINKS } from '@/shared/constants/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>
          <nav className="hidden md:flex md:space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-medium text-black hover:text-primary-yellow"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center">
            <div className="hidden md:flex md:items-center md:space-x-4">
              <button type="button" className="text-black hover:text-primary-yellow">
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
              <button type="button" className="text-black hover:text-primary-yellow">
                <ShoppingCartIcon className="h-6 w-6" />
              </button>
              <Link to="/login" className="text-black hover:text-primary-yellow">
                로그인
              </Link>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="text-black hover:text-primary-yellow"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="space-y-1 px-2 pb-3 pt-2">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-50 hover:text-primary-yellow"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="border-t border-gray-200 pb-3 pt-4">
            <div className="flex items-center space-x-4 px-5">
              <button type="button" className="text-black hover:text-primary-yellow">
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
              <button type="button" className="text-black hover:text-primary-yellow">
                <ShoppingCartIcon className="h-6 w-6" />
              </button>
              <Link to="/login" className="text-black hover:text-primary-yellow">
                로그인
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}