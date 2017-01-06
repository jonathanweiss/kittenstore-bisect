import React from 'react';
import { Link } from 'react-router';

const renderNavItem = (entry, activePath) => {
  const cssClasses = [
    'btn',
    'btn-link',
    activePath === entry.link ? 'btn-link-active' : '',
  ];

  return (
    <Link to={entry.link} className={cssClasses.join(' ')} key={entry.link}>
      {entry.isHomeLink ? <i className="icon icon-home" /> : null}
      {entry.text}
    </Link>
  );
};

let textboxRef = null;
const startSearch = (transitionTo) => {
  const term = textboxRef.value;

  if (term.length > 0) {
    transitionTo(`/search/${term}`);
  }
};

const Navigation = (props, context) => {
  const { activePath } = props;
  const { transitionTo } = context.router;

  /* eslint-disable no-return-assign */
  return (
    <header className="navbar">
      <section className="navbar-section">
        { props.items.map(entry => renderNavItem(entry, activePath)) }
      </section>
      <section className="navbar-section">
        <div className="input-group input-inline">
          <input className="form-input" type="text" placeholder="search" ref={ref => textboxRef = ref} />
          <button className="btn btn-primary input-group-btn" onClick={() => startSearch(transitionTo)}>Search</button>
        </div>
      </section>
    </header>
  );
  /* eslint-enable no-return-assign */
};

Navigation.propTypes = {
  items: React.PropTypes.array,
  activePath: React.PropTypes.string,
};

Navigation.contextTypes = {
  router: React.PropTypes.object,
};

export default Navigation;
