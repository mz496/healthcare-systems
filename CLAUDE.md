# Healthcare Industry Wiki

An interactive wiki for understanding the state of the healthcare industry.

## Project Overview

This is a documentation site built with Docusaurus that provides an interactive resource for learning about and exploring the healthcare industry landscape. The site is designed to be educational and informative, offering insights into various aspects of healthcare systems, trends, challenges, and innovations.

**Note:** This is not a business-specific site, but rather a general educational resource about the healthcare industry as a whole.

## Features

- **Interactive Documentation**: Built with Docusaurus, allowing for rich, searchable documentation
- **React Components**: Embedded interactive React components within documentation pages for dynamic content
- **MDX Support**: Write documentation in MDX format, combining Markdown with React components
- **Tutorial Structure**: Organized content with a clear navigation structure

## Tech Stack

- **Docusaurus 3.9.2**: Modern static site generator for documentation
- **React 19.2.0**: Interactive UI components
- **TypeScript**: Type-safe development
- **pnpm**: Fast, efficient package manager

## Getting Started

### Installation

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm start
```

The site will be available at http://localhost:3000

### Build

Create a production build:

```bash
pnpm build
```

### Serve Production Build

```bash
pnpm serve
```

## Project Structure

```
healthcare/
├── docs/               # Documentation pages (MDX/Markdown)
│   └── intro.mdx      # Getting Started page with interactive counter
├── src/
│   ├── css/           # Custom CSS styles
│   ├── pages/         # Standalone pages (homepage, etc.)
│   └── components/    # Reusable React components (future)
├── static/            # Static assets (images, etc.)
├── docusaurus.config.ts  # Docusaurus configuration
├── sidebars.ts        # Sidebar navigation structure
└── package.json       # Dependencies and scripts
```

## Adding Content

### Creating New Documentation Pages

1. Add new `.md` or `.mdx` files in the `docs/` directory
2. Update `sidebars.ts` to include the new page in navigation
3. Use `.mdx` for pages that need interactive React components

### Example MDX with React Component

```mdx
---
sidebar_position: 1
---

import React, { useState } from 'react';

# Your Page Title

Content here...

export const YourComponent = () => {
  const [state, setState] = useState(0);
  return <div>Interactive component here</div>;
};

<YourComponent />
```

## Current Pages

- **Homepage**: Landing page with introduction and link to tutorial
- **Tutorial - Getting Started**: Introduction page with an interactive counter component demonstrating React state management within documentation

## Future Enhancements

Potential areas for expansion:

- Healthcare system overviews (US, UK, Canada, etc.)
- Industry trends and statistics
- Key players and organizations
- Policy and regulation guides
- Technology and innovation in healthcare
- Healthcare economics and financing models
- Patient care and clinical practices
- Public health and epidemiology resources

## Contributing

To add or update content:

1. Edit or create documentation files in the `docs/` directory
2. Test locally with `pnpm start`
3. Build to verify with `pnpm build`

## Configuration

Main configuration file: `docusaurus.config.ts`

- Site metadata (title, tagline, URL)
- Navigation structure
- Theme configuration
- Plugin settings

## License

ISC
