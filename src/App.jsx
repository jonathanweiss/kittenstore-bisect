import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router';
import queryString from 'query-string';

import Homepage from './components/Homepage';
import Error404 from './components/Error404';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Category from './components/Category';
import Cart from './components/Cart';
import List from './components/List';
import Detail from './components/Detail';
import SearchResult from './components/SearchResult';
import Quotes from './components/Quotes';

const App = (props, context) => {
  const { categories, products, navigationData } = props.data;
  const { cats, catfood } = products;

  return (
    <div>
      <Navigation items={navigationData} />

      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/quotes" component={Quotes} />

        <Route exact path="/" render={() => <Homepage amountOfProducts={3} products={cats} />} />
        <Route exact path="/catfood" render={() => <Category desc={categories.catfood.desc} items={categories.catfood.items} />} />
        <Route exact path="/cats" render={() => <Category desc={categories.cats.desc} items={categories.cats.items} />} />

        <Route
          exact
          path="/cats/:breed"
          render={({ match, location }) => {
            const query = queryString.parse(location.search);
            const sortedBy = query ? query.sortedBy : '';
            const sortDirection = query ? query.sortDirection : '';

            return (
              <List
                slug={match.params.breed}
                sortedBy={sortedBy}
                sortDirection={sortDirection}
                pathname={location.pathname}
                data={cats}
                type="cats"
              />
            );
          }}
        />

        <Route
          exact
          path="/catfood/:brand"
          render={({ match }) => (<List type="catfood" slug={match.params.brand} data={catfood} sortedBy="price" sortDirection="up" />)}
        />

        <Route path="/cats/:breed/:catName" render={({ match }) => <Detail slug={match.params.catName} data={cats} displayRelated />} />

        <Route path="/search/:term" render={({ match }) => <SearchResult term={match.params.term} data={cats} />} />

        <Route component={Error404} />
      </Switch>
    </div>
  );
};

App.propTypes = {
  data: PropTypes.object,
};

export default App;
