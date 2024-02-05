const React = require('react')
const Def = require('../default')

function comment_form (data) {
    return (
        <Def>
            <main>
                <h1>Comments</h1>
                <form method ="POST" action={`/places/${data}?_METHOD=PUT`}>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input className="form-control" id="author" name="author" required />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea className="form-control" id="content" name="content" require/>
                </div>
                <div className="form-group">
                    <label htmlFor="starRating">Star Rating</label>
                    <input className="form-control" id="starRating" name="starRating" step="0.5" required />
                </div>
                <div className="form-group">
                    <label htmlFor="rant">Rant</label>
                    <input className="form-control" id="rant" name="rant" required />
                </div>
                    <button type="submit">Submit</button>
                </form>
            </main>
        </Def>
    )
}





module.exports = comment_form