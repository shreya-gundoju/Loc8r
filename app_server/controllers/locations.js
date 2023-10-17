const homelist = (req, res) => {
  res.render('locations-list',
    {
      title: 'Blog It - a place to write your thoughts',
      pageHeader: {
        title: 'Blog It',
        strapLine: ' Where Your Story Begins!'
      },
      sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
      locations: [
        {
          name: 'Unraveling the Threads of Patriarchy',
          address: '125 High Street, Reading, RG6 1PS',
          rating: 3,
          facilities: ['Hot drinks', 'Food', 'Premium wifi'],
          distance: '100m'
        },
        {
          name: 'Cafe Hero',
          address: '125 High Street, Reading, RG6 1PS',
          rating: 4,
          facilities: ['Hot drinks', 'Food', 'Premium wifi'],
          distance: '200m'
        },
        {
          name: 'Burger Queen',
          address: '125 High Street, Reading, RG6 1PS',
          rating: 2,
          facilities: ['Food', 'Premium wifi'],
          distance: '250m'
        }
      ]
    }
  );
};

const locationInfo = (req, res) => {
  res.render('location-info',
    {
      title: 'Unraveling the Threads of Patriarchy',
       pageHeader: {
        title: 'Blog It',
      },
      location: {
        name: 'Starcups',
        address: '125 High Street, Reading, RG6 1PS',
        
          }
        reviews: [
          {
            author: 'Pankai Tripati',
            rating: 5,
            timestamp: '16 July 2013',
            reviewText: 'What a great Blog. Patriarchy still exist in 2023 '
          },
          {
            author: 'Manish Malhothra',
            rating: 3,
            timestamp: '16 June 2013',
            reviewText:'I truly acknowledge my privilage now.'
          }
        ]
      }
    }
  );
};

const addReview = (req, res) => {
  res.render('location-review-form',
    {
      title: 'Review Starcups on Loc8r' ,
      pageHeader: { title: 'Review Starcups' }
    }
  );
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};
