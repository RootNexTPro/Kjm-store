/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vyng2ut0t8u6jto")

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
        "image/jpeg"
      ],
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
})
