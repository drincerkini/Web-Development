import express from 'express';
import womanController from '../Controllers/WomanProductController';


const router = express.Router({ mergeParams: true});

router.get('/', womanController.get);

router.get('/:id', womanController.getByID);

router.post('/', womanController.post);

router.put('/:id', womanController.put);

router.delete('/:id', womanController.delete);

export default router;