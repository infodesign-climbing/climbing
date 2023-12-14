<script lang="ts">
  import { type ChainInfo } from "@src/lib";
  import { type IChartApi, createChart } from "lightweight-charts";
  import { requestGet } from "@src/lib/requester";
  import moment from "moment";
  import _ from "lodash";
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from "flowbite-svelte"; //import

  let data: ChainInfo;
  const promiseData = requestGet<ChainInfo>("/data/archway.json").then((d) => {
    data = d;
    return d;
  }); // 상수? requestGet 데이터요청 // .then()은 프로미스가 이행될 때 실행 //함수 d, data = d, 함수 d를 리턴
  let eleLineGraph: HTMLDivElement; //  let a : b 로 타입 정의
  let eleLineGraphWidth: number;
  let eleLineGraphHeight: number;
  let eleLineGraph2: HTMLDivElement; //  let a : b 로 타입 정의
  let eleLineGraphWidth2: number;
  let eleLineGraphHeight2: number;
  let eleLineGraph3: HTMLDivElement; //  let a : b 로 타입 정의
  let eleLineGraphWidth3: number;
  let eleLineGraphHeight3: number;
  let chart: IChartApi;
  let chart2: IChartApi;
  let chart3: IChartApi;

  var darkTheme = {
    chart: {
      layout: {
        background: {
          type: "solid",
          color: "#2B2B43",
        },
        lineColor: "#2B2B43",
        textColor: "#D9D9D9",
      },
      watermark: {
        color: "rgba(0, 0, 0, 0)",
      },
      crosshair: {
        color: "#758696",
      },
      grid: {
        vertLines: {
          color: "#2B2B43",
        },
        horzLines: {
          color: "#363C4E",
        },
      },
    },
    series: {
      topColor: "rgba(32, 226, 47, 0.56)",
      bottomColor: "rgba(32, 226, 47, 0.04)",
      lineColor: "rgba(32, 226, 47, 1)",
    },
  };

  $: {
    // 반응성 구문?
    if (eleLineGraph && data) {
      chart && chart.remove();
      chart = createChart(eleLineGraph, {
        width: eleLineGraphWidth,
        height: eleLineGraphHeight,
      }); //

      const lineSeries = chart.addLineSeries();
      const series = _(data.data) // chaininfo.data
        .map((unit) => {
          const time = moment(unit.createdAt._seconds * 1000).format(
            "YYYY-MM-DD"
          );
          const value = unit.unit.market.values[0]; // chaininfo(archway).unit.market.value
          return {
            time,
            value: value || 0,
          };
        })
        .uniqBy("time")
        .orderBy("time", "asc")
        .value();

      lineSeries.setData(series);
    }
  }
  $: {
    // 반응성 구문?
    if (eleLineGraph2 && data) {
      chart2 && chart2.remove();
      chart2 = createChart(eleLineGraph2, {
        width: eleLineGraphWidth2,
        height: eleLineGraphHeight2,
      }); //
      const lineSeries = chart2.addLineSeries();
      const series = _(data.data) // chaininfo.data
        .map((unit) => {
          const time = moment(unit.createdAt._seconds * 1000).format(
            "YYYY-MM-DD"
          );
          const value = unit.unit.market.values[0]; // chaininfo(archway).unit.market.value
          return {
            time,
            value: value || 0,
          };
        })
        .uniqBy("time")
        .orderBy("time", "asc")
        .value();

      lineSeries.setData(series);
    }
  }
  $: {
    // 반응성 구문?
    if (eleLineGraph3 && data) {
      chart3 && chart3.remove();
      chart3 = createChart(eleLineGraph3, {
        width: eleLineGraphWidth3,
        height: eleLineGraphHeight3,
      }); //
      const lineSeries = chart3.addLineSeries();
      const series = _(data.data) // chaininfo.data
        .map((unit) => {
          const time = moment(unit.createdAt._seconds * 1000).format(
            "YYYY-MM-DD"
          );
          const value = unit.unit.market.values[0]; // chaininfo(archway).unit.market.value
          return {
            time,
            value: value || 0,
          };
        })
        .uniqBy("time")
        .orderBy("time", "asc")
        .value();

      lineSeries.setData(series);
    }
  }
</script>

<body>
  <div class="bgr1">
    <div class="content-wrapper">
      <div class="left-content">
        <!-- 왼쪽 콘텐츠 추가 -->

        <select name="sort">
          <option disabled selected>정렬</option>
          <option value="1day">오름차순</option>
          <option value="1month">내림차순</option>
          <option value="1year">가격변동</option>
        </select>

        <div class="choices-container">
          <div class="choice">
            <div class="top-section">
              <img
                class="logo"
                src="https://example.com/logo1.png"
                alt="Logo 1"
              />
              <div class="name">BTC</div>
              <div class="percent">+20%</div>
            </div>
            <div class="bottom-section">
              <div class="price">100,000,000$</div>
            </div>
          </div>

          <div class="choice">
            <div class="top-section">
              <img
                class="logo"
                src="https://example.com/logo1.png"
                alt="Logo 1"
              />
              <div class="name">BTC</div>
              <div class="percent">+20%</div>
            </div>
            <div class="bottom-section">
              <div class="price">100,000,000$</div>
            </div>
          </div>

          <div class="choice">
            <div class="top-section">
              <img
                class="logo"
                src="https://example.com/logo1.png"
                alt="Logo 1"
              />
              <div class="name">BTC</div>
              <div class="percent">+20%</div>
            </div>
            <div class="bottom-section">
              <div class="price">100,000,000$</div>
            </div>
          </div>

          <div class="choice">
            <div class="top-section">
              <img
                class="logo"
                src="https://example.com/logo1.png"
                alt="Logo 1"
              />
              <div class="name">BTC</div>
              <div class="percent">+20%</div>
            </div>
            <div class="bottom-section">
              <div class="price">100,000,000$</div>
            </div>
          </div>

          <div class="choice">
            <div class="top-section">
              <img
                class="logo"
                src="https://example.com/logo1.png"
                alt="Logo 1"
              />
              <div class="name">BTC</div>
              <div class="percent">+20%</div>
            </div>
            <div class="bottom-section">
              <div class="price">100,000,000$</div>
            </div>
          </div>

          <div class="choice">
            <div class="top-section">
              <img
                class="logo"
                src="https://example.com/logo1.png"
                alt="Logo 1"
              />
              <div class="name">BTC</div>
              <div class="percent">+20%</div>
            </div>
            <div class="bottom-section">
              <div class="price">100,000,000$</div>
            </div>
          </div>

          <div class="choice">
            <div class="top-section">
              <img
                class="logo"
                src="https://example.com/logo1.png"
                alt="Logo 1"
              />
              <div class="name">BTC</div>
              <div class="percent">+20%</div>
            </div>
            <div class="bottom-section">
              <div class="price">100,000,000$</div>
            </div>
          </div>

          <div class="choice">
            <div class="top-section">
              <img
                class="logo"
                src="https://example.com/logo1.png"
                alt="Logo 1"
              />
              <div class="name">BTC</div>
              <div class="percent">+20%</div>
            </div>
            <div class="bottom-section">
              <div class="price">100,000,000$</div>
            </div>
          </div>

          <div class="choice">
            <div class="top-section">
              <img
                class="logo"
                src="https://example.com/logo1.png"
                alt="Logo 1"
              />
              <div class="name">BTC</div>
              <div class="percent">+20%</div>
            </div>
            <div class="bottom-section">
              <div class="price">100,000,000$</div>
            </div>
          </div>
        </div>
      </div>

      <div class="right-content">
        <!-- 오른쪽 콘텐츠 추가 -->

        <div class="select-container">
          <select name="graph" class="graph">
            <option disabled selected>그래프 수</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <select name="time">
            <option disabled selected>시간</option>
            <option value="1day">1일</option>
            <option value="1month">1달</option>
            <option value="1year">1년</option>
          </select>
        </div>

        <div class="box-container">
          <div
            class="box1"
            bind:this={eleLineGraph}
            bind:clientWidth={eleLineGraphWidth}
            bind:clientHeight={eleLineGraphHeight}
          ></div>
          <div
            class="box2"
            bind:this={eleLineGraph2}
            bind:clientWidth={eleLineGraphWidth2}
            bind:clientHeight={eleLineGraphHeight2}
          ></div>
          <div
            class="box3"
            bind:this={eleLineGraph3}
            bind:clientWidth={eleLineGraphWidth3}
            bind:clientHeight={eleLineGraphHeight3}
          ></div>
        </div>
        <img class="logo" src="https://ifh.cc/g/5oXZRJ.png" alt="logo" />
      </div>
    </div>
  </div>
</body>

<style lang="scss">
  /* Place your CSS styles in this file */

  @import url("https://fonts.googleapis.com/css2?family=Fugaz+One&family=Noto+Sans+KR&display=swap");
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");

  body {
    height: 100vh;
    width: 100vw;
    background: url("https://ifh.cc/g/7ZZRzn.jpg") no-repeat center;
    background-size: cover;
  }

  .bgr1 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 80%;
    height: 90%;
    background-color: #06092b;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    margin: 50px auto;
  }

  .content-wrapper {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
  }

  .left-content,
  .right-content {
    height: 80%;
    box-sizing: border-box;
  }

  .left-content {
    background-color: aqua;
    margin: 92px 10px 30px 40px;
    display: flex;

    align-items: flex-start; /* 수정: 상단 정렬을 위해 */
    justify-content: flex-start; /* 수정: 상단 정렬을 위해 */
  }

  .left-content select {
    display: inline-block; /* 수정: 블록에서 인라인으로 변경 */
    width: calc(100% - 20px);
    margin-bottom: 10px;
    box-sizing: border-box;
    height: 36px; /* 추가: 높이 조절 */
    padding: 0; /* 추가: 내부 간격 제거 */
  }
  .left-content select[name="sort"] {
    width: 104px;
    height: 36px;
    padding: 8px;
  }

  .choices-container {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 70vh;
    width: flex;
    padding: 20px;
    box-sizing: border-box;
  }

  .choice {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 170px;
    margin-bottom: 10px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .choice:hover {
    background-color: #f0f0f0;
  }
  .top-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .logo {
    width: 10px;
    height: 10px;
    margin-bottom: 10px;
    flex: 1;
  }

  .name {
    font-weight: bold;
    margin-bottom: 5px;
    flex: 1;
  }

  .percent {
    color: green;
    margin-bottom: 5px;
    flex: 1;
  }

  .price {
    color: blue;
  }

  .select-container {
    margin-bottom: -10px; /* "그래프 수" select에만 10px 마진 추가 */
    align-self: flex-end; /* 우측 상단 정렬 */
  }

  .right-content {
    flex: 4;
    background-color: red;
    margin: 92px 40px 30px 10px;
    display: flex;
    flex-direction: column; /* 세로로 정렬 */
    justify-content: flex-end; /* 하단 정렬 */
    align-items: center; /* 중앙 정렬 */
  }

  .box-container {
    display: flex;
    flex-direction: column; /* 세로로 정렬 */
    align-items: center; /* 중앙 정렬 */
    margin-top: 20px; /* .select-container와의 간격 조절 */
    height: 100%; /* 부모인 .right-content의 높이에 맞추기 */
    width: 100%; /* 부모인 .right-content의 가로 크기에 맞추기 */
  }

  .right-content .box1 {
    flex: 6; /* 균일한 가로 사이즈 및 세로 공간 분배 */
    width: 100%; /* 최대 가로 사이즈로 설정 */
    max-width: 100%; /* 가로 범위를 100%로 제한 */
  }
  .right-content .box2 {
    flex: 2; /* 균일한 가로 사이즈 및 세로 공간 분배 */
    width: 100%; /* 최대 가로 사이즈로 설정 */
    max-width: 100%; /* 가로 범위를 100%로 제한 */
  }
  .right-content .box3 {
    flex: 2; /* 균일한 가로 사이즈 및 세로 공간 분배 */
    width: 100%; /* 최대 가로 사이즈로 설정 */
    max-width: 100%; /* 가로 범위를 100%로 제한 */
  }

  .right-content select.graph {
    margin-right: 10px; /* "그래프 수" select에만 20px 마진 추가 */
  }

  .right-content .box1 {
    background-color: orange;
  }

  .right-content .box2 {
    background-color: yellow;
  }

  .right-content .box3 {
    background-color: blue;
  }

  .logo {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 130px;
    height: auto;
    margin-top: 10px;
    margin-bottom: 40px;
    margin-left: 25px;
  }

  select {
    display: inline-block;
    width: 104px;
    height: 36px;
    padding: 8px;
    align-items: center;
    outline: 0;
    border-radius: 8px;
    border: 1px solid #1f2458;
    background: #1f2458;
    color: #fff;
  }

  select option {
    color: #fff;
  }
  h1 {
    text-align: center;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: normal;
  }
</style>
