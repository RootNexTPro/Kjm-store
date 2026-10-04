/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vyng2ut0t8u6jto")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4wnmhifu",
    "name": "buy_button_text",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Acheter maintenant",
        "Payer maintenant",
        "Obtenir ma formation",
        "Réserver ma commande",
        "Commander maintenant",
        "Accéder maintenant",
        "Rejoindre maintenant"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ea710aqg",
    "name": "buy_button_color",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Vert",
        "Bleu",
        "Indigo",
        "Noir",
        "Rouge",
        "Violet",
        "Doré"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vyng2ut0t8u6jto")

  // remove
  collection.schema.removeField("4wnmhifu")

  // remove
  collection.schema.removeField("ea710aqg")

  return dao.saveCollection(collection)
})
