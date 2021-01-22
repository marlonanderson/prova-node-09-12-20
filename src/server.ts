
import express from 'express';
import from routes './'

const cadastroUser = express();

cadastroUser.get('/',(request,response)=>
{
    return response.json({message:"ok!"});
});

cadastroUser.listen(3333,() =>{

    console.log('server star port 3333');
});