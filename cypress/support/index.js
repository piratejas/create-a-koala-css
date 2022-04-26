import "cypress-plugin-snapshots/commands";

export const fixCypressSpec = (filename) => () => {
  const path = require("path");
  console.log(filename);
  let relative = filename;
  if (filename[0] === "/") {
    relative = filename.slice(1); // removes leading "/"
  }
  const projectRoot = Cypress.config("projectRoot");
  const absolute = path.join(projectRoot, relative);
  Cypress.spec = {
    absolute,
    name: path.basename(filename),
    relative,
  };
};
