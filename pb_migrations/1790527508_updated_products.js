/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vyng2ut0t8u6jto")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "atum9pvy",
    "name": "redirect_url",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gkireb1m",
    "name": "redirect_button_text",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xm2r9a92",
    "name": "file",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": null,
      "maxSelect": 1,
      "maxSize": 524288000,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vyng2ut0t8u6jto")

  // remove
  collection.schema.removeField("atum9pvy")

  // remove
  collection.schema.removeField("gkireb1m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xm2r9a92",
    "name": "file",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": null,
      "maxSelect": 1,
      "maxSize": 524288000,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
