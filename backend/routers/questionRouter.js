const questionRouter = require('express').Router();

const { Theme } = require('../db/models');

questionRouter.get('/questions', async (req, res) => {
    const question = await Theme.findAll({
        // raw: true,
        include: [Theme.Question],
    });
    console.log(question);
    res.json(question);
});

module.exports = questionRouter;
