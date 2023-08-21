import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: "c94bfd32-2deb-4381-b23e-683a70df1f1e",
        authority: 'https://login.microsoftonline.com/f812b3f1-8163-4ccf-a222-bb8e9beee0af',
        redirectUri:"https://localhost:3000/",
    },
    cache:{
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true,
    },
    system: {
        loggerOptions: {
            loggerCallback: (level: any, message: string, containsPii: any) =>{
                if (containsPii){
                    return;
                }
                switch(level){
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                }

            },
        },
    },
};

export const loginApiRequest = {
    scopes:["api://5d6c5aa4-abfc-4495-9aa7-195a2765406b/magchataiapi.scope"]
};
