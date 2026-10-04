/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vyng2ut0t8u6jto")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q0oejt2h",
    "name": "cover",
    "type": "file",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": null,
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f_gallery",
    "name": "gallery",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": null,
      "maxSelect": 10,
      "maxSize": 10485760,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vyng2ut0t8u6jto")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q0oejt2h",
    "name": "cover",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/webp"
      ],
      "thumbs": null,
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f_gallery",
    "name": "gallery",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/*"
      ],
      "thumbs": null,
      "maxSelect": 10,
      "maxSize": 10485760,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
