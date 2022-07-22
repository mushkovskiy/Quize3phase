const resultsRouter = require('express').Router();

const { Game } = require('../db/models');



resultsRouter.get('/', async (req, res) => {
    const results = await Game.findAll({
       raw:true,
        where:{
           user_id:req.session.user.id
        }
    });

    res.json(results);
});

module.exports = resultsRouter;
