
var simple = {
  "version": 8,
  "name": 'Mapzen-OSM',
  "glyphs": "mapbox://fontstack/{fontstack}/{range}.pbf",
  "sources": {
    "osm": {
      "type": "vector",
      "tiles": ["https://vector.mapzen.com/osm/all/{z}/{x}/{y}.mvt?api_key=vector-tiles-PFmghro"]
    }
  },
  "layers": [

  {
    "id": "background",
    "type": "background",
    "paint": {
      "background-color": "#ededed"
    }
  }, 

  {
    "id": "water-line",
    "source": "osm",
    "source-layer": "water",
    "type": "line",
    "filter": ["==", "$type", "LineString"],
    "paint": {
      "line-color": "#7acad0",
      "line-width": {
        "base": 1.2,
        "stops": [[8, 0.5], [20, 15]]
      }
    }
  }, 

  {
    "id": "water-polygon",
    "source": "osm",
    "source-layer": "water",
    "type": "fill",
    "filter": ["==", "$type", "Polygon"],
    "paint": {
      "fill-color": "#7acad0"
    }
  }, 

  {
    "id": "park",
    "type": "fill",
    "source": "osm",
    "source-layer": "landuse",
    "min-zoom": 6,
    "filter": ["in", "kind", "park", "forest", "garden", "grass", "farm", "meadow", "playground", "golf_course", "nature_reserve", "wetland", "wood", "cemetery"],
    "paint": {
      "fill-color": "#c2cd44"
    }
  }, 

  {
    "id": "river",
    "source": "osm",
    "source-layer": "water",
    "type": "line",
    "min-zoom": 6,
    "filter": ["all", ["==", "$type", "LineString"], ["==", "kind", "river"]],
    "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
    "paint": {
      "line-color": "#7acad0",
      "line-width": {
        "base": 1.2,
        "stops": [[8, 0.75], [20, 15]]
      }
    }
  }, 

  {
    "id": "stream-etc",
    "source": "osm",
    "source-layer": "water",
    "type": "line",
    "min-zoom": 11,
    "filter": ["all", ["==", "$type", "LineString"], ["==", "kind", "stream"], ["==","kind", "canal"]], //Error: layers[5].filter[2]: filter array for operator "==" must have 3 elements
    "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
    "paint": {
      "line-color": "#7acad0",
      "line-width": {
        "base": 1.4,
        "stops": [[10, 0.5], [20, 15]]
      }
    }
  }, 

  {
      "id": "country-boundary",
      "source": "osm",
      "source-layer": "boundaries",
      "type": "line",
      "filter": ["==", "type", "country"],
      "max-zoom": 4,
      "layout": {
        "visibility":"visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#000",
        "line-width": {"base": 2,"stops": [[1, 0.5], [7, 3]]}
      }
    }, 

    {
      "id": "state-boundary",
      "source": "osm",
      "source-layer": "boundaries",
      "type": "fill",
      "filter": ["==", "type", "state"],
      "max-zoom": 10,
      "layout": {
        // "line-cap": "round",
        // "line-join": "round"
      },
      "paint": {
        "fill-color": "#ededed",
        "fill-outline-color": "#cacecc"
      }
    }, 

    {
    "id": "subways",
    "source": "osm",
    "source-layer": "roads",
    "type": "line",
    "paint": {
      "line-color": "#ef7369",
      "line-dasharray": [2, 1]
    },
    "filter": ["==", "railway", "subway"]
  }, 

  {
    "id": "link-tunnel",
    "source": "osm",
    "source-layer": "roads",
    "type": "line",
    "filter": ["any",["==", "is_tunnel", "yes"]],
    "layout": {
      "line-join": "round",
      "line-cap": "round"
    },
    "paint": {
      "line-color": "#afd3d3",
      "line-width": {
          "base": 1.55,
          "stops": [[4, 0.25], [20, 30]]
        },
      "line-dasharray": [1, 2]
    }
  }, 

  {
    "id": "buildings",
    "type": "fill",
    "source": "osm",
    "source-layer": "buildings",
    "paint": {
      "fill-outline-color": "#afd3d3",
      "fill-color": "#ededed"
    }
  }, 

  {
    "id": "road",
    "source": "osm",
    "source-layer": "roads",
    "type": "line",
    "filter": ["any",["==", "kind", "minor_road"],["==", "kind", "major_road"]],
    "layout": {
      "line-join": "round",
      "line-cap": "round"
    },
    "paint": {
      "line-color": "#c0c4c2",
      "line-width": {
          "base": 1.55,
          "stops": [[4, 0.25], [20, 30]]
        }
    }
  }, 

  {
    "id": "link-bridge",
    "source": "osm",
    "source-layer": "roads",
    "type": "line",
    "filter": ["any",["==", "is_link", "yes"], ["==", "is_bridge", "yes"]],
    "layout": {
      "line-join": "round",
      "line-cap": "round"
    },
    "paint": {
      "line-color": "#c0c4c2",
      "line-width": {
          "base": 1.55,
          "stops": [[4, 0.25], [20, 30]]
        }
    }
  }, 

  {
    "id": "highway",
    "source": "osm",
    "source-layer": "roads",
    "type": "line",
    "line-join": "round",
    "filter": ["==", "kind", "highway"],
    "layout": {
      "line-join": "round",
      "line-cap": "round"
    },
    "paint": {
      "line-color": "#5d6765",
      "line-width": {
          "base": 1.55,
          "stops": [[4, 0.25], [20, 30]]
        }
    }
  }, 

  {
    "id": "path",
    "source": "osm",
    "source-layer": "roads",
    "type": "line",
    "line-join": "round",
    "line-cap": "round",
    "filter": ["==", "kind", "path"],
    "layout": {
      "line-join": "round",
      "line-cap": "round"
    },
    "min-zoom": 12,
    "paint": {
      "line-color": "#5d6765",
      "line-width": {
        "base": 1.8,
        "stops": [[10, 0.15], [20, 15]]
      },
      "line-dasharray": [2, 2]
    }
  }, 

  {
    "id": "ocean-label",
    "source": "osm",
    "source-layer": "places",
    "type": "symbol",
    // "min-zoom": 2,
    // "max-zoom": 6,
    "filter": ["==", "kind", "ocean"],
    "layout": {
        "text-field": "{name}",
        "text-font": ["Open Sans Italic, Arial Unicode MS Regular"],
        // "text-size": 32,
        "text-max-width": 14,
        "text-letter-spacing": 0.1,
        "text-anchor": "top",
        "text-size": {
          "stops": [[2, 28], [6, 32]]
        }
      },
    "paint": {
      "text-color": "#ededed",
      "text-halo-color": "rgba(0,0,0,0.2)", //text-size not a paint property
      
    }
  }, 

  {
      "id": "other-label",
      "source": "osm",
      "source-layer": "places",
      "filter": ["all", ["==", "$type", "Point"], ["==", "kind", "neighbourhood"],["==","kind", "hamlet"] , ["==","kind","suburb"]],
      // "min-zoom": 12,
      "type": "symbol",
      "layout": {
        "text-field": "name",
        "text-font": ["Open Sans Semibold, Arial Unicode MS Bold"],
        "text-size": {
          "stops": [[12, 14], [20, 21]]
        },
        // "text-max-width": 10
      },
      "paint": {
        "text-color": "#cb4b49",
        "text-halo-color": "rgba(255,255,255,0.5)",
        
      }
    }, 

    {
      "id": "city-label",
      "source": "osm",
      "type":"symbol",
      "source-layer": "places",
      "filter": ["all", ["==", "$type", "Point"], ["==", "kind", "city"],["==","kind", "county"],["==","kind","district"]],
      "min-zoom": 10,
      "max-zoom": 14,
      "type": "symbol",
      "layout": {
        "text-field": "{name}",
        "text-font": ["Open Sans Semibold, Arial Unicode MS Bold"],
        "text-size": {
          "stops": [[8, 14], [12, 21]]
        },
        "text-max-width": 10,
        "text-letter-spacing": 0.1
      },
      "paint": {
        "text-color": "#384646",
        "text-halo-color": "rgba(255,255,255,0.5)",
        
      }
    }, 

    {
      "id": "state-label",
      "source": "osm",
      "source-layer": "places",
      "filter": ["all", ["==", "$type", "Point"], ["==", "kind", "state"]],
      "min-zoom": 6,
      "max-zoom": 12,
      "type": "symbol",
      "layout": {
        "text-field": "{name}",
        "text-font": ["Open Sans Regular, Arial Unicode MS Regular"],
        "text-size": {
          "stops": [[7, 18], [10, 30]]
          },
        "text-max-width": 8
      },
      "paint": {
        "text-color": "#f27a87",
        "text-halo-color": "rgba(255,255,255,0.5)",
        
      }
    }, 

    {
      "id": "country-label",
      "source": "osm",
      "source-layer": "places",
      "filter": ["all", ["==", "$type", "Point"], ["==", "kind", "country"]],
      "max-zoom": 7,
      "type": "symbol",
      "layout": {
        "text-field": "{name}",
        "text-font": ["Open Sans Semibold, Arial Unicode MS Bold"],
        "text-size": {
          "stops": [[2, 24], [6, 21]]
        },
        "text-max-width": 4
      },
      "paint": {
        "text-color": "#cb4b49",
        "text-halo-color": "rgba(255,255,255,0.5)",
        
      }
    }


  ]
};
// Error: layers[4].paint.line-color: constants have been deprecated as of v8
// https://api.tiles.mapbox.com/mapbox-gl-js/v0.16.0/mapbox-gl.js
