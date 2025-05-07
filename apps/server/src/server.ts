import express from 'express';
import personRouter from './routes/person.js';
import childRouter from './routes/child.js';
const app = express();
app.use(express.json());
import {add} from '@repo/math'

'ci/cd test'
// Use the person router
app.use('/persons', personRouter);
app.use('/child', childRouter);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} and sum is ${add(20,40)}`);
}); 