import { firebase } from '@firebase/app';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDJSVXij7QRGycdDCvqVDTDjiY6xCiWDMc",
    authDomain: "hiapps-1da38.firebaseapp.com",
    projectId: "hiapps-1da38",
    storageBucket: "hiapps-1da38.appspot.com",
    messagingSenderId: "1069609016725",
    appId: "1:1069609016725:web:b5a28cbd221b8fe0b36a9c",
    measurementId: "G-18YMDHJ6SC"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
