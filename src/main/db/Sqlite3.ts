const path = require('path')

async function test() {
  // sqlite
  const options = {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(process.cwd(), 'public', 'db.db')
    },
    useNullAsDefault: true,
  }
  
  const knex = require('knex')(options);

  knex.from('users').select().then(rows => {
    rows.map(e => {
      console.log(e)
    })
    console.log(rows)
  })

  // mysql
  const options2 = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'test'
    }
  }
  
  const knex2 = require('knex')(options2);
  
  knex2.from('test').select().then(rows => {
    console.log(rows)
  })

}

export default test
