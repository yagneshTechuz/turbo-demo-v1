import { Model } from 'objection';
import { db } from '../dbconfig.js'; // Make sure db is properly initialized here
import Person from './Person.js';

Model.knex(db); // Attach knex instance to Objection's Model

class Child extends Model {
  id!: number;
  personId!: number;
  firstName!: string;
  created_at!: Date;
  updated_at!: Date;
  isActive!: boolean;
  isDeleted!: boolean;

  static get tableName() {
    return 'childs';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstName','personId'],
      properties: {
        id: { type: 'integer' },
        personId: { type: 'integer' },
        firstName: { type: 'string', minLength: 1 },
        isActive: { type: 'boolean' },
        isDeleted: { type: 'boolean' },
      }
    };
  }

  static get relationMappings() {
    return {
      person: {
        relation: Model.BelongsToOneRelation,
        modelClass: Person,
        join: {
          from: 'childs.personId',
          to: 'persons.id',
        }
      },
    };
  }
}

export default Child;
