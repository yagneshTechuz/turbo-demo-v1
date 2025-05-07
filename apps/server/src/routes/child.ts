import { Router } from 'express';
import { Child } from '@repo/objknex';
import { Person } from '@repo/objknex';

const router: any = Router();

router.post('/', async (req: any, res: any) => {
  try {
    const { firstName, personId } = req.body;
    
    if (!firstName) {
      return res.status(400).json({ error: 'firstName is required' });
    }

    if (!personId) {
      return res.status(400).json({ error: 'personId is required' });
    }

    // Check if parent exists
    const parent = await Person.query().findById(personId);
    if (!parent) {
      return res.status(404).json({ error: 'Parent not found' });
    }

    const childData = {
      firstName,
      isActive: true,
      isDeleted: false,
      personId
    };

    const child = await Child.query().insert(childData);
    res.status(201).json(child);
  } catch (error : any) {
    console.log('Error creating child:', error.message);
    res.status(500).json({ error: 'Failed to create child' });
  }
});

router.get('/', async (req: any, res: any) => {
  try {
    const children = await Child.query();
    res.json(children);
  } catch (error) {
    console.error('Error fetching children:', error);
    res.status(500).json({ error: 'Failed to fetch children' });
  }
});

export default router; 