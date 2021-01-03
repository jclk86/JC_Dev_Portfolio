import React from 'react';
import {Link} from 'react-router-dom';
import {ThemeContext} from '../components/DarkMode/ThemeProvider';
import {Text} from '../components/Multilanguage/Text';

export default function Footer() {
  const {theme} = React.useContext(ThemeContext);
  return (
    <div
      className={`${
        theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white'
      } py-2 border-t border-gray-900`}
    >
      <div className="text-xs w-full h-full relative flex flex-row justify-evenly">
        <div className="flex flex-row justify-center items-center">
          <Link to="/imprintprivacypolicy">
            <Text tid="imprintPrivacyPolicy" />
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center">
          <a href="https://github.com/jclk86" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
        <div className="flex flex-row justify-center items-center">
          <a
            href="https://www.linkedin.com/in/johnchandev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex flex-row justify-center items-center">
          <a target="_top" rel="noopener noreferrer" href="mailto:johnchancontact@gmail.com ">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
