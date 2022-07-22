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

    await queryInterface.bulkInsert('Questions', [
      {
        description: 'О ком идет речь "из боксера в конопляного короля"',
        answer: 'Майк Тайсон',
        score: 200,
        createdAt: new Date(),
        updatedAt: new Date(),

        theme_id: 1,
      }, {
        description: 'Какая страна является крупнейшим поставщиком кокаина?',
        answer: 'Колумбия',
        score: 300,
        createdAt: new Date(),
        updatedAt: new Date(),

        theme_id: 1,
      }, {
        description: 'Что означает мёд в наркосленге?',
        answer: 'Метадон',
        score: 500,
        createdAt: new Date(),
        updatedAt: new Date(),

        theme_id: 1,
      }, {
        description: 'Самый древний наркотик, из-за которого разгорались не шуточные войны',
        answer: 'Опиум',
        score: 800,
        createdAt: new Date(),
        updatedAt: new Date(),

        theme_id: 1,
      }, {
        description: 'Кто впервые синтезировал лсд?',
        answer: 'Альберт Хофман',
        score: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),

        theme_id: 1,
      }, {
        description: '— Алё\n— А?\n— Это Пакистан?\n— Да\n— Нам нужен один килограмм\n— Будет',
        answer: 'АК-47 - Алё, Это Пакистан',
        score: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
        theme_id: 2,
      }, {
        description: 'Короче замутились Антон и ******\nКупили маковой соломы аж два стакана!\nБутыль растворителя, варево на факелах\nРаствор в баянах, парни на кайфах',
        answer: 'Noggano А. Пальчиков',
        score: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
        theme_id: 2,
      }, {
        description: 'Для интереса, решил пробить на днях\nВсе ровно, пять сек, офигительный, в камнях\nТут предпочтительней оставаться зрителем\nЭто не остановить, я вспоминаю про родителей',
        answer: 'Гуф Новогодняя',
        score: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
        theme_id: 2,
      }, {
        description: 'Пять кубов винта, чтобы не спать\nВ руках по два АК, тра-та-та-та',
        answer: 'n1nt3nd0 мама ама криминал',
        score: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
        theme_id: 2,
      }, {
        description: 'Удар в поддых, как обращение на "ты".\nЗаметал следы – полбеды,\nЯ только малёха покоцанный.\nНе вовремя понял, что пробовать надо порциям.',
        answer: 'Каспийский Груз - В сырую',
        score: 1000,
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
