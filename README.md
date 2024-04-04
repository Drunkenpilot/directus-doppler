## Directus Extension Doppler
### A directus extension for using Doppler

#### Install extension package

```dotnetcli
npm i directus-extension-doppler
```

#### Add extension to project
Find and copy folder "directus-extension-doppler" from "/node_modules" to "/extensions"

#### Set env for Doppler
File: .env 
```dotnetcli
DOPPLER_PROJECT="DOPPLER PROJECT NAME"
DOPPLER_CONFIG="DOPPLER CONFIG"
DOPPLER_TOKEN="DOPPLER ACCESS TOKEN"
```
| NAME                            | Required |
| :------------------------------ | :------: |
| DOPPLER_PROJECT                 |   YES    |
| DOPPLER_CONFIG                  |   YES    |
| DOPPLER_TOKEN                   |   YES    |
| DOPPLER_FORMAT                  |    NO    |
| DOPPLER_INCLUDE_DYNAMIC_SECRETS |    NO    |
| DOPPLER_DYNAMIC_SECRETS_TTL_SEC |    NO    |
| DOPPLER_SECRETS                 |    NO    |
| DOPPLER_INCLUDE_MANAGED_SECRETS |    NO    |
| DOPPLER_PRINT_ENV               |    NO    |
| DOPPLER_INIT_EVENT              |    NO    |


#### Secrets Injection Hook
By Default The secrets will be injected into env by init event "cli:before"
Use DOPPLER_INIT_EVENT to change event key;

#### Monitoring Module
Active Doppler monitoring module in Directus Admin Settings Page.
Monitoring page shows current project, config, token values. 