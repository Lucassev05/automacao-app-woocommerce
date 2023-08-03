import { join } from "path";
import allure from "allure-commandline";
import video from "wdio-video-reporter";

export const config = {
  runner: "local",
  specs: [
    "./test/specs/**/*.spec.js",
    // ToDo: define location for spec files here
  ],
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  maxInstances: 10,
  capabilities: [
    {
      app: "bs://b374cdb19f1bef8a4ae58c9721719bdfdfd5d0ff",
      device: "Google Pixel 2",
      os_version: "9.0",
      project: "Meu primeiro projeto em Device Farm",
      build: "1",
      name: "teste_criar_produto",
      // // capabilities for local Appium web tests on an Android Emulator
      // platformName: "Android",
      // "appium:platformVersion": "9.0",
      // "appium:deviceName": "ebac-qa",
      // "appium:automationName": "UiAutomator2",
      // "appium:app": join(process.cwd(), "./app/android/wcandroid-7.3.1.apk"),
      // "appium:appWaitActivity":
      //   "com.woocommerce.android.ui.login.LoginActivity",
      // "appium:appPackage": "com.woocommerce.android",
      // "appium:appActivity": ".ui.main.MainActivity",
    },
  ],
  logLevel: "info",
  bail: 0,
  hostname: "host.docker.internal",
  baseUrl: "http://localhost",
  // port: 4723,
  // path: "/wd/hub",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  user: "lucassantos_XznqbZ",
  key: "SGsQMYsgMRkK7LFbFafX",
  services: ["browserstack"],
  // services: ["appium"],
  framework: "mocha",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
    [
      video,
      {
        saveAllVideos: true, // If true, also saves videos for successful test cases
        videoSlowdownMultiplier: 10, // Higher to get slower videos, lower for faster videos [Value 1-100]
      },
    ],
  ],

  onComplete: function () {
    const reportError = new Error("Could not generate Allure report");
    const generation = allure(["generate", "allure-results", "--clean"]);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 5000);

      generation.on("exit", function (exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }

        console.log("Allure report successfully generated");
        resolve();
      });
    });
  },

  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (error) {
      await driver.takeScreenshot();
    }
  },

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
