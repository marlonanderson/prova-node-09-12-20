import { request, response, Router } from 'express';
import { uuid } from 'uuidv4'

const cadastrosUser = Router();

const cadastros = [];

cadastrosUser.post('/',(request,response)=>{
    return response.json({message:'ok post'});
    //const { name, username ,email } = request.body;
     //const cadastro = {
       //  id: uuid(),
       //  name,
       //  username,
       //  email,
    // };

     //cadastros.push(cadastro);
    
    
   // return response.json({message:'post ok'});


});

export default cadastrosUser;