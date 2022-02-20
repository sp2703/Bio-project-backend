const data = require("../data.json");

module.exports.searchMain = async (req, res, next) => {
  const type = req.body.type;
  const params = parseInt(req.body.params);

  let chemical;
  if (type === "SOP") {
    if (params < 7318 || params > 11067) {
      res.status(400).send({ res: "Invalid input" });
    } else {
      data.forEach((element) => {
        if (parseInt(element.SOP) === params) chemical = element;
      });
      res.status(200).send({ res: chemical });
    }
  }

  if (type === "gyrAcoords") {
    if (params < 1 || params > 3750) {
      res.status(400).send({ res: "Invalid input" });
    } else {
      data.forEach((element) => {
        if (parseInt(element["gyrA coords"]) === params) chemical = element;
      });
      res.status(200).send({ res: chemical });
    }
  }

  if (type === "codon") {
    let chemicals = [];
    if (params < 1 || params > 1250) {
      res.status(400).send({ res: "Invalid input" });
    } else {
      data.forEach((element, index) => {
        if (parseInt(element.Codon) === params) {
          chemicals.push(element);
          chemicals.push(data[index + 1]);
          chemicals.push(data[index + 2]);
        }
      });
      res.status(200).send({ res: chemicals });
    }
  }
  if (type === "Aminoacid") {
    let chemical;
    let acidtype = req.body.params;
    if (
      acidtype === "B" ||
      acidtype === "J" ||
      acidtype === "O" ||
      acidtype === "U" ||
      acidtype === "X" ||
      acidtype === "Z"
    ) {
      res.status(400).send({ res: "Invalid input" });
    } else {
      data.forEach((element, index) => {
        if (element["Amino Acid"] === acidtype) {
          chemical = element;
        }
      });
      res.status(200).send({ res: chemical });
    }
  }
  if (type === "Nucleotide") {
    let chemicals = [];
    let acidtype = req.body.params;
    if (
      acidtype !== "A" &&
      acidtype !== "G" &&
      acidtype !== "C" &&
      acidtype !== "T"
    ) {
      res.status(400).send({ res: "Invalid input" });
    } else {
      data.forEach((element, index) => {
        if (element["Amino Acid"] === acidtype) {
          chemicals.push(element);
        }
      });
      res.status(200).send({ res: chemicals });
    }
  }
  if (type === "Aminoacidchange") {
    let acidtype = req.body.params;
    if (
      acidtype === "B" ||
      acidtype === "J" ||
      acidtype === "O" ||
      acidtype === "U" ||
      acidtype === "X" ||
      acidtype === "Z"
    ) {
      res.status(400).send({ res: "Invalid input" });
    }
  }
  if (type === "Aminoacidchange") {
    let acidtype = req.body.params;
    if (
      acidtype === "B" ||
      acidtype === "J" ||
      acidtype === "O" ||
      acidtype === "U" ||
      acidtype === "X" ||
      acidtype === "Z"
    ) {
      res.status(400).send({ res: "Invalid input" });
    }
  }
  if (type === "codonchange") {
    const params = parseInt(req.body.params);
    if (params < 1 || params > 1250) {
      res.status(400).send({ res: "Invalid input" });
    } else {
      res.status(200).send({ res: "Valid input" });
    }
  }
  res.status(400).send({ res: "Invalid input" });
};
