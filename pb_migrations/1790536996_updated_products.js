/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vyng2ut0t8u6jto")

  // remove
  collection.schema.removeField("nqk1cw3g")

  // remove
  collection.schema.removeField("bdrhboh8")

  // remove
  collection.schema.removeField("1com5x6y")

  // remove
  collection.schema.removeField("pbsy7dlg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qzca5vt9",
    "name": "badge_label",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "PROMO",
        "EXCLUSIF",
        "BEST OFFER",
        "TOP VENTE",
        "EN RUPTURE",
        "NOUVEAU"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s6o1sd1l",
    "name": "badge_color",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Rouge",
        "Vert",
        "Bleu",
        "Violet",
        "Doré"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zrzk93hp",
    "name": "button_animation",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Standard",
        "Pulsation",
        "Brillance"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s08lg3e6",
    "name": "faq_question_1",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w8cjf41a",
    "name": "faq_reponse_1",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1dhfw2t5",
    "name": "faq_question_2",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ue4c4bxv",
    "name": "faq_reponse_2",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dtkp6dg4",
    "name": "faq_question_3",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9d9m4vti",
    "name": "faq_reponse_3",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vyng2ut0t8u6jto")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nqk1cw3g",
    "name": "badge_label",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bdrhboh8",
    "name": "badge_color",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1com5x6y",
    "name": "button_animation",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pbsy7dlg",
    "name": "faq",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // remove
  collection.schema.removeField("qzca5vt9")

  // remove
  collection.schema.removeField("s6o1sd1l")

  // remove
  collection.schema.removeField("zrzk93hp")

  // remove
  collection.schema.removeField("s08lg3e6")

  // remove
  collection.schema.removeField("w8cjf41a")

  // remove
  collection.schema.removeField("1dhfw2t5")

  // remove
  collection.schema.removeField("ue4c4bxv")

  // remove
  collection.schema.removeField("dtkp6dg4")

  // remove
  collection.schema.removeField("9d9m4vti")

  return dao.saveCollection(collection)
})
