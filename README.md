# Music Gallery Collage App

## About

This app is built to produce image collages for albums; Produce you own wallart from your playlists and get them printed cheap and effectively.

![Example Collage](./data/example.gif)

## Features

- **Music API Integrations:** Supports Deezer, Spotify, and Navidrome for accessing and organizing your music.
- **Drag & Drop:** Easy drag-and-drop interface to build your collages.
- **Tailwind CSS:** Styled with Tailwind for a responsive and aesthetic layout.
- **Fabric Printing Ready:** Designs generated in this app are ideal for printing on fabric with services like Contrado.

## Live Development

To run in live development mode, run the following in the project directory:

```bash
wails dev
```

This will start a Vite development server that provides fast hot reloading of your frontend changes. For Go backend integration during development, a dev server will run at `http://localhost:34115`. You can use your browser's dev tools to call Go methods from the frontend.

## Building for Production

To build a redistributable, production-ready package, use:

```bash
wails build
```

This will create a production build optimized for deployment.

---

I hope this README helps explain the purpose and technology stack for your app clearly while showcasing the cool features like the ability to print wall art! Let me know if you'd like further changes.
