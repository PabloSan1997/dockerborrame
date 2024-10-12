const { pool } = require("./db")


exports.serivice = {
    async findAll(){
        const query = await pool.query('select * from books');
        return query.rows;
    },
    async save({title, page, author, editorial}){
        const queryTexto = 'insert into books(title, author, page, editorial) values ($1, $2, $3, $4)'
        await pool.query(queryTexto, [title, author, page, editorial]);
        const query = await pool.query('select * from books where title=$1', [title]);
        return query.rows[0];
    },
    async deleteById(id){
        await pool.query('delete from books where id=$1', [id]);
    }
}