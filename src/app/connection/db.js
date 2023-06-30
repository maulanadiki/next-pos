import mysql from 'mysql'
const Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pos_steam',
});

export default Connection
