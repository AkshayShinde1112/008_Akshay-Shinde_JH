const express = require("express");
const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  database: "wpt",
  password: "Akshay@123",
};

async function addMessage(msg) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("write msg..");
  let sql = `INSERT INTO MESSAGE (messeges) values (?)`;
  await connection.queryAsync(sql, [msg.messeges]);
  console.log("Messege sent...!");
  await connection.endAsync();
}
let msg = { messeges: "Hiii..!" };

// addMessage(msg);

async function readMessage() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let msglist = `select * from MESSAGE`;
  const list = await connection.queryAsync(msglist, []);
  console.log("masseges returned");
  await connection.endAsync();
  return list;
}

// readMessage();

module.exports = { addMessage, readMessage };
