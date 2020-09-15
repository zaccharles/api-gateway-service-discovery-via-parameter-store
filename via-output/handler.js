"use strict";

const HELLO_SERVICE_URL = process.env.HELLO_SERVICE_URL;

module.exports.handle = async (event) => {
  // could use HELLO_SERVICE_URL to call the API
  return HELLO_SERVICE_URL;
};
