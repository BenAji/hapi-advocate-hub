import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { 
      label: 'Student Chapters', 
      path: '/chapters',
      hasDropdown: true,
      items: [
        { label: 'OAU Chapter', path: '/chapters/oau' },
        { label: 'UI Chapter', path: '/chapters/ui' }
      ]
    },
    { label: 'Past Projects', path: '/projects' },
    { label: 'Events', path: '/events' },
  ];

  return (
    <nav className="bg-white/95 dark:bg-hapi-dark-green/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src="/dark.png"
              alt="Logo"
              className="w-10 h-10 rounded-lg object-cover group-hover:scale-105 transition-transform duration-200"
            />
            <span className="font-aida font-bold text-xl text-hapi-dark-green dark:text-white">H.A.P.I.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <div className="flex items-center">
                      <Link
                        to={item.path}
                        className={`text-sm font-medium transition-colors duration-200 hover:text-hapi-bright-green flex items-center gap-1 ${
                          isActive(item.path)
                            ? 'text-hapi-bright-green border-b-2 border-hapi-bright-green'
                            : 'text-foreground'
                        }`}
                        style={{ textDecoration: 'none' }}
                      >
                        {item.label}
                        <ChevronDown className="h-4 w-4" />
                      </Link>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white dark:bg-hapi-dark-green border border-border shadow-lg">
                    {item.items?.map((subItem) => (
                      <DropdownMenuItem key={subItem.path} asChild>
                        <Link
                          to={subItem.path}
                          className="w-full px-4 py-2 hover:bg-hapi-bright-green/10 hover:text-hapi-bright-green transition-colors duration-200"
                        >
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-hapi-bright-green ${
                    isActive(item.path) 
                      ? 'text-hapi-bright-green border-b-2 border-hapi-bright-green' 
                      : 'text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hover:bg-hapi-bright-green/10 transition-colors duration-200"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.label} className="space-y-2">
                    <Link
                      to={item.path}
                      className="text-sm font-medium text-foreground px-3 py-2 block hover:text-hapi-bright-green"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="text-sm text-muted-foreground hover:text-hapi-bright-green px-6 py-2 block transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium px-3 py-2 transition-colors duration-200 hover:text-hapi-bright-green ${
                      isActive(item.path) ? 'text-hapi-bright-green' : 'text-foreground'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
