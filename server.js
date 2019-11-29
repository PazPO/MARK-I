'use strict';

// Modules
const { Pool } = require('pg');

// Configs
const { postgresConfig } = require('./secret');

const registration = ({ username, password }) => {
  const checkedUsername =
    username && /[^a-zA-z]/.test(username) ? username : undefined;
  const checkedPassword =
    password && /[^0-9]/.test(password) ? password : undefined;

  if (checkedUsername && checkedPassword) {
    const pool = new Pool(postgresConfig);

    // добавление записи в базу данных
    const sql = 'INSERT INTO users (name, password) VALUES($1, $2)';
    const userData = [name, password];
    pool.query(sql, userData, (err, results) =>
      err ? console.error(err) : console.info(results),
    );
    pool.end();
    console.info('Process end');
  }
};

function authorization(form) {
  const reason = '';

  if (form.username.value == '' || /[^a-zA-z]/.test(form.username.value))
    reason += 'Error login ';
  if (form.password.value == '' || /[^0-9]/.test(form.password.value))
    reason += 'Error password ';

  if (reason == '') {
    pool = new Pool(postgresConfig);

    pool.query('SELECT * FROM users', function(err, results) {
      if (err) console.log(err);
      console.dir({ results });
      console.table(results.fields);
      console.table(results.rows);
    });
    pool.end();

    return true;
  } else {
    alert(reason);
    return false;
  }
}

// function validate(form) {
// const reason = "";

// if (form.username.value == "" || /[^a-zA-z]/.test(form.username.value))
// reason += "Error login ";
// if (form.password.value == "" || /[^0-9]/.test(form.password.value))
// reason += "Error password ";

// if (reason == ""){
// alert(form.submit.value);
// if (form.submit.value=="Registration"){
// pool=connect();
// alert(pool);
// add(pool,form.username.value,form.password.value);
// disconnect(pool);}

// if (form.submit.value=="Authorization"){
// pool=connect();
// take(pool,form.username.value,form.password.value);
// disconnect(pool);}

// return true;}
// else {
// alert(reason);
// return false;
// }
// }
