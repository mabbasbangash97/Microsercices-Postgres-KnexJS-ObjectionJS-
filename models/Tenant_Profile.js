const { Model } = require("objection");

class Tenant_Profile extends Model {
  static get tableName() {
    return "tenant_profile";
  }

  static get idColumn() {
    return "tenant_id";
  }

  static get jsonAttributes() {
    return ["address"];
  }
}
module.exports = Tenant_Profile;
