const { Model } = require("objection");
const Tenant_Profile = require("./Tenant_Profile");

class User_Profile extends Model {
  static get tableName() {
    return "user_profile";
  }

  static get idColumn() {
    return "user_id";
  }

  static get relationMappings() {
    return {
      tenant: {
        relation: Model.BelongsToOneRelation,
        modelClass: Tenant_Profile,
        join: {
          from: "user_profile.tenant_id",
          to: "tenant_profile.tenant_id",
        },
      },
    };
  }
}

module.exports = User_Profile;
