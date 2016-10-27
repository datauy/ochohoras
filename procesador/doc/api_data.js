define({ "api": [
  {
    "type": "get",
    "url": "/actividades/:id",
    "title": "Actividad",
    "description": "<p>Obtiene una actividad</p>",
    "name": "ObtenerActividad",
    "group": "Actividades",
    "sampleRequest": [
      {
        "url": "/actividades"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "grupo",
            "description": "<p>Descripcion de la clasficiacion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ciuo",
            "description": "<p>Codigo de la clasificacion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Grupo en la cual se encuetra la ocupacion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/actividades.js",
    "groupTitle": "Actividades"
  },
  {
    "type": "get",
    "url": "/actividades",
    "title": "Actividades",
    "description": "<p>Obtiene todas las actividades disponibles de la Clasificación Internacional Industrial uniforme</p>",
    "name": "ObtenerActividades",
    "group": "Actividades",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "descripcion",
            "description": "<p>Descripcion de la actividad.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ciuo",
            "description": "<p>Codigo CIIU de la actividad.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/actividades"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ciuo",
            "description": "<p>Codigo de la actividad.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Grupo en la cual se encuetra la actividad.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/actividades.js",
    "groupTitle": "Actividades"
  },
  {
    "type": "get",
    "url": "/ocupaciones/:id/estadisticas",
    "title": "Estadisticas de ocupacion",
    "description": "<p>Obtiene las estadisticas de una ocupacion</p>",
    "name": "ObtenerEstadisticaOcupacion",
    "group": "Ocupaciones",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "years",
            "defaultValue": "[2014]",
            "description": "<p>Año de la estadistica</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/ocupaciones/:id/estadisticas"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "grupo",
            "description": "<p>Descripcion de la clasficiacion.</p>"
          },
          {
            "group": "Success 200",
            "type": "Ciiu",
            "optional": false,
            "field": "ciuo",
            "description": "<p>Codigo de la clasificacion.</p>"
          },
          {
            "group": "Success 200",
            "type": "Ciuo",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Grupo en la cual se encuetra la ocupacion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/ocupaciones.js",
    "groupTitle": "Ocupaciones"
  },
  {
    "type": "get",
    "url": "/ocupaciones/:id",
    "title": "Ocupacion",
    "description": "<p>Obtiene una ocupacion</p>",
    "name": "ObtenerOcupacion",
    "group": "Ocupaciones",
    "sampleRequest": [
      {
        "url": "/ocupaciones"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "grupo",
            "description": "<p>Descripcion de la clasficiacion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ciuo",
            "description": "<p>Codigo de la clasificacion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Grupo en la cual se encuetra la ocupacion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/ocupaciones.js",
    "groupTitle": "Ocupaciones"
  },
  {
    "type": "get",
    "url": "/ocupaciones",
    "title": "Ocupaciones",
    "description": "<p>Obtiene todas las ocupaciones disponibles de la Clasificación Internacional Uniforme de Ocupaciones</p>",
    "name": "ObtenerOcupaciones",
    "group": "Ocupaciones",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "descripcion",
            "description": "<p>Descripcion de la ocupacion.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ciuo",
            "description": "<p>Codigo CIUO de la ocupacion.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "grupo",
            "description": "<p>Grupo en la cual se encuetra la ocupacion.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/ocupaciones"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "grupo",
            "description": "<p>Descripcion de la clasficiacion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ciuo",
            "description": "<p>Codigo de la clasificacion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Grupo en la cual se encuetra la ocupacion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/ocupaciones.js",
    "groupTitle": "Ocupaciones"
  }
] });