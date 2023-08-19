## Locatify

Locatify is a chrome extension that displays the user's city and country through their IP adress.
This is an assessment/assignment project for ChatGPTWriter.

Clone the repository and install the dependencies.
Create a .env file at the project root and add the line `PLASMO_PUBLIC_IPINFO_KEY=YOUR_IPINFO_KEY` (replace YOUR_INFO_KEY with your API KEY)
and run the dev command using yarn/npm/pnpm

```bash
yarn dev
```

Load the extension into the browser by going to the extensions tab in chrome, turning on the developer mode and clicking `"load unpacked extension"` and selecting `build/chrome-mv3-dev` folder (the folder will appear upon running the dev command or building the extension)

![Demo](https://raw.githubusercontent.com/portableCoder/Locatify/demo.gif)
