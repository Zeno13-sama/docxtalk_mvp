import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      aria-label="theme toggler"
      onClick={toggleTheme}
      className={`flex items-center justify-center rounded-full cursor-pointer bg-gray-2 dark:bg-dark-bg h-9 w-9 dark:text-white md:h-14 md:w-14`}
    >
      <svg
        viewBox="0 0 23 23"
        className={`w-5 h-5 stroke-current ${theme === 'light' ? 'text-black-500' : 'hidden'} md:h-6 md:w-6`}
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M9.55078 1.5C5.80078 1.5 1.30078 5.25 1.30078 11.25C1.30078 17.25 5.80078 21.75 11.8008 21.75C17.8008 21.75 21.5508 17.25 21.5508 13.5C13.3008 18.75 4.30078 9.75 9.55078 1.5Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-5 h-5 ${theme === 'dark' ? 'text-black-500' : 'hidden'} md:h-6 md:w-6`}
        stroke="currentColor"
      >
        <mask id="path-1-inside-1" fill="white"/>
          <path d="M12.0508 16.5C10.8573 16.5 9.71271 16.0259 8.8688 15.182C8.02489 14.3381 7.55078 13.1935 7.55078 12C7.55078 10.8065 8.02489 9.66193 8.8688 8.81802C9.71271 7.97411 10.8573 7.5 12.0508 7.5C13.2443 7.5 14.3888 7.97411 15.2328 8.81802C16.0767 9.66193 16.5508 10.8065 16.5508 12C16.5508 13.1935 16.0767 14.3381 15.2328 15.182C14.3888 16.0259 13.2443 16.5 12.0508 16.5ZM12.0508 18C13.6421 18 15.1682 17.3679 16.2934 16.2426C17.4186 15.1174 18.0508 13.5913 18.0508 12C18.0508 10.4087 17.4186 8.88258 16.2934 7.75736C15.1682 6.63214 13.6421 6 12.0508 6C10.4595 6 8.93336 6.63214 7.80814 7.75736C6.68292 8.88258 6.05078 10.4087 6.05078 12C6.05078 13.5913 6.68292 15.1174 7.80814 16.2426C8.93336 17.3679 10.4595 18 12.0508 18ZM12.0508 0C12.2497 0 12.4405 0.0790176 12.5811 0.21967C12.7218 0.360322 12.8008 0.551088 12.8008 0.75V3.75C12.8008 3.94891 12.7218 4.13968 12.5811 4.28033C12.4405 4.42098 12.2497 4.5 12.0508 4.5C11.8519 4.5 11.6611 4.42098 11.5205 4.28033C11.3798 4.13968 11.3008 3.94891 11.3008 3.75V0.75C11.3008 0.551088 11.3798 0.360322 11.5205 0.21967C11.6611 0.0790176 11.8519 0 12.0508 0V0ZM12.0508 19.5C12.2497 19.5 12.4405 19.579 12.5811 19.7197C12.7218 19.8603 12.8008 20.0511 12.8008 20.25V23.25C12.8008 23.4489 12.7218 23.6397 12.5811 23.7803C12.4405 23.921 12.2497 24 12.0508 24C11.8519 24 11.6611 23.921 11.5205 23.7803C11.3798 23.6397 11.3008 23.4489 11.3008 23.25V20.25C11.3008 20.0511 11.3798 19.8603 11.5205 19.7197C11.6611 19.579 11.8519 19.5 12.0508 19.5ZM24.0508 12C24.0508 12.1989 23.9718 12.3897 23.8311 12.5303C23.6905 12.671 23.4997 12.75 23.3008 12.75H20.3008C20.1019 12.75 19.9111 12.671 19.7705 12.5303C19.6298 12.3897 19.5508 12.1989 19.5508 12C19.5508 11.8011 19.6298 11.6103 19.7705 11.4697C19.9111 11.329 20.1019 11.25 20.3008 11.25H23.3008C23.4997 11.25 23.6905 11.329 23.8311 11.4697C23.9718 11.6103 24.0508 11.8011 24.0508 12ZM4.55078 12C4.55078 12.1989 4.47176 12.3897 4.33111 12.5303C4.19046 12.671 3.99969 12.75 3.80078 12.75H0.800781C0.601869 12.75 0.411103 12.671 0.270451 12.5303C0.129799 12.3897 0.0507813 12.1989 0.0507812 12C0.0507813 11.8011 0.129799 11.6103 0.270451 11.4697C0.411103 11.329 0.601869 11.25 0.800781 11.25H3.80078C3.99969 11.25 4.19046 11.329 4.33111 11.4697C4.47176 11.6103 4.55078 11.8011 4.55078 12ZM20.5363 3.5145C20.6769 3.35554 20.7558 3.1624 20.7558 2.963C20.7558 2.76357 20.6769 2.57043 20.5363 2.41147C20.3956 2.25251 20.2048 2.17349 20.005 2.17349C19.8052 2.17349 19.6145 2.25251 19.4738 2.41147C19.3332 2.57043 19.2543 2.76357 19.2543 2.963C19.2543 3.1624 19.3332 3.35554 19.4738 3.5145C19.6145 3.67346 19.8052 3.75248 20.005 3.75248C20.2048 3.75248 20.3956 3.67346 20.5363 3.5145ZM5.56587 3.5145C5.72641 3.35554 5.8054 3.1624 5.8054 2.963C5.8054 2.76357 5.72641 2.57043 5.56587 2.41147C5.40532 2.25251 5.21455 2.17349 5.01469 2.17349C4.81485 2.17349 4.62408 2.25251 4.46354 2.41147C4.30299 2.57043 4.224 2.76357 4.224 2.963C4.224 3.1624 4.30299 3.35554 4.46354 3.5145C4.62408 3.67346 4.81485 3.75248 5.01469 3.75248C5.21455 3.75248 5.40532 3.67346 5.56587 3.5145ZM12.0508 3.75C12.2497 3.75 12.4405 3.82902 12.5811 3.96967C12.7218 4.11032 12.8008 4.30109 12.8008 4.5C12.8008 4.69891 12.7218 4.88968 12.5811 5.03033C12.4405 5.17102 12.2497 5.25 12.0508 5.25C11.8519 5.25 11.6611 5.17102 11.5205 5.03033C11.3798 4.88968 11.3008 4.69891 11.3008 4.5C11.3008 4.30109 11.3798 4.11032 11.5205 3.96967C11.6611 3.82902 11.8519 3.75 12.0508 3.75V3.75Z"
          fill="#000000"
        />
      </svg>
    </button>
  );
};

export default ThemeToggler;


