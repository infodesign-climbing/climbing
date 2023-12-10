<script lang="ts">
  import { type ChainInfo } from '@src/lib';
  import { requestGet } from '@src/lib/requester';

  let data: ChainInfo;

  const promiseData = requestGet<ChainInfo>('/data/ChainInfo_final/info_akash.json').then((d) => {
    data = d;
    return d;
  });
</script>

<div>
  {#await promiseData}
    <div>Loading...</div>
  {:then data}
  {data.data[0].chain}
  {data.data[0].recordTime}
  {data.data[0].txs}
  {data.data[0].validators.active}
  {data.data[0].validators.total}
    {#if data.data && data.data[0] && data.data[0].market_values}
      {#each data.data[0].market_values as value, index (index)}
        <p>{index}: {value}</p>
      {/each}
    {:else}
      <p>Market values not available</p>
    {/if}
  {:catch error}
    <div>{error.message}</div>
  {/await}
</div>
