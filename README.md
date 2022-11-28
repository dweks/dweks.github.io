# sqthreer.github.io
## My web development portfolio

This website was built using [ReactJS](https://create-react-app.dev/docs/getting-started) on
 [NodeJS](https://nodejs.org/en/) and deployed using [gh-pages](https://www.npmjs.com/package/gh-pages) to [sqthreer.github.io](https://sqthreer.github.io/about).
 See below for a list of all libraries and dependencies used.
 
 The layout on a standard larger screen width (at least 600 pixels) has vertical navigation bar on the left. Each navigation link may have subnavigation links that animate into view below it. These subnavigation links are to points on the currently viewed page. On smaller screen widths (less than 600pixels) the site responds by switching to a horizontal navigation above the page content and hiding the logo, site name and page headers.

 Site content is rendered in an independently scrolling container, and quickly fades into view as its content is loaded. Most content is organized into 'cards' with a header, subheader and description. The end of each page is marked by a short, rouned line.

## How to install and run the code:

1. Fork or clone the source code from [the dev branch](https://github.com/sqthreer/sqthreer.github.io) of the repo
2. After installing [NodeJS](https://nodejs.org/en/), [React Router](https://www.npmjs.com/package/react-router), [React Router Hash Link](https://www.npmjs.com/package/react-router-hash-link), and [Framer-motion](https://www.npmjs.com/package/framer-motion), run `npm start` from the root directory
3. If npm doesn't open a browser automatically, open one and navigate to `localhost:3000`

## Libraries/Dependencies
- [ReactJS](https://create-react-app.dev/docs/getting-started) - UI building
- [NodeJS](https://nodejs.org/en/) - Runtime
- [gh-pages](https://www.npmjs.com/package/gh-pages) - Deployment
- [React Router](https://www.npmjs.com/package/react-router) - Site navigation routing
- [React Router Hash Link](https://www.npmjs.com/package/react-router-hash-link) - Site navigation anchor routing
- [Framer-motion](https://www.npmjs.com/package/framer-motion) - Element animations
- [ESLint](https://eslint.org/) - Linting
- [Prettier](https://prettier.io/) - Formatting

## Sources

- [MDN](https://developer.mozilla.org/en-US/) - Frequently used to check documentation for HTML, CSS and JavaScript
- [ReactJS](https://create-react-app.dev/docs/getting-started) - React tutorials to learn the basics
- [Anna Jimenez's blog](https://medium.com/@anna.tech/how-to-deploy-your-react-app-to-github-pages-ddab42743367) - Deploying the website on Github Pages
- [Dafont](https://www.dafontfree.io/download/bahnschrift/) - Download page for Bahnschrift font
- [Gaurav Vala's blog](https://dev.to/gaurav444/how-to-use-local-fonts-in-css-fbg) - Using local fonts in CSS 
- [Web Dev Simplified](https://www.youtube.com/watch?v=Ul3y1LXxzdU&ab_channel=WebDevSimplified) - [**video**] How to use React Router
- [Dave Sparks' blog](https://code.tutsplus.com/tutorials/css-fundamentals-css3-transitions--pre-10922) - CSS transitions
- [Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_browser_engines) - To learn more about browser engines
- [Sunny Singh's blog](https://sunnysingh.io/blog/javascript-import-from-folder) - Module organization tips (didn't end up using due to complications)
- [Framer](https://www.framer.com/docs/introduction/) - Learning how to use framer-motion for animating elements
- [CSS Tricks](https://css-tricks.com/) - Frequently referenced for flexbox guides
- [ICO converter](https://www.icoconverter.com/) - Used to convert my logo to a favicon format
- [Verdievoice blog](https://verdievoice.blogspot.com/2021/06/github-logo-png-discover-49-free-github.html) - For Github link icon
- [PNG ALL](https://www.pngall.com/linkedin-png) - For Linkedin link icon
- [Querythreads](https://www.querythreads.com/how-to-disable-es-lint-react-prop-types-rule-in-a-file/) - Disabling irrelevant rules in ESLint
- [Sitepoint](https://www.sitepoint.com/how-to-use-aria-effectively-with-html5/) - Using Aria effectively
- [Jamie Juviler](https://blog.hubspot.com/website/span-vs-div) - Understanding div and span elements