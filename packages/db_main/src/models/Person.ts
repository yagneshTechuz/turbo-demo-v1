import { Model } from "objection";
import { db } from "../dbconfig.js"; // Make sure db is properly initialized here
import Child from "./Child.js";
Model.knex(db); // Attach knex instance to Objection's Model

export class Person extends Model {
  id!: number;
  firstName!: string;
  created_at!: Date;
  updated_at!: Date;
  isActive!: boolean;
  isDeleted!: boolean;

  static get tableName() {
    return "persons";
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstName'],
      properties: {
        id: { type: 'integer' },
        firstName: { type: 'string', minLength: 1 },
        isActive: { type: 'boolean' },
        isDeleted: { type: 'boolean' },
      }
    };
  }

  static get relationMappings() {
    return {
      childs: {
        relation: Model.HasManyRelation,
        modelClass: Child,
        join: {
          from: 'person.id',
          to: 'childs.personId',
        }
      },
    };
  }

}

export default Person;
