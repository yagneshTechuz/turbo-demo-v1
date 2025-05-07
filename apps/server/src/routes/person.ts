import { Router } from 'express';
import { Person,Child } from '@repo/objknex';

const router: any = Router();

router.get('/', async (req: any, res: any) => {
  try {
    const knex = Child.knex();
    const resp = await knex.raw('SELECT p.*,c."firstName" as sonName from persons p inner join childs c on p."id" = c."personId"');
    console.log('Raw SQL result:', resp.rows[0]);
    res.json(resp.rows[0]);
  } catch (error) {
    console.error('Error fetching persons:', error);
    res.status(500).json({ error: 'Failed to fetch persons' });
  }
});

router.post('/', async (req: any, res: any) => {
  try {
    const { firstName } = req.body;
    
    if (!firstName) {
      return res.status(400).json({ error: 'firstName is required' });
    }

    const personData = {
      firstName,
      isActive: true,
      isDeleted: false
    };

    console.log('Creating person with data:', personData);
    const person = await Person.query().insert(personData);
    console.log('Created person:', person);
    res.status(201).json(person);
  } catch (error: any) {
    console.error('Error creating person:', error);
    res.status(500).json({ error: 'Failed to create person', details: error.message });
  }
});

export default router; 