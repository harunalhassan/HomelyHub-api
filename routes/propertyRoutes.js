function getDecodedValue(index, shift) {
  const values = getValues();
  return (
    (getDecodedValue = function (innerIndex, innerShift) {
      innerIndex = innerIndex - 0x127;
      let value = values[innerIndex];
      return value;
    }),
    getDecodedValue(index, shift)
  );
}

const decode = getDecodedValue;

function getValues() {
  const valuesArray = [
    "route",
    "4033010WpqPtk",
    "1127483iJcadw",
    "4076576jTarvq",
    "326174fhZkvw",
    "6074334skvUcc",
    "../controllers/authController",
    "getProperty",
    "116iWcCry",
    "getProperties",
    "get",
    "4BbyKlq",
    "../controllers/propertyController",
    "Router",
    "2543664aZbCOC",
    "27771JHCZkH",
    "/:id",
    "exports",
  ];
  getValues = function () {
    return valuesArray;
  };
  return valuesArray;
}

(function (getValuesFunc, value) {
  const decodeFunc = getDecodedValue,
    values = getValuesFunc();
  while (true) {
    try {
      const calculation =
        parseInt(decodeFunc(0x12b)) / 1 +
        (parseInt(decodeFunc(0x12f)) / 2) * (parseInt(decodeFunc(0x136)) / 3) +
        (-parseInt(decodeFunc(0x132)) / 4) * (parseInt(decodeFunc(0x128)) / 5) +
        parseInt(decodeFunc(0x135)) / 6 +
        parseInt(decodeFunc(0x129)) / 7 +
        parseInt(decodeFunc(0x12a)) / 8 +
        -parseInt(decodeFunc(0x12c)) / 9;
      if (calculation === value) break;
      else values.push(values.shift());
    } catch (error) {
      values.push(values.shift());
    }
  }
})(getValues, 0x743e9);

const express = require("express");
const propertyController = require("../controllers/propertyController");
const authController = require("../controllers/authController");
const router = express.Router();

router.route("/").get(propertyController.getProperties);
router.route("/:id").get(propertyController.getProperty);

module.exports = router;
