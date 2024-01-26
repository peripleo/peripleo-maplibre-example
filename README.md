# peripleo-maplibre-example

A 'Hello World' example with Peripleo and mapLibre

## Using Peripleo in your own project

Install the Peripleo base library and the mapLibre integration.

```
npm install @peripleo/peripleo @peripleo/maplibre
```

- Wrap your app with the `<Peripleo>` component. This will provides access to Peripleo's tility hooks.
- Create a `Map` instance.

```tsx
import { Peripleo } from '@peripleo/peripleo';
import { Map } from '@peripleo/maplibre';

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
