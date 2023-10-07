import { Router } from 'express';
import {
    usersDelete,
    usersGet,
    usersPost,
    usersPut
} from '../controllers/user.js';

const router = Router();

router.get('/', usersGet);

router.post('/', usersPost);

router.put('/:id', usersPut);

router.delete('/', usersDelete);

export default router;