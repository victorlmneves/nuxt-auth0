import * as dotenv from "dotenv";

const brand = process.env.VITE_APP_BRAND;
const environment = process.env.VITE_MODE;

dotenv.config({ path: `.env.local`, override: true });
dotenv.config({ path: `.env.${environment}`, override: true });
dotenv.config({ path: `.env.${brand}`, override: true });
dotenv.config({ path: `.env.${brand}.local`, override: true });
dotenv.config({ path: `.env.${brand}.${environment}`, override: true });

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  typescript: {
    shim: false,
    // typeCheck:  true,
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    API_KEY: process.env.API_KEY,
    OPC_APIM_KEY: process.env.OPC_APIM_KEY,
    VITE_FRONTDOOR_ORIGIN: process.env.VITE_FRONTDOOR_ORIGIN,

    MEK_ISSUER_BASE_URL: process.env.MEK_ISSUER_BASE_URL,
    MEK_ENCRYPTION_SECRET: process.env.MEK_ENCRYPTION_SECRET,
    MEK_CLIENT_ID: process.env.MEK_CLIENT_ID,
    MEK_CLIENT_SECRET: process.env.MEK_CLIENT_SECRET,

    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
    AUTH0_ENCRYPTION_SECRET: process.env.AUTH0_ENCRYPTION_SECRET,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,

    // public: {
    //   VITE_APP_BRAND: process.env.VITE_APP_BRAND,
    //   VITE_APP_BRANDNAME: process.env.VITE_APP_BRANDNAME,
    //   VITE_API_ENDPOINT_ORCHESTRA: process.env.VITE_API_ENDPOINT_ORCHESTRA,
    //   VITE_API_ENDPOINT_SYMPHONY: process.env.VITE_API_ENDPOINT_SYMPHONY,
    //   VITE_API_VERSION: process.env.VITE_API_VERSION,
    //   VITE_API_TOUCHPOINT: process.env.VITE_API_TOUCHPOINT,
    //   VITE_API_TENANT: process.env.VITE_API_TENANT,
    //   VITE_PC_ENVIRONMENT: process.env.VITE_PC_ENVIRONMENT,
    //   VITE_MEK_DOMAIN: process.env.AUTH0_ISSUER_BASE_URL,
    //   VITE_MEK_AUDIENCE: process.env.VITE_MEK_AUDIENCE,
    // },
  },
  modules: ["@sidebase/nuxt-auth"],
  auth: {
    // The module is enabled. Change this to disable the module
    isEnabled: true,
    // The origin is set to the development origin. Change this when deploying to production by setting `origin` in this config before build-time or by exporting `AUTH_ORIGIN` by running `export AUTH_ORIGIN=...`
    origin: "http://localhost:3000",
    // The base path to the authentication endpoints. Change this if you want to add your auth-endpoints at a non-default location
    basePath: "/api/auth",
    // Whether to periodically refresh the session. Change this to `true` for a refresh every seconds or set this to a number like `5000` for a refresh every 5000 milliseconds (aka: 5 seconds)
    enableSessionRefreshPeriodically: false,
    // Whether to refresh the session whenever a window focus event happens, i.e, when your user refocuses the window. Set this to `false` to turn this off
    enableSessionRefreshOnWindowFocus: false,
    // Whether to add a global authentication middleware that will protect all pages without exclusion
    enableGlobalAppMiddleware: false,
    // Select the default-provider to use when `signIn` is called. Setting this here will also effect the global middleware behavior: E.g., when you set it to `github` and the user is unauthorized, they will be directly forwarded to the Github OAuth page instead of seeing the app-login page
    defaultProvider: "auth0",
    provider: {
      type: "authjs",
      defaultProvider: "auth0",
    },
    // Whether to automatically set the callback url sto the page the user tried to visit when the middleware stopped them. This is useful to disable this when using the credentials provider, as it does not allow a `callbackUrl`. Setting this to a string-value will result in that being used as the callbackUrl path.
    addDefaultCallbackUrl: true,
    // Configuration of the global auth-middleware (only applies if you set `enableGlobalAppMiddleware: true` above!)
    // globalMiddlewareOptions: {
    //   // Whether to allow access to 404 pages without authentication. Set this to `false` to force users to sign-in before seeing `404` pages. Setting this to false may lead to vue-router problems (as the target page does not exist)
    //   allow404WithoutAuth: true,
    //   // Whether to automatically set the callback url to the page the user tried to visit when the middleware stopped them. This is useful to disable this when using the credentials provider, as it does not allow a `callbackUrl`. Setting this to a string-value will result in that being used as the callbackUrl path. Note: You also need to set the global `addDefaultCallbackUrl` setting to `false` if you want to fully disable this for the global middleware.
    //   addDefaultCallbackUrl: true,
    // },
  },
});
