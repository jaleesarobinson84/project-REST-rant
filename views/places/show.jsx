const React = require('react')
const Def = require('../default')

function show (data) {
    const place = data.place;
    return (
        <Def>
          <main>
            <h1>{place.name}</h1>
            
            {/* Displaying city and state */}
            <p>City:Denver</p>
            <p>State:CO</p>
    
            {/* Displaying cuisines as a list */}
            <div>
              <h4>Cuisines:</h4>
              <ul>
                {place.cuisines.map((cuisine, index) => (
                  <li key={index}>{cuisine}</li>
                ))}
              </ul>
            </div>
    
            {/* Displaying the image */}
            <img src='/images/bbq-plate.jpg' alt='BBQ' />

            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                Edit 
            </a>
            <form method="POST" action={`/places/${data.id} ?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>
          </main>
        </Def>
      );
    }
    
    module.exports = Show;