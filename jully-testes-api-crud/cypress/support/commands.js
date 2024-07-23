// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// CREATE COUNTER

const counter = window;
let compare;
if (!counter.des) {
  counter.des = 1;
  counter.its = 1;
}
const confer = () => counter.des;

export let des = () => {
  return String(counter.des++).padStart(2, "0") + " ➠ "  ;
};
export let its = () => {
  if (!compare || confer() !== compare) {
    counter.its = 1;
    compare = confer();
  }
  return String(counter.its++).padStart(2, "0") + " - " ;
};

export const BDD_ = {
  given: "𝐆𝐢𝐯𝐞𝐧 - ",
  when: "𝐖𝐡𝐞𝐧 - ",
  and: "𝐀𝐧𝐝 - ",
  then: "𝐓𝐡𝐞𝐧 - ",
  scenario: "𝐒𝐜𝐞𝐧𝐚𝐫𝐢𝐨 ➠ ",
};
