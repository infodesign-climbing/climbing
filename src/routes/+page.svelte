<script lang="ts">
  import {
    akash,
    axelar,
    band,
    canto,
    celestia,
    cosmos,
    evmos,
    fetchai,
    humans,
    injective,
    kava,
    medibloc,
    osmosis,
    persistence,
    secret,
    sei,
    shentu,
    sommelier,
    stride,
    terra,
    promiseHumansInfoData,
    promiseInjectiveInfoData,
    promiseKavaInfoData,
    promiseMediblocInfoData,
    promiseOsmosisInfoData,
    promisePersistenceInfoData,
    promiseSecretInfoData,
    promiseSeiInfoData,
    promiseShentuInfoData,
    promiseSommelierInfoData,
    promiseStrideInfoData,
    promiseTerraInfoData,
    promiseFetchaiInfoData,
    promiseEvmosInfoData,
    promiseCosmosInfoData,
    promiseBandInfoData,
    promiseCantoInfoData,
    promiseAxelarInfoData,
    promiseCelestiaInfoData,
    promiseAkashInfoData,
  } from "@src/lib/datafetch";
  import { ColorType, CrosshairMode } from "lightweight-charts";
  import { Chart, LineSeries } from "svelte-lightweight-charts";

  // 메인그래프 디자인 옵션
  const options = {
    width: 833,
    height: 384,
    rightPriceScale: {
      visible: true,
      borderColor: "#363C4E",
    },
    leftPriceScale: {
      visible: true,
      borderColor: "#363C4E",
    },
    layout: {
      background: {
        type: ColorType.Solid,
        color: "#06092b",
      },
      textColor: "#D9D9D9",
    },
    grid: {
      horzLines: {
        color: "#363C4E",
      },
      vertLines: {
        color: "#2B2B43",
      },
    },
    crosshair: {
      mode: CrosshairMode.Normal,
    },
    timeScale: {
      borderColor: "#363C4E",
    },
    handleScroll: {
      vertTouchDrag: false,
    },
  };
  // 서브그래프1 디자인 옵션
  const options2 = {
    width: 833,
    height: 118,
    rightPriceScale: {
      visible: true,
      borderColor: "#363C4E",
    },
    leftPriceScale: {
      visible: true,
      borderColor: "#363C4E",
    },
    layout: {
      background: {
        type: ColorType.Solid,
        color: "#06092b",
      },
      textColor: "#D9D9D9",
    },
    grid: {
      horzLines: {
        color: "#363C4E",
      },
      vertLines: {
        color: "#2B2B43",
      },
    },
    crosshair: {
      mode: CrosshairMode.Normal,
    },
    timeScale: {
      borderColor: "#363C4E",
    },
    handleScroll: {
      vertTouchDrag: false,
    },
  };
  // 코인 1 예시데이터
  const line = [
    { time: "2018-10-19", value: 35.98 },
    { time: "2018-10-22", value: 35.75 },
    { time: "2018-10-23", value: 35.65 },
    { time: "2018-10-24", value: 34.12 },
    { time: "2018-10-25", value: 35.84 },
    { time: "2018-10-26", value: 35.24 },
    { time: "2018-10-29", value: 35.99 },
    { time: "2018-10-30", value: 37.71 },
    { time: "2018-10-31", value: 38.14 },
    { time: "2018-11-01", value: 37.95 },
    { time: "2018-11-02", value: 37.66 },
    { time: "2018-11-05", value: 38.02 },
    { time: "2018-11-06", value: 37.73 },
    { time: "2018-11-07", value: 38.3 },
    { time: "2018-11-08", value: 38.3 },
    { time: "2018-11-09", value: 38.34 },
    { time: "2018-11-12", value: 38.0 },
    { time: "2018-11-13", value: 37.72 },
    { time: "2018-11-14", value: 38.29 },
    { time: "2018-11-15", value: 38.49 },
    { time: "2018-11-16", value: 38.59 },
    { time: "2018-11-19", value: 38.18 },
    { time: "2018-11-20", value: 36.76 },
    { time: "2018-11-21", value: 37.51 },
    { time: "2018-11-23", value: 37.39 },
    { time: "2018-11-26", value: 37.77 },
    { time: "2018-11-27", value: 38.36 },
    { time: "2018-11-28", value: 39.06 },
    { time: "2018-11-29", value: 39.42 },
    { time: "2018-11-30", value: 39.01 },
    { time: "2018-12-03", value: 39.15 },
    { time: "2018-12-04", value: 37.69 },
    { time: "2018-12-06", value: 37.88 },
    { time: "2018-12-07", value: 37.41 },
    { time: "2018-12-10", value: 37.35 },
    { time: "2018-12-11", value: 36.84 },
    { time: "2018-12-12", value: 36.98 },
    { time: "2018-12-13", value: 36.76 },
    { time: "2018-12-14", value: 36.34 },
    { time: "2018-12-17", value: 36.21 },
    { time: "2018-12-18", value: 35.65 },
    { time: "2018-12-19", value: 35.19 },
    { time: "2018-12-20", value: 34.62 },
    { time: "2018-12-21", value: 33.75 },
    { time: "2018-12-24", value: 33.07 },
    { time: "2018-12-26", value: 34.14 },
    { time: "2018-12-27", value: 34.47 },
    { time: "2018-12-28", value: 34.35 },
    { time: "2018-12-31", value: 34.05 },
    { time: "2019-01-02", value: 34.37 },
    { time: "2019-01-03", value: 34.64 },
    { time: "2019-01-04", value: 35.81 },
    { time: "2019-01-07", value: 35.43 },
    { time: "2019-01-08", value: 35.72 },
    { time: "2019-01-09", value: 36.06 },
    { time: "2019-01-10", value: 35.82 },
    { time: "2019-01-11", value: 35.63 },
    { time: "2019-01-14", value: 35.77 },
    { time: "2019-01-15", value: 35.83 },
    { time: "2019-01-16", value: 35.9 },
    { time: "2019-01-17", value: 35.91 },
    { time: "2019-01-18", value: 36.21 },
    { time: "2019-01-22", value: 34.97 },
    { time: "2019-01-23", value: 36.89 },
    { time: "2019-01-24", value: 36.24 },
    { time: "2019-01-25", value: 35.78 },
    { time: "2019-01-28", value: 35.37 },
    { time: "2019-01-29", value: 36.08 },
    { time: "2019-01-30", value: 35.43 },
    { time: "2019-01-31", value: 36.57 },
    { time: "2019-02-01", value: 36.79 },
    { time: "2019-02-04", value: 36.77 },
    { time: "2019-02-05", value: 37.15 },
    { time: "2019-02-06", value: 37.17 },
    { time: "2019-02-07", value: 37.68 },
    { time: "2019-02-08", value: 37.6 },
    { time: "2019-02-11", value: 37.0 },
    { time: "2019-02-12", value: 37.24 },
    { time: "2019-02-13", value: 37.03 },
    { time: "2019-02-14", value: 37.26 },
    { time: "2019-02-15", value: 37.77 },
    { time: "2019-02-19", value: 37.55 },
    { time: "2019-02-20", value: 37.79 },
    { time: "2019-02-21", value: 38.47 },
    { time: "2019-02-22", value: 38.61 },
    { time: "2019-02-25", value: 38.57 },
    { time: "2019-02-26", value: 38.8 },
    { time: "2019-02-27", value: 38.53 },
    { time: "2019-02-28", value: 38.67 },
    { time: "2019-03-01", value: 39.1 },
    { time: "2019-03-04", value: 38.73 },
    { time: "2019-03-05", value: 38.72 },
    { time: "2019-03-06", value: 38.61 },
    { time: "2019-03-07", value: 38.38 },
    { time: "2019-03-08", value: 38.19 },
    { time: "2019-03-11", value: 39.17 },
    { time: "2019-03-12", value: 39.49 },
    { time: "2019-03-13", value: 39.56 },
    { time: "2019-03-14", value: 39.87 },
    { time: "2019-03-15", value: 40.47 },
    { time: "2019-03-18", value: 39.92 },
    { time: "2019-03-19", value: 39.78 },
    { time: "2019-03-20", value: 39.47 },
    { time: "2019-03-21", value: 40.05 },
    { time: "2019-03-22", value: 39.46 },
    { time: "2019-03-25", value: 39.18 },
    { time: "2019-03-26", value: 39.63 },
    { time: "2019-03-27", value: 40.21 },
    { time: "2019-03-28", value: 40.42 },
    { time: "2019-03-29", value: 39.98 },
    { time: "2019-04-01", value: 40.31 },
    { time: "2019-04-02", value: 40.02 },
    { time: "2019-04-03", value: 40.27 },
    { time: "2019-04-04", value: 40.41 },
    { time: "2019-04-05", value: 40.42 },
    { time: "2019-04-08", value: 40.71 },
    { time: "2019-04-09", value: 41.04 },
    { time: "2019-04-10", value: 41.08 },
    { time: "2019-04-11", value: 41.04 },
    { time: "2019-04-12", value: 41.3 },
    { time: "2019-04-15", value: 41.78 },
    { time: "2019-04-16", value: 41.97 },
    { time: "2019-04-17", value: 42.57 },
    { time: "2019-04-18", value: 42.43 },
    { time: "2019-04-22", value: 42.0 },
    { time: "2019-04-23", value: 41.99 },
    { time: "2019-04-24", value: 41.85 },
    { time: "2019-04-25", value: 42.93 },
    { time: "2019-04-26", value: 43.08 },
    { time: "2019-04-29", value: 43.45 },
    { time: "2019-04-30", value: 43.53 },
    { time: "2019-05-01", value: 43.42 },
    { time: "2019-05-02", value: 42.65 },
    { time: "2019-05-03", value: 43.29 },
    { time: "2019-05-06", value: 43.3 },
    { time: "2019-05-07", value: 42.76 },
    { time: "2019-05-08", value: 42.55 },
    { time: "2019-05-09", value: 42.92 },
    { time: "2019-05-10", value: 43.15 },
    { time: "2019-05-13", value: 42.28 },
    { time: "2019-05-14", value: 42.91 },
    { time: "2019-05-15", value: 42.49 },
    { time: "2019-05-16", value: 43.19 },
    { time: "2019-05-17", value: 43.54 },
    { time: "2019-05-20", value: 42.78 },
    { time: "2019-05-21", value: 43.29 },
    { time: "2019-05-22", value: 43.3 },
    { time: "2019-05-23", value: 42.73 },
    { time: "2019-05-24", value: 42.67 },
    { time: "2019-05-28", value: 42.75 },
  ];
  // 코인 2 예시데이터
  const line1 = [
    { time: "2018-10-19", value: 26.19 },
    { time: "2018-10-22", value: 25.87 },
    { time: "2018-10-23", value: 25.83 },
    { time: "2018-10-24", value: 25.78 },
    { time: "2018-10-25", value: 25.82 },
    { time: "2018-10-26", value: 25.81 },
    { time: "2018-10-29", value: 25.82 },
    { time: "2018-10-30", value: 25.71 },
    { time: "2018-10-31", value: 25.82 },
    { time: "2018-11-01", value: 25.72 },
    { time: "2018-11-02", value: 25.74 },
    { time: "2018-11-05", value: 25.81 },
    { time: "2018-11-06", value: 25.75 },
    { time: "2018-11-07", value: 25.73 },
    { time: "2018-11-08", value: 25.75 },
    { time: "2018-11-09", value: 25.75 },
    { time: "2018-11-12", value: 25.76 },
    { time: "2018-11-13", value: 25.8 },
    { time: "2018-11-14", value: 25.77 },
    { time: "2018-11-15", value: 25.75 },
    { time: "2018-11-16", value: 25.75 },
    { time: "2018-11-19", value: 25.75 },
    { time: "2018-11-20", value: 25.72 },
    { time: "2018-11-21", value: 25.78 },
    { time: "2018-11-23", value: 25.72 },
    { time: "2018-11-26", value: 25.78 },
    { time: "2018-11-27", value: 25.85 },
    { time: "2018-11-28", value: 25.85 },
    { time: "2018-11-29", value: 25.55 },
    { time: "2018-11-30", value: 25.41 },
    { time: "2018-12-03", value: 25.41 },
    { time: "2018-12-04", value: 25.42 },
    { time: "2018-12-06", value: 25.33 },
    { time: "2018-12-07", value: 25.39 },
    { time: "2018-12-10", value: 25.32 },
    { time: "2018-12-11", value: 25.48 },
    { time: "2018-12-12", value: 25.39 },
    { time: "2018-12-13", value: 25.45 },
    { time: "2018-12-14", value: 25.52 },
    { time: "2018-12-17", value: 25.38 },
    { time: "2018-12-18", value: 25.36 },
    { time: "2018-12-19", value: 25.65 },
    { time: "2018-12-20", value: 25.7 },
    { time: "2018-12-21", value: 25.66 },
    { time: "2018-12-24", value: 25.66 },
    { time: "2018-12-26", value: 25.65 },
    { time: "2018-12-27", value: 25.66 },
    { time: "2018-12-28", value: 25.68 },
    { time: "2018-12-31", value: 25.77 },
    { time: "2019-01-02", value: 25.72 },
    { time: "2019-01-03", value: 25.69 },
    { time: "2019-01-04", value: 25.71 },
    { time: "2019-01-07", value: 25.72 },
    { time: "2019-01-08", value: 25.72 },
    { time: "2019-01-09", value: 25.66 },
    { time: "2019-01-10", value: 25.85 },
    { time: "2019-01-11", value: 25.92 },
    { time: "2019-01-14", value: 25.94 },
    { time: "2019-01-15", value: 25.95 },
    { time: "2019-01-16", value: 26.0 },
    { time: "2019-01-17", value: 25.99 },
    { time: "2019-01-18", value: 25.6 },
    { time: "2019-01-22", value: 25.81 },
    { time: "2019-01-23", value: 25.7 },
    { time: "2019-01-24", value: 25.74 },
    { time: "2019-01-25", value: 25.8 },
    { time: "2019-01-28", value: 25.83 },
    { time: "2019-01-29", value: 25.7 },
    { time: "2019-01-30", value: 25.78 },
    { time: "2019-01-31", value: 25.35 },
    { time: "2019-02-01", value: 25.6 },
    { time: "2019-02-04", value: 25.65 },
    { time: "2019-02-05", value: 25.73 },
    { time: "2019-02-06", value: 25.71 },
    { time: "2019-02-07", value: 25.71 },
    { time: "2019-02-08", value: 25.72 },
    { time: "2019-02-11", value: 25.76 },
    { time: "2019-02-12", value: 25.84 },
    { time: "2019-02-13", value: 25.85 },
    { time: "2019-02-14", value: 25.87 },
    { time: "2019-02-15", value: 25.89 },
    { time: "2019-02-19", value: 25.9 },
    { time: "2019-02-20", value: 25.92 },
    { time: "2019-02-21", value: 25.96 },
    { time: "2019-02-22", value: 26.0 },
    { time: "2019-02-25", value: 25.93 },
    { time: "2019-02-26", value: 25.92 },
    { time: "2019-02-27", value: 25.67 },
    { time: "2019-02-28", value: 25.79 },
    { time: "2019-03-01", value: 25.86 },
    { time: "2019-03-04", value: 25.94 },
    { time: "2019-03-05", value: 26.02 },
    { time: "2019-03-06", value: 25.95 },
    { time: "2019-03-07", value: 25.89 },
    { time: "2019-03-08", value: 25.94 },
    { time: "2019-03-11", value: 25.91 },
    { time: "2019-03-12", value: 25.92 },
    { time: "2019-03-13", value: 26.0 },
    { time: "2019-03-14", value: 26.05 },
    { time: "2019-03-15", value: 26.11 },
    { time: "2019-03-18", value: 26.1 },
    { time: "2019-03-19", value: 25.98 },
    { time: "2019-03-20", value: 26.11 },
    { time: "2019-03-21", value: 26.12 },
    { time: "2019-03-22", value: 25.88 },
    { time: "2019-03-25", value: 25.85 },
    { time: "2019-03-26", value: 25.72 },
    { time: "2019-03-27", value: 25.73 },
    { time: "2019-03-28", value: 25.8 },
    { time: "2019-03-29", value: 25.77 },
    { time: "2019-04-01", value: 26.06 },
    { time: "2019-04-02", value: 25.93 },
    { time: "2019-04-03", value: 25.95 },
    { time: "2019-04-04", value: 26.06 },
    { time: "2019-04-05", value: 26.16 },
    { time: "2019-04-08", value: 26.12 },
    { time: "2019-04-09", value: 26.07 },
    { time: "2019-04-10", value: 26.13 },
    { time: "2019-04-11", value: 26.04 },
    { time: "2019-04-12", value: 26.04 },
    { time: "2019-04-15", value: 26.05 },
    { time: "2019-04-16", value: 26.01 },
    { time: "2019-04-17", value: 26.09 },
    { time: "2019-04-18", value: 26.0 },
    { time: "2019-04-22", value: 26.0 },
    { time: "2019-04-23", value: 26.06 },
    { time: "2019-04-24", value: 26.0 },
    { time: "2019-04-25", value: 25.81 },
    { time: "2019-04-26", value: 25.88 },
    { time: "2019-04-29", value: 25.91 },
    { time: "2019-04-30", value: 25.9 },
    { time: "2019-05-01", value: 26.02 },
    { time: "2019-05-02", value: 25.97 },
    { time: "2019-05-03", value: 26.02 },
    { time: "2019-05-06", value: 26.03 },
    { time: "2019-05-07", value: 26.04 },
    { time: "2019-05-08", value: 26.05 },
    { time: "2019-05-09", value: 26.05 },
    { time: "2019-05-10", value: 26.08 },
    { time: "2019-05-13", value: 26.05 },
    { time: "2019-05-14", value: 26.01 },
    { time: "2019-05-15", value: 26.03 },
    { time: "2019-05-16", value: 26.14 },
    { time: "2019-05-17", value: 26.09 },
    { time: "2019-05-20", value: 26.01 },
    { time: "2019-05-21", value: 26.12 },
    { time: "2019-05-22", value: 26.15 },
    { time: "2019-05-23", value: 26.18 },
    { time: "2019-05-24", value: 26.16 },
    { time: "2019-05-28", value: 26.23 },
  ];

  const clickTest = (id) => {
    console.log(id);
  };
</script>

<div class="Desktop1">
  <!-- svelte-ignore a11y-missing-attribute -->

  <div class="Bgr2"></div>
  <!--그래프 섹션-->
  <div class="Graph">
    <!--메인 그래프-->
    <div class="Main1">
      <Chart {...options}>
        <LineSeries
          data={line}
          priceScaleId="right"
          color="rgba(4, 111, 232, 1)"
          lineWidth={2}
        />
        <LineSeries
          data={line1}
          priceScaleId="left"
          color="#FFFF00"
          lineWidth={2}
        />
      </Chart>
    </div>
    <!--서브 그래프-->
    <div class="Sub3">
      <Chart {...options2}>
        <LineSeries
          data={line}
          priceScaleId="right"
          color="rgba(4, 111, 232, 1)"
          lineWidth={2}
        />
        <LineSeries
          data={line1}
          priceScaleId="left"
          color="#FFFF00"
          lineWidth={2}
        />
      </Chart>
    </div>
    <div class="Sub4">
      <Chart {...options2}>
        <LineSeries
          data={line}
          priceScaleId="right"
          color="rgba(4, 111, 232, 1)"
          lineWidth={2}
        />
        <LineSeries
          data={line1}
          priceScaleId="left"
          color="#FFFF00"
          lineWidth={2}
        />
      </Chart>
    </div>
  </div>
  <!--좌측상단 로고-->
  <div class="Climbing">Climbing</div>
  <!--리스트 스크롤-->
  <div class="Scrollsample"></div>
  <!--코인 리스트-->
  <div class="List">
    <div class="select-container"></div>

    <!-- akash -->
    <div class="CoinBox" on:click={() => clickTest(1)}>
      <div class="In">
        {#await Promise.all([promiseAkashInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{akash.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img class="Coinimg" src="/images/akash.png" alt="Token Image" />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>

    <!-- axelar -->
    <div class="CoinBox" on:click={() => clickTest(2)}>
      <div class="In">
        {#await Promise.all([promiseAxelarInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{axelar.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img class="Coinimg" src="/images/axelar.png" alt="Token Image" />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>

    <!-- band -->
    <div class="CoinBox" on:click={() => clickTest(3)}>
      <div class="In">
        {#await Promise.all([promiseBandInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{band.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img class="Coinimg" src="/images/band.png" alt="Token Image" />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>

    <!-- canto -->
    <div class="CoinBox" on:click={() => clickTest(4)}>
      <div class="In">
        {#await Promise.all([promiseCantoInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{canto.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img class="Coinimg" src="/images/canto.png" alt="Token Image" />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>

    <!-- celestia -->
    <div class="CoinBox" on:click={() => clickTest(5)}>
      <div class="In">
        {#await Promise.all([promiseCelestiaInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{celestia.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img class="Coinimg" src="images/celestia.png" alt="Token Image" />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>

    <!-- cosmos -->
    <div class="CoinBox" on:click={() => clickTest(6)}>
      <div class="In">
        {#await Promise.all([promiseCosmosInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{cosmos.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img class="Coinimg" src="/images/cosmos.png" alt="Token Image" />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>

    <!-- evmos -->
    <div class="CoinBox" on:click={() => clickTest(7)}>
      <div class="In">
        {#await Promise.all([promiseEvmosInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{evmos.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img class="Coinimg" src="/images/evmos.png" alt="Token Image" />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>

    <!-- fetchai -->
    <div class="CoinBox" on:click={() => clickTest(8)}>
      <div class="In">
        {#await Promise.all([promiseFetchaiInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{fetchai.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img class="Coinimg" src="/images/fetchai.png" alt="Token Image" />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>

    <!-- humans -->
    <div class="CoinBox" on:click={() => clickTest(9)}>
      <div class="In">
        {#await Promise.all([promiseHumansInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{humans.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img class="Coinimg" src="/images/humans.png" alt="Token Image" />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>

    <!-- injectice -->
    <div class="CoinBox" on:click={() => clickTest(10)}>
      <div class="In">
        {#await Promise.all([promiseInjectiveInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{injective.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img class="Coinimg" src="/images/injective.png" alt="Token Image" />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>

    <!-- kava -->
    <div class="CoinBox" on:click={() => clickTest(11)}>
      <div class="In">
        {#await Promise.all([promiseKavaInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{kava.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img class="Coinimg" src="/images/kava.png" alt="Token Image" />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>

    <!-- medibloc -->
    <div class="CoinBox" on:click={() => clickTest(12)}>
      <div class="In">
        {#await Promise.all([promiseMediblocInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{medibloc.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img class="Coinimg" src="/images/medibloc.png" alt="Token Image" />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>

    <!-- osmosis -->
    <div class="CoinBox" on:click={() => clickTest(13)}>
      <div class="In">
        {#await Promise.all([promiseOsmosisInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{osmosis.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img class="Coinimg" src="/images/osmosis.png" alt="Token Image" />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>

    <!-- persistence -->
    <div class="CoinBox" on:click={() => clickTest(14)}>
      <div class="In">
        {#await Promise.all([promisePersistenceInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{persistence.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img
            class="Coinimg"
            src="/images/persistence.png"
            alt="Token Image"
          />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>

    <!-- secret -->
    <div class="CoinBox" on:click={() => clickTest(15)}>
      <div class="In">
        {#await Promise.all([promiseSecretInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{secret.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img class="Coinimg" src="/images/secret.png" alt="Token Image" />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>

    <!-- sei -->
    <div class="CoinBox" on:click={() => clickTest(16)}>
      <div class="In">
        {#await Promise.all([promiseSeiInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{sei.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img class="Coinimg" src="/images/sei.png" alt="Token Image" />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>

    <!-- shentu -->
    <div class="CoinBox" on:click={() => clickTest(17)}>
      <div class="In">
        {#await Promise.all([promiseShentuInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{shentu.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img class="Coinimg" src="images/shentu.png" alt="Token Image" />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>

    <!-- sommelier -->
    <div class="CoinBox" on:click={() => clickTest(18)}>
      <div class="In">
        {#await Promise.all([promiseSommelierInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{sommelier.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img class="Coinimg" src="images/sommelier.png" alt="Token Image" />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>

    <!-- stride -->
    <div class="CoinBox" on:click={() => clickTest(19)}>
      <div class="In">
        {#await Promise.all([promiseStrideInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{stride.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img class="Coinimg" src="/images/stride.png" alt="Token Image" />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>

    <!-- terra -->
    <div class="CoinBox" on:click={() => clickTest(20)}>
      <div class="In">
        {#await Promise.all([promiseTerraInfoData])}
          <div>Loading data...</div>
        {:then}
          <div class="Chain">{terra.data[0].chain.toUpperCase()}</div>
          <div class="Per">60.4%</div>
          <img class="Coinimg" src="/images/terra.png" alt="Token Image" />
          <div class="Price">0.998425</div>
        {:catch error}
          <div>{error.message}</div>
        {/await}
      </div>
    </div>
  </div>
  <!--그래프 섹션 드롭다운 메뉴-->
  <div class="Variant3">
    <!--그래프 개수 드롭다운-->
    <div class="Variantgraph">
      <select name="graph" class="graph">
        <option disabled selected>개수</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>

    <!--그래프 시간 단위 드롭다운-->
    <div class="Varianttime">
      <select name="time">
        <option disabled selected>시간</option>
        <option value="1day">1일</option>
        <option value="1month">1달</option>
        <option value="1year">1년</option>
      </select>
    </div>
  </div>
  <!--코인 리스트 main/sub 전환버튼-->
  <div class="Group17">
    <div class="boxdrop">
      <select name="sort">
        <option disabled selected>정렬</option>
        <option value="1day">오름차순</option>
        <option value="1month">내림차순</option>
        <option value="1year">가격변동</option>
      </select>
    </div>
    <div class="Rectangle12">
      <div class="Main">Main</div>
    </div>
  </div>
</div>

<style lang="scss">
  @font-face {
    font-family: "Fugaz One";
    src: url("../fonts/FugazOne-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family: "Inter";
    src: url("../fonts/Inter-SemiBold.ttf") format("truetype");
  }
  @font-face {
    font-family: "Noto";
    src: url("../fonts/NotoSansKR-Regular.ttf") format("truetype");
  }
  select {
    display: inline-block;
    width: 110px;
    height: 36px;
    padding: 8px;
    align-items: center;
    outline: 0;
    border-radius: 8px;
    border: 1px solid #1f2458;
    background: #1f2458;
    color: #fff;
  }

  .Desktop1 {
    width: 1920px;
    height: 1080px;
    position: relative;
    background-image: url("https://ibb.co/fx2BJrs");

    .Bgr2 {
      width: 1285px;
      height: 880px;
      left: 318px;
      top: 100px;
      position: absolute;
      background: #06092b;
      box-shadow: 0px 0px 100px rgba(255, 255, 255, 0.25);
      border-radius: 30px;
    }
    .Graph {
      height: 647px;
      left: 720px;
      top: 272px;
      position: absolute;

      .Main1 {
        width: 833px;
        height: 384px;
        left: 0px;
        top: 0px;
        position: absolute;
        background-color: rgba(255, 255, 255, 0);

        border-radius: 20px;
      }

      .Sub3 {
        width: 833px;
        height: 118px;
        left: 0px;
        top: 412px;
        position: absolute;
        background-color: rgba(255, 255, 255, 0);
        border-radius: 20px;
      }

      .Sub4 {
        width: 833px;
        height: 118px;
        left: 0px;
        top: 530px;
        position: absolute;
        background-color: rgba(255, 255, 255, 0);
        border-radius: 20px;
      }
    }

    .Climbing {
      left: 374px;
      top: 140px;
      position: absolute;
      color: white;
      font-size: 35px;
      font-family: Fugaz One;
      font-weight: 400;
      word-wrap: break-word;
    }

    .Scrollsample {
      width: 14px;
      height: 92px;
      left: 659px;
      top: 272px;
      position: absolute;
      background: #d9d9d9;
      border-radius: 20px;
    }

    .List {
      display: flex;
      flex-direction: column;
      // border: 1px solid red;
      height: 200%;
      overflow-y: auto;
      width: 268.47px;
      left: 374.22px;
      top: 272.1px;
      position: absolute;

      .In {
        width: 236.35px;
        height: 69.99px;
        left: 21.8px;
        top: 7.03px;
        position: absolute;

        .Chain {
          width: 100%;
          height: 45.89px;
          left: 33.27px;
          top: 13px;
          position: absolute;
          color: white;
          font-size: 16px;
          font-family: Inter;
          font-weight: 600;
          line-height: 18px;
          word-wrap: break-word;
        }

        .Per {
          width: 48.19px;
          height: 20.65px;
          left: 188.16px;
          top: 46.62px;
          position: absolute;
          color: #ff4b4b;
          font-size: 12px;
          font-family: Inter;
          font-weight: 600;
          line-height: 18px;
          word-wrap: break-word;
        }
        .Coinimg {
          width: 22.95px;
          height: 22.95px;
          left: 0px;
          top: 11.47px;
          position: absolute;
          background: #d9d9d9;
          border-radius: 9999px;
        }
        .Price {
          width: 193.9px;
          height: 32.12px;
          left: 1px;
          top: 45.86px;
          position: absolute;
          color: white;
          font-size: 16px;
          font-family: Inter;
          font-weight: 600;
          line-height: 18px;
          word-wrap: break-word;
        }
      }

      .CoinBox {
        cursor: pointer;
        margin-bottom: 10px;
        width: 268.47px;
        height: 91.79px;
        left: 0px;
        top: 0px;
        position: relative;
        background: #1f2458;
        border-radius: 20px;
        transition: background-color 0.3s ease;
      }

      .CoinBox:hover {
        background-color: #334190;
      }
    }

    .Variant3 {
      width: 149px;
      height: 39px;
      left: 1231px;
      top: 211px;
      position: absolute;
      justify-content: flex-start;
      align-items: flex-start;
      display: inline-flex;
      .Variantgraph {
        width: 268.47px;
        height: 91.79px;
        left: 80px;
        top: 0px;
        position: absolute;
      }
      .Varianttime {
        width: 268.47px;
        height: 91.79px;
        left: 210px;
        top: 0px;
        position: absolute;
      }
    }
    .Label {
      color: white;
      font-size: 14px;
      font-family: Noto;
      font-weight: 700;
      line-height: 18px;
      word-wrap: break-word;
    }

    .Assetdown {
      width: 24px;
      height: 24px;
      position: relative;

      .Vector {
        width: 11.15px;
        height: 6.55px;
        left: 6.43px;
        top: 8.43px;
        position: absolute;
        background: white;
      }
    }

    .Component11 {
      width: 150px;
      height: 40px;
      padding: 12px;
      background: #1f2458;
      border-radius: 8px;
      border: 1px #1f2458 solid;
      justify-content: flex-start;
      align-items: center;
      gap: 32px;
      display: flex;
    }
    .Component12 {
      width: 150px;
      height: 40px;
      left: -10px;
      padding: 12px;
      background: #1f2458;
      border-radius: 8px;
      border: 1px #1f2458 solid;
      justify-content: flex-start;
      align-items: center;
      gap: 32px;
      display: flex;
    }

    .Group17 {
      width: 64.54px;
      height: 29.02px;
      left: 385px;
      top: 219px;
      position: absolute;
      .Boxdrop {
        width: 268.47px;
        height: 91.79px;
        left: 0px;
        top: 0px;
        position: absolute;
      }
      .Rectangle12 {
        width: 90px;
        height: 36px;
        left: -8.5px;
        top: -0px;
        position: absolute;

        background: #ff0000;
        border-radius: 8px;
        .Main {
          width: 48.76px;
          height: 22.71px;
          left: 7.17px;
          top: 2.52px;
          position: absolute;
          color: white;
          font-size: 14px;
          font-family: Inter;
          font-weight: 700;
          line-height: 18px;
          word-wrap: break-word;
        }
      }
    }
  }
</style>
