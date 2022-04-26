import { fixCypressSpec } from "../support";

beforeEach(fixCypressSpec(__filename));

it("Do the koalas match?", () => {
  cy.visit("/index.html").then(() => {
    cy.document().toMatchImageSnapshot({
      imageConfig: {
        createDiffImage: true, // Should a "diff image" be created, can be disabled for performance
        threshold: 0.05, // Amount in pixels or percentage before snapshot image is invalid
        thresholdType: "percent", // Can be either "pixel" or "percent"
      },
      name: "koala", // Naming resulting image file with a custom name rather than concatenating test titles
      separator: "_",
    });
  });
});
