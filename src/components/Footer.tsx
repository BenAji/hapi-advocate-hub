import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Plus, Minus, Contrast, Type } from 'lucide-react';

const Footer = () => {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);

  const adjustFontSize = (increase: boolean) => {
    const newSize = increase ? Math.min(fontSize + 2, 24) : Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle('high-contrast', !highContrast);
  };

  return (
    <footer className="bg-hapi-dark-green text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/dark.png"
                alt="Logo"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="font-aida font-bold text-xl">H.A.P.I.</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A nonprofit committed to strengthening pharmacy practice in Nigeria through advocacy, Good Pharmacy Practice, compassionate care, and student leadership.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-aida font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-hapi-bright-green" />
                <span className="text-gray-300 text-sm"> hapinitiativeorg@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-hapi-bright-green" />
                <span className="text-gray-300 text-sm">Nigeria</span>
              </div>
            </div>
            <div className="flex space-x-4 pt-2">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/hapinitiative/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-hapi-bright-green hover:bg-hapi-bright-green/10">
                  {/* Instagram icon */}
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.388 3.678 1.37 2.697 2.351 2.437 3.463 2.379 4.744 2.321 6.024 2.309 6.433 2.309 12c0 5.567.012 5.976.07 7.256.058 1.281.318 2.393 1.299 3.374.981.981 2.093 1.241 3.374 1.299 1.28.058 1.689.07 7.256.07s5.976-.012 7.256-.07c1.281-.058 2.393-.318 3.374-1.299.981-.981 1.241-2.093 1.299-3.374.058-1.28.07-1.689.07-7.256s-.012-5.976-.07-7.256c-.058-1.281-.318-2.393-1.299-3.374C21.393.388 20.281.128 19 .07 17.72.012 17.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
                  </svg>
                </Button>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/hap-initiative/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-hapi-bright-green hover:bg-hapi-bright-green/10">
                  {/* LinkedIn icon */}
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Button>
              </a>
            </div>
          </div>

          {/* Accessibility Tools */}
          <div className="space-y-4">
            <h3 className="font-aida font-semibold text-lg">Accessibility Tools</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm flex items-center gap-2">
                  <Type className="h-4 w-4" />
                  Text Size
                </span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => adjustFontSize(false)}
                    className="text-gray-300 hover:text-hapi-bright-green hover:bg-hapi-bright-green/10 p-1"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="text-xs text-gray-400 w-8 text-center">{fontSize}px</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => adjustFontSize(true)}
                    className="text-gray-300 hover:text-hapi-bright-green hover:bg-hapi-bright-green/10 p-1"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleContrast}
                className={`w-full justify-start text-gray-300 hover:text-hapi-bright-green hover:bg-hapi-bright-green/10 ${
                  highContrast ? 'bg-hapi-bright-green/20 text-hapi-bright-green' : ''
                }`}
              >
                <Contrast className="h-4 w-4 mr-2" />
                High Contrast
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Health Outcomes, Advocacy, and Professional Development Initiative (H.A.P.I.). 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;