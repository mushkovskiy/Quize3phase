const indexRouter = require('express').Router();

const { Theme } = require('../db/models');

indexRouter.get('/questions', async (req, res) => {
  const question = await Theme.findAll({
    // raw: true,
    include: [Theme.Question],
  });
  console.log(question);
  res.json(question);
});

module.exports = indexRouter;
