# parts-Node_Deno_ProjectTemplate

## common
- project files
  source
    index.js
    lib1.js

## project01

- source  CommonJS
  - run node
- babel   CommonJS
- webpack CommonJS
- test
  - source
    - run node
  - babel
    - run node
      - const project = require(
  - webpack
    - run node
      - const project = require(

## project02

- source  ESModules
  - export default only
  - run deno
- babel   CommonJS
- webpack CommonJS
- test
  - source
    - run deno
  - babel
    - run node
      - const { default: project } = require(
  - webpack
    - run node
      - const { default: project } = require(

## project03

- source  ESModules
  - export default 
  - export Each function
  - run deno
- babel   CommonJS
- webpack CommonJS
- test
  - source
    - run deno
  - babel
    - run node
      - OK const { default: project } = require(
      - OK const project = require(
  - webpack
    - run node
      - OK const { default: project } = require(
      - OK const project = require(

## project04

- source  ESModules
  - export default 
  - export Each function
  - run deno
- babel   CommonJS
- webpack CommonJS
- test
  - source
    - run deno
      - test_source_1.js import project
      - test_source_2.js import { default: project }
      - test_source_3.js import { project }
  - babel
    - run node
      - test_build_1_babel_1.js const project = require(
      - test_build_1_babel_2.js const { default: project } = require(
      - test_build_1_babel_3.js const { project } = require(
  - webpack
    - run node
      - test_build_1_babel_1.js const project = require(
      - test_build_1_babel_2.js const { default: project } = require(
      - test_build_1_babel_3.js const { project } = require(
