// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
          apiKey: "AIzaSyC3l2wAO7HkJ9biEXU-NnUhQeMsSHvvwz8",
          authDomain: "angwebsite-c2ab0.firebaseapp.com",
          databaseURL: "https://angwebsite-c2ab0.firebaseio.com",
          projectId: "angwebsite-c2ab0",
          storageBucket: "gs://angwebsite-c2ab0.appspot.com",
          messagingSenderId: "534164888530"}
};
