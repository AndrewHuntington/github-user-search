# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Screenshot

![devfinder](./src/assets/Screenshot.png)

### Links (TODO)

- Solution URL: [https://www.frontendmentor.io/solutions/responsive-github-user-search-using-react-and-typescript-wthemes-I0wb3JMg4](https://www.frontendmentor.io/solutions/responsive-github-user-search-using-react-and-typescript-wthemes-I0wb3JMg4)
- Live Site URL: [https://AndrewHuntington.github.io/github-user-search](https://AndrewHuntington.github.io/github-user-search)

## My process

### Built with

- HTML5 markup
- CSS custom properties
- Flexbox
- TypeScript
- Mobile-first workflow
- Git
- FireFox Developer Tools
- [React](https://reactjs.org/) - JS library
- React Hooks
- [Axios Hooks](https://github.com/simoneb/axios-hooks) - For API requests
- [React Hook Form](https://react-hook-form.com/) - For handling input

### What I learned

This project is the first one where I added a way to switch to dark mode. Although I was able to implement this, I learned it is crucial that one considers how it will be implemented from the very early stages of planning the project. For here on out, if a project I'm building will include a different themes, I will take that into account from the beginning.

Although I ended up not using it, I did learn a little bit more about Context API, stores, and how to integrate them into a React project that uses TypeScript. If I were to refactor this project, I probably would try to use Context API to hold the theme state, rather than relying on prop drilling.

Some other things I learned:

- How to handle svgs and change their colors
- How to get an error message to appear in an HTML input field by using the :before CSS pseudo-element
- axios-hook (and also how I should probably choose use-axios in the future due to better typing)
- How to use useRef to check if a render is the first render or not

### Continued development

I need to get better at using state management solutions, such as Redux or Context API. Also, TypeScript continues to be a pain point. I probably could have typed things better than they are, but hopefully I will become more comfortable with it as I continue to learn. Also, there are many areas that could use a refactoring, and how I ended up making my components and managing their styling probably wasn't the best way to do it.

### Useful resources

- [The way to check if it’s the first time for useEffect function is being run in React Hooks](https://medium.com/anna-coding/the-way-to-check-if-its-the-first-time-for-useeffect-function-is-being-run-in-react-hooks-170520554067) - This helped me figure out how to use the useRef hook combined with useEffect to check if the component is mounted.
- [How to Sync Your React App with the System Color Scheme](https://blog.bitsrc.io/how-to-sync-your-react-app-with-the-system-color-scheme-78c0ad00074b) - This helped me with syncing my site with the user's system color scheme.

## Author

- Website - [Andrew Huntington](https://www.AndrewHuntington.com)
- Frontend Mentor - [@AndrewHuntington](https://www.frontendmentor.io/profile/AndrewHuntington)

## Acknowledgments

Special thanks to the Blue Color Coder Discord server for helping me with some tricky TypeScript issues.
