
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    fullyParallel: true,

    retries: 0,

    reporter: 'html',

    use: {
        timeout: 60000,
        trace: 'on-first-retry',
    },

    projects: [
        {
            name: 'chromium',
            use: {
                browserName: 'chromium',
            },
        },
    ],
});
