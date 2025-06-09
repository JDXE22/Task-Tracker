import express from "express";
import dotenv from "dotenv/config";

import { dispatch } from "./src/dispatch.js";

if (process.argv.length === 0) {
  console.error("No command provided. Please provide a command to execute.");
  process.exit(1);
}

dispatch(process.argv.slice(2));
