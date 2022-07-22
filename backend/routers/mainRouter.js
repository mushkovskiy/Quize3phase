const mainRouter = require('express').Router();

mainRouter.get('/',async (req,res) => {
    if(req.session.user){
        // console.log(req.session)
        // console.log({name:req.session.user.name,id:req.session.user.id})
        res.json({name:req.session.user.name,id:req.session.user.id})
    }else{
        res.status(403).json({status:'nouser'})
    }
})

module.exports = mainRouter;

