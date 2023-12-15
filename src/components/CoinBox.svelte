
<script lang="ts">
     import { promiseCosmosData, promiseCosmosInfoData } from "@src/lib/datafetch";
     export let chain:string;
     export let percentage:any;
     export let tokenImg:string;
     export let price:any;
   </script>

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
</style>
   
<div class="Rectangle11">
     {#await Promise.all([promiseCosmosInfoData, promiseCosmosData])}
       <div>Loading data...</div>
     {:then cosmosAsset}
       <!-- 동적으로 설정된 인덱스를 사용 -->
       <div class="Chain">{(cosmosAsset.data[0].assets[{number}].displayDenom).toUpperCase()}</div>
       <div class="Per">60.4%</div>
       <img class="Coinimg" src="{cosmosAsset.data[0].assets[{number}].tokenImg}" alt="Token Image">
       <div class="Price">0.998425</div>
     {:catch error}
       <div>{error.message}</div>
     {/await}
   </div>
