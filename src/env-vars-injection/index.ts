import { defineHook } from "@directus/extensions-sdk";

import DopplerSDK from "@dopplerhq/node-sdk";
import updateDotenv from "update-dotenv";

export default defineHook(({ init }, { env }) => {
  const initEvent = env["DOPPLER_INIT_EVENT"] ?? "cli.before";
  init(initEvent, async () => {
    const projectName = env["DOPPLER_PROJECT"];
    const configName = env["DOPPLER_CONFIG"];
    const accessToken = env["DOPPLER_TOKEN"];
    const accepts = env["DOPPLER_FORMAT"] ?? "application/json";
    const includeDynamicSecrets =
      env["DOPPLER_INCLUDE_DYNAMIC_SECRETS"] ?? false;
    const dynamicSecretsTtlSec =
      env["DOPPLER_DYNAMIC_SECRETS_TTL_SEC"] ?? undefined;
    const secretsList = env["DOPPLER_SECRETS"] ?? undefined;
    const includeManagedSecrets =
      env["DOPPLER_INCLUDE_MANAGED_SECRETS"] ?? false;

    const printEnv = env["DOPPLER_PRINT_ENV"] ?? false;

    const doppler = new DopplerSDK({
      accessToken,
    });

    const { secrets } = await doppler.secrets.list(projectName, configName, {
      accepts,
      includeDynamicSecrets,
      dynamicSecretsTtlSec,
      secrets: secretsList,
      includeManagedSecrets,
    });

    if (secrets) {
      const envList: Record<string, string> = {};
      for (const key in secrets) {
        if (Object.prototype.hasOwnProperty.call(secrets, key)) {
          const list = secrets as Record<
            string,
            {
              raw?: string;
              computed?: string;
              note?: string;
            }
          >;
          const item = list[key];

          if (item?.raw) {
            envList[key] = item.raw;
          }
        }
      }

      updateDotenv(envList);
    }

    if (printEnv) console.log(env);
  });
});
