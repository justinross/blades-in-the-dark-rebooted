import BitdRebootedDataModel from "./base-model.ts";

export default class BitdRebootedActorBase extends BitdRebootedDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    schema.biography = new fields.SchemaField({
      alias: new fields.StringField({ required: true, blank: true }),
      heritage: new fields.StringField({ required: true, blank: true }),
      look: new fields.StringField({ required: true, blank: true }),
      background: new fields.StringField({ required: true, blank: true }),
      backgroundDetails: new fields.StringField({ required: true, blank: true }),
    })

    return schema;
  }

}