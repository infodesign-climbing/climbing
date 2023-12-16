import { type AssetInfo, type ChainInfo, type ProposalInfo } from "@src/lib";
import { requestGet } from "@src/lib/requester";

export let akash: ChainInfo;
export let axelar: ChainInfo;
export let band: ChainInfo;
export let canto: ChainInfo;
export let celestia: ChainInfo;
export let cosmos: ChainInfo;
export let evmos: ChainInfo;
export let fetchai: ChainInfo;

export let humans: ChainInfo;
export let injective: ChainInfo;
export let kava: ChainInfo;
export let medibloc: ChainInfo;
export let osmosis: ChainInfo;
export let persistence: ChainInfo;
export let secret: ChainInfo;
export let sei: ChainInfo;
export let shentu: ChainInfo;
export let sommelier: ChainInfo;
export let stride: ChainInfo;
export let terra: ChainInfo;


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

export const promiseFetchaiInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_fetchai.json"
).then((d) => {
  fetchai = d;
  return d;
});

export const promiseHumansInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_humans.json"
).then((d) => {
  humans = d;
  return d;
});

export const promiseInjectiveInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_injective.json"
).then((d) => {
  injective = d;
  return d;
});

export const promiseKavaInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_kava.json"
).then((d) => {
  kava = d;
  return d;
});

export const promiseMediblocInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_medibloc.json"
).then((d) => {
  medibloc = d;
  return d;
});

export const promiseOsmosisInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_osmosis.json"
).then((d) => {
  osmosis = d;
  return d;
});

export const promisePersistenceInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_persistence.json"
).then((d) => {
  persistence = d;
  return d;
});

export const promiseSecretInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_secret.json"
).then((d) => {
  secret = d;
  return d;
});

export const promiseSeiInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_sei.json"
).then((d) => {
  sei = d;
  return d;
});

export const promiseShentuInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_shentu.json"
).then((d) => {
  shentu = d;
  return d;
});

export const promiseSommelierInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_sommelier.json"
).then((d) => {
  sommelier = d;
  return d;
});

export const promiseStrideInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_stride.json"
).then((d) => {
  stride = d;
  return d;
});

export const promiseTerraInfoData = requestGet<ChainInfo>(
  "/data/ChainInfo_final/info_terra.json"
).then((d) => {
  terra = d;
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
