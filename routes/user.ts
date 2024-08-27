import express from 'express';
import userController from '../controllers/user.controller';
import eventValidator from '../validators/event.validator';
import checkAuth from '../middleware/check.auth';

const router = express.Router();

router.get('/', checkAuth, userController.index);

//event
router.post('/event', checkAuth, eventValidator.create, userController.createEvent);
router.get('/event', checkAuth, userController.eventList);
router.get('/event/:id', checkAuth, userController.eventDetail);
router.patch('/event/:id', checkAuth, eventValidator.update, userController.eventUpdate);
router.delete('/event/:id', checkAuth, userController.eventDelete);

//ticket purchase
router.get('/purchase', checkAuth, userController.purchaseList);
router.get('/purchase/:id', checkAuth, userController.purchaseDetail);

export default router;
