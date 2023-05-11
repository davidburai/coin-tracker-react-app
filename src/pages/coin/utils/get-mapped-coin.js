/**
 * @typedef CoinApiResponse
 * 
 * @type {Object}
 * @property {string}   name - Title of the coin
 * @property {string}   image - The URI of the image of the coin
 * @property {string}   symbol - Short version of the coin
 * @property {string}   hashing_algorithm - Algorithm used for hashing
 * @property {Object}   description - A map containing a longer description about the coin in different languages
 * @property {Object}   market_data - Object containing a lot of information about different market details
 * @property {Object}   links - Containing various type of links related to the coin
 * @property {string}   genesis_date - Date of the first (genesis) block produced
 */

/**
 * @typedef MappedCoin
 * 
 * @type {Object}
 * @property {string}   name - Title of the coin
 * @property {string}   image - The URI of the image of the coin
 * @property {string}   symbol - Short version of the coin
 * @property {string}   hashingAlgorithm - Algorithm used for hashing
 * @property {Object}   description - A map containing a longer description about the coin in different languages
 * @property {number}   marketCap - Market capitalization of the coin
 * @property {String[]} homePageLinks - Links related to the webpages of the coin
 * @property {string}   genesisDate - Date of the first (genesis) block produced
 */

/**
 * Mapper function for reponse of the API call for a single coin
 * @param {CoinApiResponse} coinApiResponse 
 * @returns {MappedCoin}
 */
export const getMappedCoin = (coinApiResponse) => {
    const { name, image, symbol, hashing_algorithm, description, market_data, links, genesis_date } = coinApiResponse;

    return {
        name,
        image,
        symbol,
        hashAlgorithm: hashing_algorithm,
        description: description['en'],
        marketCap: market_data['market_cap']['eur'],
        homePageLinks: links['homepage'],
        genesisDate: genesis_date
    }
};
