import {Router} from 'express';

const router = new Router();

router.post((req,res)=>{
    res.json({
        message: 'Hello World!'
    })
})

export default router;