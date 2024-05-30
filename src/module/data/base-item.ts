import BitdRebootedDataModel from "./base-model.ts";

export default class BitdRebootedItemBase extends BitdRebootedDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = {};

    schema.description = new fields.StringField({ required: true, blank: true });

    return schema;
  }

}