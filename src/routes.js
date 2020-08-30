import { Router } from 'express';

import UserController from './app/controllers/BeneficiarioController';

const routes = new Router();

routes.post('/register', UserController.store);

routes.get('/index/:cpf', UserController.index);

routes.put('/update/:cpfParams', UserController.update);

routes.delete('/delete/:cpf', UserController.delete);

export default routes