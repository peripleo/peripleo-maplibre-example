# peripleo-maplibre-example

A 'Hello World' example with Peripleo and mapLibre.

## Running the Example

In this folder, run `npm install` and `npm start`. Your browser should open automatically. 
If not, go to <http://localhost:5173/index.html>

![Hello World example](screenshot.jpg)

## Using Peripleo in your own project

Install the Peripleo base library and mapLibre integration module.

```
npm install @peripleo/peripleo @peripleo/maplibre
```

- Import base styles and (optionally) the default theme
- Wrap your app with the `<Peripleo>` component. This will provides access to Peripleo's tility hooks.
- Create a `Map` instance.

```tsx
import { Peripleo } from '@peripleo/peripleo';
import { Map } from '@peripleo/maplibre';

// Essential base styles
import '@peripleo/maplibre/peripleo-maplibre.css';

// Default theme
import '@peripleo/peripleo/default-theme';

export const App = () => {

  return (
    <Peripleo>
      <Map style="https://openmaptiles.github.io/osm-bright-gl-style/style-cdn.json">
        
      </Map>
    </Peripleo>
  )

}
```

### Map Props

| Prop  | Type             | Default |
|-------|------------------|---------|
| style | string \| object | -       |
