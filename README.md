# Steel Airline Landing Page

This project is a multi-page airline website built with plain HTML, CSS, and JavaScript. It presents a modern promotional site for **Steel Airline** with a landing page, an about page, and a contact page.

## Project Overview

The site is designed around the theme of modern air travel. It highlights booking, destinations, company information, customer support, and promotional fare alerts.

## Pages

### `Index.html`
The homepage introduces Steel Airline and includes:

- A sticky navigation bar with links to About Us, Book, Destinations, Experience, Deals, and Contact
- A hero section with an image slider
- A travel booking form
- A top destinations section featuring New York, Singapore, and Barcelona
- A live fare alerts section for email sign-up
- A footer with support, company, and contact information

Main homepage text includes:

- "Global routes. Calm travel."
- "Fly modern, arrive refreshed."
- "Direct flights across continents with premium service, smart pricing, and seamless connections."

It also shows quick stats:

- `190+` destinations
- `98%` on-time rate
- `24/7` support

### `about.html`
The About page explains the brand and service focus of the airline. It includes:

- A short company introduction
- Four information cards covering mission, fleet, safety, and customer care
- An "Elevated in-flight experience" section
- A short feature list for premium economy upgrades, baggage transfer, and long-haul support

Core message on this page:

- Steel Airline connects Africa to the world
- The airline emphasizes reliability, comfort, safety, and customer-first service

### `contact.html`
The Contact page provides support information and a contact form. It includes:

- Guest support phone and email
- Corporate office details
- Baggage and claims support
- A contact form for customer requests
- Regional support numbers for North America, West Africa, and Europe

It emphasizes fast response times and urgent support availability.

## Styling

All styling is handled in `css/style.css`.

The design includes:

- Google Fonts: `Space Grotesk` and `Work Sans`
- A sticky translucent header
- A large hero banner with overlay
- Rounded cards, soft shadows, and section-based color blocks
- Responsive layouts for tablets and mobile devices
- A mobile navigation menu that appears below `900px`

## JavaScript Functionality

All interactivity is handled in `js/main.js`.

Features include:

- Header style changes on scroll
- Mobile navigation toggle
- Auto-closing mobile nav when a link is clicked
- Auto-closing nav on window resize above `900px`
- Automatic hero image slideshow cycling every `7` seconds

## Assets

Images used across the site are stored in the `images` folder:

- `hero.jpg`
- `terminal.jpg`
- `lounge.jpg`
- `cabin.jpg`
- `city.jpg`

## Project Structure

```text
Landing page/
|-- Index.html
|-- about.html
|-- contact.html
|-- README.md
|-- css/
|   `-- style.css
|-- js/
|   `-- main.js
`-- images/
    |-- hero.jpg
    |-- terminal.jpg
    |-- lounge.jpg
    |-- cabin.jpg
    `-- city.jpg
```

## Notes

- This is a static front-end project with no backend functionality.
- The forms and buttons are present for layout and interface purposes and do not currently submit data.
- The site uses a shared stylesheet and script file across all pages for consistent design and behavior.
