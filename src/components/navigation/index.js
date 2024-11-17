import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, Clock, Search, User } from 'lucide-react';

const Navigation = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const isActive = (path) => router.pathname === path;

  const navItems = [
    {
      label: 'Home',
      icon: <Home 
        size={24} 
        className={`${isActive('/') ? 'text-[#6366f1]' : 'text-gray-600'}`} 
      />,
      path: '/'
    },
    {
      label: 'Search',
      icon: <Search 
        size={24} 
        className={`${isActive('/search') ? 'text-[#6366f1]' : 'text-gray-600'}`} 
      />,
      path: '/search'
    },
    {
      label: 'Scanner',
      icon: (
        <div className="relative -mt-8">
          {/* Outer border with white background */}
          <div className="absolute -top-1 -left-1 w-16 h-16 bg-slate-100 rounded-full"></div>
          {/* Purple circle with icon */}
          <div className="relative w-14 h-14 rounded-full bg-[#6366f1] flex items-center justify-center border-4 border-white shadow-lg">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              className="w-8 h-8 text-white"
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M4 4h4v4H4V4z" />
              <path d="M4 12h4v4H4v-4z" />
              <path d="M12 4h4v4h-4V4z" />
              <path d="M12 12h4v4h-4v-4z" />
              <path d="M20 4h-4v4M20 12h-4v4" />
              <path d="M4 20h4v-4M12 20h4v-4" />
            </svg>
          </div>
        </div>
      ),
      path: '/scanner'
    },
    {
      label: 'History',
      icon: <Clock 
        size={24} 
        className={`${isActive('/history') ? 'text-[#6366f1]' : 'text-gray-600'}`} 
      />,
      path: '/history'
    },
    {
      label: 'Profile',
      icon: <User 
        size={24} 
        className={`${isActive('/profile') ? 'text-[#6366f1]' : 'text-gray-600'}`} 
      />,
      path: '/profile'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-200 rounded-t-3xl shadow-lg p-4">
      <div className="flex justify-between items-center">
        {navItems.map((item, index) => (
          <Link 
            href={item.path}
            key={index}
            className="flex flex-col items-center"
            onClick={() => setActiveIndex(index)}
          >
            {item.icon}
            <span 
              className={`text-sm mt-1 ${
                isActive(item.path) 
                  ? 'text-[#6366f1] font-medium' 
                  : 'text-gray-600'
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;