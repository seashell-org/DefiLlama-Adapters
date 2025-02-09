const { sumTokensExport } = require("../helper/unwrapLPs");

const STAKE_PRIZE_POOL_CONTRACT = "0x82D24dD5041A3Eb942ccA68B319F1fDa9EB0c604";
const ST_ETH_TOKEN_CONTRACT = "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84";

module.exports = {
  methodology:
    "TVL is counted as the amount of all stETH on the StakePrizePool contract. stETH that is not distributed yet are also counting because they will be distributed in the end of the current draw.",
  ethereum: {
    tvl: sumTokensExport({ owners: [STAKE_PRIZE_POOL_CONTRACT], tokens: [ST_ETH_TOKEN_CONTRACT]}),
  },
};
