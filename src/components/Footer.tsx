import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { FiverseLogo } from './Logos';

export const Footer: React.FC = memo(() => {
  return (
    <footer className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 pt-8 pb-14 border-t border-[#e8ebd9] mt-8 text-[13px] text-[#3a4035]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        {/* Left Side: Navigation & contact */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 lg:gap-8">
          <Link
            to="/"
            className="hover:text-black transition-colors font-medium cursor-pointer py-1 px-1"
          >
            home
          </Link>
          <Link
            to="/about"
            className="hover:text-black transition-colors font-medium cursor-pointer py-1 px-1"
          >
            about us
          </Link>
          <Link
            to="/ai-development-company"
            className="hover:text-black transition-colors font-medium cursor-pointer py-1 px-1"
          >
            ai development
          </Link>
          <Link
            to="/custom-software-development"
            className="hover:text-black transition-colors font-medium cursor-pointer py-1 px-1"
          >
            custom software
          </Link>
          <Link
            to="/workplace-platform"
            className="hover:text-black transition-colors font-medium cursor-pointer py-1 px-1"
          >
            workplace platform
          </Link>
          <Link
            to="/why-fiverse"
            className="hover:text-black transition-colors font-medium cursor-pointer py-1 px-1"
          >
            why fiverse
          </Link>
          <Link
            to="/contact"
            className="hover:text-black transition-colors font-medium cursor-pointer py-1 px-1"
          >
            contact
          </Link>
          <div className="text-[#3a4035] w-full sm:w-auto text-center sm:text-left pt-2 sm:pt-0">
            <span>inquiries: </span>
            <a
              href="mailto:hi@fiversesystems.com"
              className="text-[#111210] font-semibold underline underline-offset-2 hover:text-[#2e6314] transition-colors"
            >
              hi@fiversesystems.com
            </a>
          </div>
        </div>

        {/* Right Side: Logo & Socials */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-[#edf0e5]">
          <div className="flex items-center gap-4 text-[12px] font-semibold text-[#3a4035]">
            {['tw', 'tg', 'in', 'gh'].map((social, sI) => (
              <a
                key={sI}
                href={
                  social === 'tw' ? 'https://twitter.com' :
                  social === 'tg' ? 'https://telegram.org' :
                  social === 'in' ? 'https://linkedin.com' : 'https://github.com'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-transform duration-150 inline-block hover:scale-110 hover:-translate-y-0.5 active:scale-95 p-1"
              >
                {social}
              </a>
            ))}
          </div>
          <FiverseLogo imgClassName="h-8 sm:h-9 md:h-10 w-auto object-contain" />
        </div>
      </div>
      <div className="pt-6 text-center sm:text-left text-[11px] text-[#3a4035] font-medium">
        © {new Date().getFullYear()} Fiverse Systems Inc. All rights reserved. Building intelligent digital products for the AI-first era.
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
