# Polar Exposition 2008

A photo gallery website documenting a 2008 Arctic expedition, featuring stunning, albeit small, photographs sent by email from my dad when he flew a twin otter in both the polar and equatorial regions within one year in 2008.


*"Once upon a crisis in 2008... I had just graduated from college and was having a hard time finding work. I asked my dad to send pictures from his work that maybe I could use for the content of a website, recently I have once again had time to get more creative than replicative."* - Ruth Storm

## Features

- **Responsive Photo Gallery**: Grid-based layout that adapts to different screen sizes
- **Lightbox Viewer**: Click on any thumbnail to view full-size images with navigation
- **Chronological Organization**: Photos organized by date from April 2008 to January 2009
- **Mobile-Friendly**: Optimized for viewing on desktop, tablet, and mobile devices
- **Sass Preprocessing**: Modular CSS architecture using Sass
- **Font Awesome Icons**: Professional iconography throughout the interface

 

## Project Structure

```
polar-exposition-2008/
├── index.html                 # Main HTML file
├── package.json              # Project configuration & scripts
├── README.md                 # Project documentation
├── .gitignore               # Git ignore rules
├── assets/
│   ├── css/                  # Compiled CSS files
│   │   ├── main.css
│   │   ├── context-blocks.css
│   │   ├── noscript.css
│   │   ├── fontawesome-all.min.css
│   │   └── images/          # CSS background images
│   ├── data/                 # Data files
│   │   └── emails.json      # Email content data
│   ├── js/                   # JavaScript files
│   │   ├── main.js          # Main site functionality
│   │   ├── render-copy-json.js  # Dynamic content renderer
│   │   ├── jquery.min.js
│   │   ├── jquery.poptrox.min.js
│   │   ├── breakpoints.min.js
│   │   ├── browser.min.js
│   │   └── util.js
│   ├── sass/                 # Sass source files
│   │   ├── main.scss
│   │   ├── noscript.scss
│   │   ├── base/            # Base styles (reset, typography, page)
│   │   ├── components/      # UI components (buttons, forms, icons, etc.)
│   │   ├── layout/          # Layout styles
│   │   └── libs/            # Third-party styles
│   └── webfonts/            # Font Awesome web fonts
├── images/
│   ├── fulls/               # Full-size images (expedition photos)
│   └── thumbs/              # Thumbnail images
└── copy/                    # Original email correspondences (text files)
```

## Expedition Timeline

The gallery documents various Arctic expeditions and activities:

- **April 2008**: Initial winter conditions in Resolute
- **April-May 2008**: Polar Challenge expedition, dog sledding, Arctic Kingdom tours
- **June 2008**: Coburg Island, Eureka, Hell's Gate expeditions
- **July 2008**: Beechey Island, historical sites, wildlife observations
- **August-September 2008**: Resolute Day celebrations, cleanup operations
- **October 2008**: Whale surveys, Steensby Inlet, Igloolik visits
- **January 2009**: Maldives expedition (contrasting tropical environment)

## Key Locations Featured

- **Resolute Bay, Nunavut**: Arctic research station and community
- **Ellesmere Island**: Canada's northernmost island
- **Grise Fiord**: Northernmost community in Canada
- **Ward Hunt Island**: Ice shelf and research station
- **Coburg Island**: Wildlife sanctuary
- **Beechey Island**: Historic Franklin expedition site
- **Igloolik**: Traditional Inuit community

## Technologies Used

- **HTML5**: Semantic markup and modern web standards
- **CSS3/Sass**: Modular styling with preprocessing
- **JavaScript**: Interactive functionality and gallery behavior
- **jQuery**: DOM manipulation and event handling
- **Poptrox**: Lightbox gallery plugin
- **Font Awesome**: Icon library
- **Responsive Design**: Mobile-first approach


### Local Development Server

For full functionality (especially email content loading), run a local server:

```bash
# Using npm (if you have Node.js)
npm run serve

# Then visit http://localhost:8000
```

## Future Improvements

The following enhancements are planned to improve the user experience and functionality:

- **Improved Navigation Arrows**: Enhance the lightbox navigation with better visibility and smoother transitions
- **JSON Content Integration**: Add better templating with Next.js
- **Arctic Documentary Video**: Embed YouTube video content about Arctic expeditions and research
- **Accessibility Testing**: Comprehensive accessibility audit and improvements for screen readers and keyboard navigation
- **Interactive Map**: Display locations via an Arctic map

## Credits

- **Photography**: My Dad
- **Development**: Ruth Storm
- **Website Framework**: Based on modern responsive design principles
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Fonts**: Web-safe font stack with custom webfonts
- **HTML Template & JQuery**: [pixelarity.com](https://pixelarity.com/)


## License


Copyright (c) 2025 Ruth Storm

**Note**: The photographs and expedition content are personal family archives.
Please respect the personal nature of the imagery and content.

## Contact

For questions about this project or the expedition documentation:
- **GitHub**: [ruthstorm](https://github.com/ruthstorm)
- **LinkedIn**: [stormruth](https://www.linkedin.com/in/stormruth/)
- **Website**: [ruthstorm.com](https://www.ruthstorm.com)
