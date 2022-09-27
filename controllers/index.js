const { mygroup, member } = require("../models/mygroup");

exports.getAll = (req, res) => {
  // console.log()
  res.send(JSON.stringify(mygroup));
};

exports.getById = (req, res) => {
  const id = req.params.id;
  const item = mygroup.find((ele) => ele.id === id);
  if (item) {
    res.send(JSON.stringify(item));
  } else {
    res.send(JSON.stringify({ error: "Not Valid" }));
  }
};

exports.add = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  if (member.indexOf(id) === -1) {
    res.send(JSON.stringify({ error: "Not Valid" }));
  } else {
    let newGroup = [...mygroup];
    newGroup.push(body);
    res.send(JSON.stringify(newGroup));
  }
};

exports.getAllById = (req, res) => {
  const id = req.params.id;
  const item = mygroup.find((ele) => ele.id === id);
  if (item) {
    res.send(`<html><body><ul><li>${item.name}</li></ul></body></html>`);
  } else {
    res.send(JSON.stringify({ error: "Not Valid" }));
  }
};

exports.messageGetAll = (req, res) => {
  let html = "";
  mygroup.forEach((ele) => (html = html + `<li>${ele.name}</li>`));
  res.send(`<html><body><ul> ${html}</ul></body></html>`);
};
