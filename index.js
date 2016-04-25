const dns = require('dns');
const os = require('os');

dns.lookup('nodejs.org', (err, addresses, family) => {
  console.log('addresses:', addresses);
});


dns.resolve4('nodejs.org', (err, addresses) => {
  if (err) throw err;

  console.log(`addresses: ${JSON.stringify(addresses)}`);

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
    });
  });
});

console.log(os.cpus());
console.log(os.tmpdir());
console.log(os.type());