const regRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Game } = require('../db/models');

regRouter.post('/registration',async (req, res) => {
        const {
            name,
            email,
            password,
        } = req.body;
    console.log(req.body)
        const thisUser = await User.findOne({ where: { email } });
        if (thisUser) {
            res.json({message: 'Такой пользователь уже существует'})
        } else {
            const newUser = await User.create({
                name,
                email,
                password: (await bcrypt.hash(password, 10)),
            });
            // req.session.user = newUser;
            res.status(200).json({id:newUser.id,name:newUser.name});
        }

    });

regRouter.post('/login', async (req, res) => {
    // оборачиваем в трай-кетч
    try {
        // деструктором забираем из рег.бади введенные емейл и пароль в форму входа(логина)
        const { email, password } = req.body;
        // ищем есть ли в БД пользователь
        const user = await User.findOne({
            where: {
                email,
            },
        });
        // Если пользователя нет, то отправляем ошибку
        if (!user) {
            res.json({ status: 'notok', errorMessage: 'Такого пользователя не существует' });
            return;
        }
        // Проверяем правильно ли введен пароль
        const authOk = await bcrypt.compare(password, user.password);
        // если нет, то отправляем ошибку
        if (!authOk) {
            res.send({ status: 'notok', errorMessage: 'Неверный пароль!' });
            // return;
        }
        // Создаем сессию для пользователя после его входа в аккаунт
        req.session.user = user;
        res.status(200).json({name:req.session.user.name,id:req.session.user.id})
    } catch (err) {
        res.status(500).json({ errorMessage: err.message });
    }
});


regRouter.post('/addresults',async (req,res)=> {
    const { total_score } = req.body
    console.log(req.body)
    const game = await Game.create({
        total_score,
        user_id: req.session.user.id,
        isfinished: true
    });
    console.log(game)
})
// Ручка для кнопки(ссылки) логаута
regRouter.get('/logout', async (req, res) => {
    // Удаляем при этом сессию для этого юзера
    req.session.destroy();
    // Чистим куки для этого пользователя
    res.clearCookie('user_sid');
    res.end()
});



module.exports = regRouter;
