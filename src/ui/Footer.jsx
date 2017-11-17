import React from 'react';

function Footer() {
  const url =
    'https://www.linkedin.com/learning/building-a-web-interface-with-react-js';

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        &copy; {year}.&nbsp;
        <a href={url} rel="noopener" target="_blank">
          LinkedIn Learning
        </a>.
      </p>
    </footer>
  );
}

export default Footer;
