const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
              <img src="/images/minion-shocked.jpg" alt="minion" />
              <div>
              Photo by <a href="https://unsplash.com/@justinlim?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Justin Lim</a> on <a href="https://unsplash.com/photos/two-minions-character-figure-on-red-table-tloFnD-7EpI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
              </div>
              </div>
          
          </main>
      </Def>
    )
  }
  

module.exports = error404