import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const getFirstPartOfPath = pathname => {
  const parts = pathname.split("/");
  return parts.length > 0 ? `/${parts[1]}` : "/";
};

const renderNavItem = (entry, activePath) => {
  const cssClasses = [
    "btn",
    "btn-link",
    activePath === entry.link ? "btn-link-active" : ""
  ];

  return (
    <Link to={entry.link} className={cssClasses.join(" ")} key={entry.link}>
      {entry.icon ? <i className={`icon icon-${entry.icon}`} /> : null}
      {entry.text}
    </Link>
  );
};

const startSearch = (textboxRef, transitionTo) => {
  const term = textboxRef.value;

  if (term.length > 0) {
    transitionTo(`/search/${term}`);
  }
};

const Navigation = ({ history, location, items }) => {
  const { push: transitionTo } = history;
  const activePath = getFirstPartOfPath(location.pathname);
  let textboxRef = null;

  /* eslint-disable no-return-assign */
  return (
    <header className="navbar">
      <section className="navbar-section">
        {items.map(entry => renderNavItem(entry, activePath))}
      </section>
      <section className="navbar-section">
        <div className="input-group input-inline">
          <input
            className="form-input"
            type="text"
            placeholder="search"
            ref={ref => (textboxRef = ref)}
          />
          <button
            className="btn btn-primary input-group-btn"
            onClick={() => startSearch(textboxRef, transitionTo)}
          >
            Search
          </button>
        </div>
      </section>
    </header>
  );
  /* eslint-enable no-return-assign */
};

Navigation.propTypes = {
  items: PropTypes.array
};

Navigation.defaultProps = {
  items: []
};

export default withRouter(Navigation);
