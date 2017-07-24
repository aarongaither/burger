const conn = require("../config/connection.js");

const _throw = err => {throw err};
const _makeQuestionMarks = num => Array(num).fill('?').toString();

const orm = {
	all: (table, cb) => {
		let queryString = `SELECT * FROM ${table};`;
		conn.query(queryString, (err, result) => err ? _throw(err) : cb(result))
	},
	create: (table, cols, vals, cb) => {
		let queryString = `INSERT INTO ${table}
						(${cols.toString()})
						VALUES (${_makeQuestionMarks(vals.length)});`;
		console.log(queryString, vals)
		conn.query(queryString, vals, (err, result) => err ? _throw(err) : cb(result))
	},
	updateOne: (table, col, val, whereCol, whereCond, cb) => {
		let queryString = `UPDATE ${table}
							SET ${col} = ${val}
							WHERE ${whereCol} = ${whereCond};`
		conn.query(queryString, (err, result) => err ? _throw(err) : cb(result))
	},
	remove: (table, whereCol, whereCond) => {
		let queryString = `DELETE FROM ${table}
							WHERE ${whereCol} = ${whereCond};`
		conn.query(queryString, (err, result) => err ? _throw(err) : cb(result))
	}
}

module.exports = orm;