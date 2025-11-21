# Minimalist Photo Portfolio

A simple, modern, and minimalist photo portfolio built with Next.js and Tailwind CSS.

## Features

- **Minimalist Design**: Clean layout focusing on the photography.
- **Responsive Grid**: Adapts to different screen sizes (mobile, tablet, desktop).
- **Fast Loading**: Optimized images using Next.js Image component.
- **Dark Mode Support**: Respects system preference (configured in Tailwind).

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  **Open the browser**:
    Navigate to [http://localhost:3000](http://localhost:3000).

## Customization

### Adding Your Photos

1.  Open `app/components/PhotoGrid.tsx`.
2.  Replace the `PHOTOS` array with your own image data.
    - You can use local images by placing them in the `public` folder and referencing them like `/my-image.jpg`.
    - Or use external URLs (make sure to update `next.config.ts` if using a new domain).

### updating Text

- **Home Title**: Edit `app/page.tsx`.
- **About Page**: Edit `app/about/page.tsx`.
- **Header/Footer**: Edit `app/components/Header.tsx` and `app/components/Footer.tsx`.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com).
