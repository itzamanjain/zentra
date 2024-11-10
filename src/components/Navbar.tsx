import { ShoppingCart, Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import {Button} from '../components/ui/button';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartItemsCount, onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black dark:bg-black dark:text-white  fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-400" />
            <span className="ml-2 text-xl font-bold">Zentra</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-indigo-400 transition-colors">Home</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Products</a>
            <button 
              onClick={onCartClick}
              className="relative hover:text-indigo-400 transition-colors"
            >
              <Button ><ShoppingCart className="mr-2 h-4 w-4" />Cart</Button>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-indigo-400 hover:bg-gray-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-800">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-800">Products</a>
            <button 
              onClick={onCartClick}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-800 flex items-center"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart ({cartItemsCount})
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}