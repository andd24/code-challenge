#!/usr/bin/env node

import { Customer } from "./Customer";
import { MovieCollection } from "./Movie";
import { Class } from "./Class";

import { Command } from "commander";
import { statement } from "./statement";
import { htmlStatement } from "./htmlStatement";

const program: Command = require("commander");
const version: string = require("../package.json").version;

const customer: Customer = require("./data/customer.json");
const movies: MovieCollection = require("./data/movies.json");
const classes: Class = require("./data/class.json")


program
  .version(version)
  .description("A CLI for generating customer statements");

program
  .command("statement")
  .description("Prints out a plain-text statement for the customer")
  .action(() => console.log(statement(customer, movies, classes)));

program
  .command("html-statement")
  .description("Prints out a html statement for the business")
  .action(() => console.log(htmlStatement(customer, movies, classes)));

program.parse(process.argv);
