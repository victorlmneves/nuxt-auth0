import Auth0Provider from 'next-auth/providers/auth0';
import { NuxtAuthHandler } from '#auth';
// type Props = {
// }
// function NextPage(props:Props) {
    
// }
// // This gets called on every request
// export async function getServerSideProps() {
//     return { props: {  } }
// }
// export default NextPage;

const scope = 'openid profile email offline_access read:bsr:cmdm read:bsr:pc read:bsr:thunderhead read:bsr:permission read:bsr:pin';
console.log("🚀 ~ file: [...].ts:15 ~ Auth0Provider:", Auth0Provider.default({}))

export default NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  secret: useRuntimeConfig().MEK_ENCRYPTION_SECRET,
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        Auth0Provider.default({
            clientSecret: useRuntimeConfig().MEK_CLIENT_SECRET  ,
            clientId: useRuntimeConfig().MEK_CLIENT_ID,
            issuer: useRuntimeConfig().VITE_MEK_DOMAIN,
            responseType: 'code',
            scope,
            checks: ['state'],
        })
    ]
});
