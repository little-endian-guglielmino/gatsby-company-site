const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    user: {
        name: 'Fabrizio Guglielmino',
        email: 'guglielmino@gmail.com'
      },
    message: 'Auto-generated commit from gh-pages script',
    repo: 'git@github.com:little-endian-guglielmino/little-endian-guglielmino.github.io.git',
  },
  (err) => {
    if(!err) {
      console.log(`Deploy done sucessfully`);
    } else {
      console.log(`Deploy error ${err}`);
    }
  }
)