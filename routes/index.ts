import express from 'express';
import indexController from '../controllers/index.controller';
import userController from '../controllers/user.controller';
import userValidator from '../validators/user.validator';
import ticketValidator from '../validators/ticket.validator';
import checkAuth from '../middleware/check.auth';

const router = express.Router();

router.get('/', indexController.index);
router.post('/register', userValidator.register, userController.register);
router.post('/login', userValidator.login, userController.login);
router.get('/events', indexController.eventList);
router.get('/events/:id', indexController.eventDetail);
router.post('/purchase', checkAuth, ticketValidator.purchase, indexController.purchaseTicket);

export default router;
