# Google Developers Local Event Landing Page

A modern, responsive landing page for Google Developer Group (GDG) events featuring dark/light theme, animations, and interactive components.

## Features

- Dark/Light theme switcher
- Fully responsive design
- Modern UI with subtle animations
- Performance optimized
- WCAG 2.1 accessibility compliant
- SEO optimized

## Sections

1. Hero Section with floating shapes
2. Features Grid showcasing event highlights
3. Interactive Program Schedule
4. Testimonials from past attendees
5. Pricing Plans comparison
6. Registration Form with validation
7. Footer with social links and newsletter signup

## Technical Details

### Built With

- HTML5
- CSS3 (with CSS Custom Properties)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Inter)

### Key Features

- Intersection Observer for scroll animations
- Form validation
- Modal interactions
- Dynamic content loading
- Responsive navigation
- Theme persistence
- Accessibility features

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. No build process required - it's all vanilla!

## Project Structure

```
gdg-landing/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Styles and theming
├── js/
│   └── main.js        # JavaScript functionality
└── assets/            # Images and other assets
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Themes

The theme colors can be customized in `css/style.css` under the `:root` selector. Both light and dark theme variables are defined there.

### Content

Update the content in `index.html` and the data arrays in `main.js` to customize:
- Schedule items
- Testimonials
- Pricing plans
- Feature highlights

## Deployment

This site is deployed on Netlify. You can deploy your own instance by following these steps:

1. Fork this repository
2. Sign up for a Netlify account at [netlify.com](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub account and select this repository
5. Configure the deployment settings:
   - Build command: Leave empty
   - Publish directory: `.` (root directory)
6. Click "Deploy site"

Your site will be live at a Netlify subdomain, which you can customize in the site settings.

### Custom Domain (Optional)

To use a custom domain:

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure your DNS settings
4. Wait for DNS propagation (can take up to 24 hours)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Developer Groups
- Font Awesome for icons
- Google Fonts
