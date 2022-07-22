module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Questions', [{
      description: 'Первый вопрос по истории',
      answer: 'Ответ на первый вопрос по истории',
      score: 300,
      createdAt: new Date(),
      updatedAt: new Date(),

      theme_id: 1,
    },
    {
      description: 'Второй вопрос по истории',
      answer: 'Ответ на второй вопрос по истории',
      score: 300,
      createdAt: new Date(),
      updatedAt: new Date(),

      theme_id: 1,
    },
    {
      description: 'Третий вопрос по истории',
      answer: 'Ответ на третий вопрос по истории',
      score: 300,
      createdAt: new Date(),
      updatedAt: new Date(),

      theme_id: 1,
    },
    {
      description: 'Первый вопрос про спорт',
      answer: 'Ответ на первый вопрос по спорту',
      score: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
      theme_id: 2,
    },
    {
      description: 'Второй вопрос про спорт',
      answer: 'Ответ на второй вопрос по спорту',
      score: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
      theme_id: 2,
    },
    {
      description: 'Третий вопрос про спорт',
      answer: 'Ответ на третий вопрос по спорту',
      score: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
      theme_id: 2,
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
