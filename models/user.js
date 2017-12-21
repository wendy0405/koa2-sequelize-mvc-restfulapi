const Model = require('./model');
class User extends Model {
    constructor(data) {
        super();
        this.model = this.sequelize.define('demo', {
          user_id: {
            type:this.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          user_name: this.Sequelize.STRING
        });
    }
}
module.exports = User;
