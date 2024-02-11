const React = require('react')

function def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="/css/style.css"></link>
                {/* BOOTSTRAP CDN LINK (long) */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = def