import Auth0Provider from "next-auth/providers/auth0";
import { NuxtAuthHandler } from "#auth";

const runtimeConfig = useRuntimeConfig();
const scope =
  "openid profile email offline_access read:bsr:cmdm read:bsr:pc read:bsr:thunderhead read:bsr:permission read:bsr:pin";
const CHECKS = ["state"];
const AUTH0_RESPONSE_TYPE = "code";

const personalConfig = {
  secret: runtimeConfig.AUTH0_ENCRYPTION_SECRET,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    Auth0Provider.default({
      clientSecret: runtimeConfig.AUTH0_CLIENT_SECRET,
      clientId: runtimeConfig.AUTH0_CLIENT_ID,
      issuer: runtimeConfig.AUTH0_ISSUER_BASE_URL,
      responseType: AUTH0_RESPONSE_TYPE,
      checks: CHECKS,
      scope,
      authorization: { params: { scope: scope } },
    }),
  ],
};

const businessConfig = {
  secret: runtimeConfig.MEK_ENCRYPTION_SECRET,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    Auth0Provider.default({
      clientSecret: runtimeConfig.MEK_CLIENT_SECRET,
      clientId: runtimeConfig.MEK_CLIENT_ID,
      issuer: runtimeConfig.MEK_ISSUER_BASE_URL,
      responseType: AUTH0_RESPONSE_TYPE,
      checks: CHECKS,
      scope,
      authorization: { params: { scope: scope } },
      idpLogout: true,
      routes: {
        login: false,
      },
    }),
  ],
};

export default NuxtAuthHandler(personalConfig);
