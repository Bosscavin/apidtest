const db = require('../data/database');

class User {
  constructor(
    firstname,
    lastname,
    address,
    postcode,
    phonenumber,
    username,
    password,
    id
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.address = address;
    this.postcode = postcode;
    this.phonenumber = phonenumber;
    this.username = username;
    this.password = password;
    if (id) {
      this.id = id;
    }
  }

  static getAllUser() {
    return db.getDB().query('SELECT * FROM apidb.users');
  }

  createUser() {
    const data = [
      this.firstname,
      this.lastname,
      this.address,
      this.postcode,
      this.phonenumber,
      this.username,
      this.password,
    ];
    let query = `INSERT INTO apidb.users (first_name,last_name,address,postcode,phone_number,username,password) VALUES (?)`;
    db.getDB().query(query, [data]);
  }

  editUser() {
    const query = `UPDATE apidb.users SET first_name = ?, last_name = ?, address = ?, postcode = ?, phone_number = ?, username = ?, password = ? WHERE id = ?`;
    db.getDB().query(query, [
      this.firstname,
      this.lastname,
      this.address,
      this.postcode,
      this.phonenumber,
      this.username,
      this.password,
      this.id,
    ]);
  }

  static deleteUser(id) {
    const query = `DELETE FROM apidb.users WHERE id = ?`;
    db.getDB().query(query, [id]);
  }

  static deleteAll() {
    const query = `DELETE FROM apidb.users`;
    db.getDB().query(query);
  }
}

module.exports = User;
