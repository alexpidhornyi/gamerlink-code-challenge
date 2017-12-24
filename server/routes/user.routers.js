import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();

// Get all Posts
//router.route('/populateDatabase').get(UserController.populateDatabase);
router.route('/users/').get(UserController.getUsers);
router.route('/users/:name').get(UserController.getUser);


export default router;
