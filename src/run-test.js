const { startAndTest } = require('start-server-and-test');

const main = async () => {
  await startAndTest({
    services: [
      {
        start: 'npm run start',
        url: 'http://localhost:3000',
      },
    ],
    test: 'cypress run --spec ./cypress/e2e/counter.cy.js  --headless --browser chrome',
  });
};

main();
