<template>
  <private-view title="Doppler Environments Monitoring">
    <div class="lp-container">
      <VList>
        <VListItem>
          <strong class="envName"> Project: </strong>
          {{ configs.project ?? "Unknown" }}
        </VListItem>

        <VListItem>
          <strong class="envName">Config: </strong>
          {{ configs.config ?? "Unknown" }}
        </VListItem>

        <VListItem>
          <strong class="envName"> Token:</strong
          >{{ configs.token ?? "Unknown" }}
        </VListItem>
      </VList>
    </div>
  </private-view>
</template>

<script lang="ts" setup>
import { useApi } from "@directus/extensions-sdk";
import { ref } from "vue";

const api = useApi();
let configs = ref({});
async function fetchData() {
  const response = await api.get("/doppler/environments");
  configs.value = response.data;
}
fetchData();
</script>

<style>
.lp-container {
  padding: 0 50px;
}
.lp-container .envName {
  margin-right: 10px;
}
</style>
