import { defineEndpoint } from "@directus/extensions-sdk";

export default defineEndpoint({
  id: "doppler",
  handler: (router, { env }) => {
    // Router config goes here
    router.get("/environments", async (req: any, res) => {
      if (req.accountability?.user == null) {
        res.status(403);
        return res.send(`You don't have permission to access this.`);
      }

      return res.json({
        config: env.DOPPLER_CONFIG,
        project: env.DOPPLER_PROJECT,
        token: `****${env.DOPPLER_TOKEN.slice(-5)}`,
      });
    });
  },
});
