import { Router} from 'express';

import routes from './src/ro';



const cadastrosUser = express();

cadastrosUser.use(express.json());

cadastrosUser.use(routes);

routes.use('/cadastros',cadastrosRoute);

export default routes;

