const util = require('util');
const dns = require('dns');

const dnsLookup = util.promisify(dns.lookup);

exports.lookup = async (domainName) => {
  try {
    const result = await dnsLookup(domainName)
    return result
  } catch (err) {
    return null
  }
}
