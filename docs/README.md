![](./Images/madlibs.png#gh-light-mode-only)
![](./Images/Readme_frame.png#gh-dark-mode-only)

# [Chingu Voyage 43 - Tier 1 - Mad Libs Word Game](https://github.com/chingu-voyages/v43-tier1-team-09)

## Table of contents

- [Overview](#overview)
  - [The project](#the-project)
  - [Project Setup](#project-setup)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [General Instructions](#general-instructions)
  - [Built with](#built-with)
  - [Getting Started](#getting-started)
  - [Prerequisites](#Prerequisites)
  - [Installing](#installing)
  - [Deployment](#deployment)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)
- [Contact Us](#contact-us)

## Overview

### The project

A collaborative attempt at creating a Mad Libs Word Game as part of the Chingu Voyage program, following the Agile Methodology and the Minimum Viable Product(MVP). The game consists of one player prompting a list of words to substitute for blanks in a story before reading aloud.

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See focus and hover states for all interactive elements on the page
- View a Madlib story after submitting a valid data through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - Any field has profane words
- Download or Print their story

### Project Setup

The first step we took as a team was to create the required files for our project and ways to connect them. To organize, we did a simple Google search that led us to stories of different genres and scenarios, also with placeholders that would be used as input for adjectives, nouns, or a person's name. In our file, these placeholders were delimited by double brackets in camelcase _(ie. {{placeholder}} )_.

Therefore, the second step after organizing all these stories in a single CSV file separated by categories, size, and placeholders, was to convert the CSV to a JSON file. Once open, we use a for loop to go over each JSON object of the file. The first loop identified all the placeholder variables in a given scenario. Those variables are stored in the var*list array. In the second loop, each variable is split into a list of words *(ie. "aTypeOfBuilding" becomes ["a","Type","Of","Building"])_ and then converted into a string variable _(ie. the list["a","Type","Of","Building"] becomes the string "A type of building")\_. Those variables are then stored in the description_array.

Finally, both lists are zipped into a **Python** dictionary, converted, and added to their corresponding Scenario object. The resulting Scenario object is stored in a final array. The final array is saved in the stories.json file, and then we can use it as a component for replacing in the DOM.

### Screenshot

![](../docs/Images/screenshot.png)

### Links

- [Repository](https://github.com/chingu-voyages/v43-tier1-team-09)
- [Live Site URL](https://v43-tier1-team-09.netlify.app/)
- [Showcase Video](https://www.youtube.com/watch?v=wzQC3xtzPss)

## General Instructions

### Built with

- [Figma](https://www.figma.com/) - A cloud-based design tool
- [Python](https://www.python.org/) - Used to work with JSON files
- [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) - The web framework used
- [SASS](https://sass-lang.com/) - The styling language used
- [Webpack](https://webpack.js.org/) - A script bundler to combine multiple scripts
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - The programming language used

### Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
@babel/core
@babel/plugin-syntax-import-assertions
babel-loader
concurrently
css-loader
mini-css-extract-plugin
node-sass
sass-loader
serve
style-loader
webpack
webpack-cli
```

### Installing

Our application is using npm for package management. To install all the necessary package follow these steps:

1. Install dependencies

```
npm install
```

2. Then launch the server

```
npm run dev
```

3. The page will render in a new window.

### Deployment

To deploy the package, enter the command:

```
npm run build
```

## Authors

- **Chingu Voyages** - _Initial work_ - [chingu-voyages](https://github.com/chingu-voyages)
- **Emilie Echevin** -- _Developer_ - [Emimint](https://github.com/Emimint)
- **Emilio Rivera** -- _Developer_ - [emilio12345](https://github.com/emilio12345)
- **Gabriela de Paula** -- _Developer_ - [PaulaR-05](https://github.com/PaulaR-05)
- **Jim Medlock** - _Initial work_ - [jmedlock](https://github.com/jdmedlock)
- **Mikey Nichols** -- _Developer_ - [mnichols08](https://github.com/mnichols08)
- **Nazile Tag** -- _Developer_ - [Nazile-Tag](https://github.com/Nazile-Tag)

See also the list of [contributors](./CONTRIBUTORS.md) who participated in this project.

## Acknowledgments

- This project would not be possible without [Chingu](https://www.chingu.io/). We would like to to extend our appreciation to everyone over there, especially [Jim Medloc](https://github.com/jdmedlock) for providing us this wonderful oppurtunity!

- A grateful nod to our personal Mentor, [Aryse Gabrielle Pagano](https://github.com/medic1111) for helping guide us along the way.

- We have leveraged some code from [Maurice Butler](https://github.com/MauriceButler), who is acknowledged with 🔣[Array.js](https://github.com/MauriceButler/badwords/blob/master/array.js). He is named as an author in the most recent version of the [BadWords](https://github.com/MauriceButler/badwords) repository. Thanks for sharing your contributions with the world.

- Huge shout out to [Ksenia Kondrashova](https://github.com/uuuulala) for the Background Blob Animation that gives the illusion of blobs morphing randomly. [Step-by-Step Guide](https://dev.to/uuuuuulala/making-background-blob-animation-in-just-15kb-step-by-step-guide-2482).

- A special mention to [Alzea Arafat](https://dribbble.com/alzea) for creating a beautiful illustration pack called "Sally". Some illustrations were used in our project. You can follow this amazing artist on [Kubikel Studio](https://ui8.net/users/kubikel-studio).

- A big high-five to the staff at [Vuvietduc](https://vuvietduc.com/) created an illustration pack compiling +750 World flags which we used on our developer's page to show off our multicultural team. Gracias, Obrigada, Merci, Teşekkür ederim & Thank You! 🌎

- A heartfelt acknowledgement to all of the staff and crew at [Southern Auto Supply](https://www.napaonline.com/en/md/oakland/store/804877) in Mt. Lake Park, MD have contributed in way they do not even know. Thank you so much!

## Contact Us

Please report any [🐛bug🐛](https://docs.google.com/forms/d/e/1FAIpQLSd91zh13dCmv4GNsG7ndVoY4njof7NvHQ3LoMrXabnkXylihg/viewform?usp=sf_link) or provide us [feedback 🤗](https://docs.google.com/forms/d/e/1FAIpQLSd91zh13dCmv4GNsG7ndVoY4njof7NvHQ3LoMrXabnkXylihg/viewform?usp=sf_link)
