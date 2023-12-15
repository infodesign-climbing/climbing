import { type AssetInfo, type ChainInfo, type ProposalInfo } from "@src/lib";
import { requestGet } from "@src/lib/requester";

export let akash: ChainInfo;
export let axelar: ChainInfo;
export let band: ChainInfo;
export let canto: ChainInfo;
export let celestia: ChainInfo;
export let cosmos: ChainInfo;
export let evmos: ChainInfo;

export let assets: AssetInfo;
export let cosmosAsset: AssetInfo;
export let akashAsset: AssetInfo;
export let axelarAsset: AssetInfo;

export let proposals: ProposalInfo;

export const promiseAkashInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_akash.json"
).then((d) => {
  akash = d;
  return d;
});
export const promiseAxelarInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_axelar.json"
).then((d) => {
  axelar = d;
  return d;
});
export const promiseBandInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_band.json"
).then((d) => {
  band = d;
  return d;
});
export const promiseCantoInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_canto.json"
).then((d) => {
  canto = d;
  return d;
});

export const promiseCelestiaInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_celestia.json"
).then((d) => {
  celestia = d;
  return d;
});

export const promiseCosmosInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_cosmos.json"
).then((d) => {
  cosmos = d;
  return d;
});

export const promiseEvmosInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_evmos.json"
).then((d) => {
  evmos = d;
  return d;
});

// =======================================
export const promiseAkashData = requestGet<AssetInfo>(
  "/data/Assets_final/info_akash.json"
).then((d) => {
  akashAsset = d;
  return d;
});

export const promiseCosmosData = requestGet<AssetInfo>(
  "/data/Assets_final/info_cosmos.json"
).then((d) => {
  cosmosAsset = d;
  return d;
});

export const promiseAxelarData = requestGet<AssetInfo>(
  "/data/Assets_final/info_axelar.json"
).then((d) => {
  axelarAsset = d;
  return d;
});

// =======================================
export const promiseProposalsData = requestGet<ProposalInfo>(
  "/data/Proposals_final/proposals_akash.json"
).then((d) => {
  proposals = d;
  return d;
});
