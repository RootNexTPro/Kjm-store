/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d4mm7eogq8vr3ul")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "apppo428",
    "name": "used_count",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": true
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g47xv19t",
    "name": "applicable_products",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vyng2ut0t8u6jto",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "title"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d4mm7eogq8vr3ul")

  // remove
  collection.schema.removeField("apppo428")

  // remove
  collection.schema.removeField("g47xv19t")

  return dao.saveCollection(collection)
})
