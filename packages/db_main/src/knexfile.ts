import type { Knex } from "knex";

const config: Knex.Config = {
  client: 'pg',
  connection: {
    host: 'ep-bitter-sun-a1nbywcz-pooler.ap-southeast-1.aws.neon.tech',
    user: 'neondb_owner',
    database: 'neondb',
    password: 'npg_taS4QeMopI0x',
    ssl: { rejectUnauthorized: false }
  },
  migrations: {
    directory: './migrations',
    extension: 'ts',
  },
};

export default config; 