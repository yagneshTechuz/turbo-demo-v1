import { Model } from 'objection';
import Knex from 'knex';
import knexConfig from './knexfile.js';

const knex = Knex(knexConfig);
Model.knex(knex);

export class BaseModel extends Model {}
export const db = knex;