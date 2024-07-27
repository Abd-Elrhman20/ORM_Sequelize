import { Sequelize } from 'sequelize';

export const dbConnection = () => {

    const sequelize = new Sequelize('mysql://udgdlieegfhhckwn:4bZGvHPHTBpNFp3HzAr7@br9jyvf0acrjvsu9izzc-mysql.services.clever-cloud.com:3306/br9jyvf0acrjvsu9izzc');
    // const sequelize = new Sequelize({
    //     dialect: 'mysql',
    //     host: 'localhost',
    //     port: 3306,
    //     username: 'root',
    //     password: '',
    //     database: 'test6'
    // });

    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    // sequelize.sync({ alter: true }).then(() => {
    //     console.log('All models were synchronized successfully.');
    // }).catch(err => {
    //     console.error('Unable to synchronize the models:', err);
    // });

    // sequelize.sync({ alter: true })
    sequelize.sync()

    return sequelize;
}