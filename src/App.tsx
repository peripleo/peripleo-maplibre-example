import { Peripleo } from '@peripleo/peripleo';
import { Map } from '@peripleo/maplibre';

// A basic raster style using OSM X/Y/Z tiles as a source
const style = {
  "version": 8,
	"sources": {
    "osm": {
			"type": "raster",
			"tiles": ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
			"tileSize": 256,
      "attribution": "&copy; OpenStreetMap Contributors",
      "maxzoom": 19
    }
  },
  "layers": [
    {
      "id": "osm",
      "type": "raster",
      "source": "osm"
    }
  ]
};

export const App = () => {

  return (
    <Peripleo>
      <Map style={style} />
    </Peripleo>
  )

}