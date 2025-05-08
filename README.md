# Todo

A simple task management app. In the app a task is known as a todo (a play on "to do"). 

## Planned Features

- Create todo's, either one offs or reoccuring.
- Maintains a list of upcoming, active and completed todo's.
- Todo's can contain a hyperlink.
- Reoccuring todo's can be grouped together in the completed todo's view.
- Closing a todo gives the option to close with or within a closing note.
- Can define regular reminder window where the app will open up in front of all other apps.

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

This will start both the Vite development server for React and the Electron application in development mode.

## Building for Production

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory. 