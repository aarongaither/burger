const orm = require('../config/orm.js');

const burger = {
  table: 'burgers',
  all: function(cb) {
    orm.all(this.table, res => cb(res));
  },
  create: function(cols, vals, cb) {
    orm.create(this.table, cols, vals, res => cb(res));
  },
  updateOne: function(col, val, whereCol, whereCond, cb) {
    orm.update(this.table, col, val, whereCol, whereCond, res => cb(res));
  },
  remove: function(whereCol, whereCond, cb) {
    orm.remove(this.table, whereCol, whereCond, res => cb(res));
  }
};

module.exports = burger;