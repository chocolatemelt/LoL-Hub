const rp = require('request-promise');
const cheerio = require('cheerio');
const cheerioTableParser = require('cheerio-tableparser');
const fs = require('fs');

const url = 'https://www.reddit.com/r/summonerschool/wiki/101/streamers';

rp(url)
  .then(function(html){
    $ = cheerio.load(html);
    cheerioTableParser($);
    let data = $("table").parsetable(true,true,true)

    let streamers = {
      'streamers': []
    }
    for (let i = 1; i < data[0].length; i++) {
      streamers.streamers.push({
        'name': data[0][i],
        'role': data[1][i]
      });
    }

    fs.writeFileSync('../data/streamers.json', JSON.stringify(streamers, null, 4), (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('File has been created');
    })

  })
  .catch(function(err){
    console.log(err);
  });