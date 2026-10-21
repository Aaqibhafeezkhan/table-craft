// tablecraft/game — types for game files (no runtime code).
//
//   /// <reference types="@table-craft/table-craft/game" />
//   /** @type {import('@table-craft/table-craft/game').GameModule<State>} */
//   module.exports = { meta, setup, moves, view, endIf, actions };
//
// The reference adds the sandbox globals (`T`, `clone`, `module`); the import gives the contract types.
/// <reference path="./globals.d.ts" />

export * from './contract.js';
export * from './kit.js';
