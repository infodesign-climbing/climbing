<!-- YourMainComponent.svelte -->

<script lang="ts">
  import { type AssetInfo, type ChainInfo, type ProposalInfo } from '@src/lib';
  import { requestGet } from '@src/lib/requester';

  let akash: ChainInfo;
  let assets: AssetInfo;
  let proposals: ProposalInfo;

  const promiseChainInfoData = requestGet<ChainInfo>('/data/ChainInfo_final/info_akash.json').then((d) => {
    akash = d;
    return d;
  });

  const promiseAssetsData = requestGet<AssetInfo>('/data/Assets_final/info_akash.json').then((d) => {
    assets = d;
    return d;
  });

  const promiseProposalsData = requestGet<ProposalInfo>('/data/Proposals_final/proposals_akash.json').then((d) => {
    proposals = d;
    return d;
  });

</script>

<div>

  
  
  <div> ====== ChainInfo Data ====== </div>


  {#await promiseChainInfoData}
    <div>Loading Akash data...</div>
  {:then}
    <!-- Display Akash data -->
    <div>
      chain: {akash.data[0].chain}<br/>
      recordTime: {akash.data[0].recordTime}<br/>
      txs: {akash.data[0].txs}<br/>
      validators-active: {akash.data[0].validators.active}<br/>
      validators-total: {akash.data[0].validators.total}<br/>
      accounts_monthly: {akash.data[0].accounts_monthly}<br/>
      market_values: 
      {#if akash.data && akash.data[0] && akash.data[0].market_values}
        {#each akash.data[0].market_values as value, index (index)}
          <p>{value}</p>
        {/each}
      {:else}
        <p>Market values not available</p>
      {/if}
      tokens-bonded: {akash.data[0].tokens.bonded}<br/>
      tokens-supply: {akash.data[0].tokens.supply}<br/>
      tokens-community: {akash.data[0].tokens.community}<br/>
    </div>
  {:catch error}
    <div>{error.message}</div>
  {/await}

  
  <div> ====== Asset Data ====== </div>

  {#await promiseAssetsData}
    <div>Loading Assets data...</div>
  {:then}
    <!-- Display Assets data -->
    <div>
      displayDenom : {assets.data[0].assets[0].displayDenom}<br/>
      tokenImg : {assets.data[0].assets[0].tokenType}<br/>
      tokenType : {assets.data[0].assets[0].tokenType}<br/>
    </div>
  {:catch error}
    <div>{error.message}</div>
  {/await}



  <div> ====== Proposals Data ====== </div>


  {#await promiseProposalsData}
    <div>Loading Proposals data...</div>
  {:then}
    <!-- Display Proposals data -->
    <div>
      title : {proposals.data[0].title}<br/>
      voting_start_time : {proposals.data[0].voting_start_time}<br/>
      voting_end_time : {proposals.data[0].voting_end_time}<br/>
      voteMeta-Yes: {proposals.data[0].voteMeta.yes}<br/>
      voteMeta-no: {proposals.data[0].voteMeta.no}<br/>
      voteMeta-abstain: {proposals.data[0].voteMeta.abstain}<br/>
  
    </div>
  {:catch error}
    <div>{error.message}</div>
  {/await}
</div>
