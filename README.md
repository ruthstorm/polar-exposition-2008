# Polar Exposition 2008

A photo gallery website documenting a 2008 Arctic expedition, featuring stunning, albeit small, photographs sent by email from my dad when he flew a twin otter in the arctic and the Maldives in 2008.

## Overview

This project is a responsive photo gallery website built with HTML5, CSS3, and JavaScript that showcases a collection of Arctic expedition photos from 2008-2009. The website features a chronological layout of expedition photos with an elegant lightbox gallery interface.

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
├── assets/
│   ├── css/                  # Compiled CSS files
│   │   ├── main.css
│   │   ├── noscript.css
│   │   └── fontawesome-all.min.css
│   ├── js/                   # JavaScript files
│   │   ├── main.js
│   │   ├── jquery.min.js
│   │   ├── jquery.poptrox.min.js
│   │   └── other utility files
│   ├── sass/                 # Sass source files
│   │   ├── main.scss
│   │   ├── base/            # Base styles
│   │   ├── components/      # UI components
│   │   ├── layout/          # Layout styles
│   │   └── libs/            # Third-party styles
│   └── webfonts/            # Font files
├── images/
│   ├── fulls/               # Full-size images
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

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Sass compiler for development


2. Open `index.html` in your web browser to view the gallery

### Development

If you want to modify the styles:

1. Install Sass (if not already installed):
```bash
npm install -g sass
```

2. Watch for changes and compile Sass:
```bash
sass --watch assets/sass:assets/css
```

3. Make changes to the `.scss` files in the `assets/sass/` directory

## Image Organization

Images are organized chronologically and stored in two formats:
- **Thumbnails** (`images/thumbs/`): Optimized for gallery grid view
- **Full-size** (`images/fulls/`): High-resolution images for lightbox display

Naming convention: `YYYY-MM-DD_HH-MM_description_location.jpg`

## Historical Context

This photo collection documents research and logistical operations in the Canadian Arctic during 2008-2009. The expedition covered various aspects of Arctic research including:

- Climate monitoring stations
- Wildlife observation (polar bears, belugas, Arctic cod)
- Historical site documentation
- Community interaction with Inuit populations
- Equipment and supply operations in extreme conditions

## Credits

- **Photography**: Original expedition photographer
- **Development**: Ruth Storm
- **Website Framework**: Based on modern responsive design principles
- **Icons**: Font Awesome
- **Fonts**: Web-safe font stack with custom webfonts

## License

This project is intended for educational and documentary purposes. All photographs remain the property of the original expedition team.

## Contact

For questions about this project or the expedition documentation:
- **GitHub**: [ruthstorm](https://github.com/ruthstorm)
- **LinkedIn**: [Ruth Storm](https://www.linkedin.com/in/ruthstorm/)
- **Website**: [ruthstorm.com](https://www.ruthstorm.com)

---

*"Once upon a crisis in 2008... I had just graduated from college and was having a hard time finding work. I asked my dad to send pictures from his work that maybe I could use for the content of a website, recently I have once again had time to get more creative than replicative."* - Ruth Storm