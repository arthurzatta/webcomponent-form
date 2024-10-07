# Pingback Form

## Build Steps

### Run Dev

```bash
npm install
npm run dev # To run the project in development mode
```

### Build Project

```bash
npm install
npm run build # To build the project
```

Open the _index.html_ in browser to visualize the embedded component.

## Solution steps

1. Create the the form component usign React + Typescript + Tailwind
2. Create an web-component inside _index.tsx_, with methods who helps to get the element attributes and pass to the form component
3. Get the _data-field_ attribute with the form settings
4. Set up _vite.config.ts_ in lib mode, to generete the _index.es.js_ file
5. Import the _index.es.js_ file inside html and use the _<pingback-form></pingback-form>_ tag

##
