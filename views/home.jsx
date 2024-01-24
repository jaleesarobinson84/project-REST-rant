const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/public/images/pancakes-and-fruit.jpg" alt="pancake" />
                <div>
                Photo by <a href="https://unsplash.com/@moniqa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Monika Grabkowska</a> on <a href="https://unsplash.com/photos/pancake-with-orange-and-blueberries-beside-scattered-chocolate-and-coffee-beans-P1aohbiT-EY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </div>
        </div>
            
        <a href="/places">
    <button className="btn-primary">Places Page</button>

</a>
</main>
        </Def>
    )
}


module.exports = home