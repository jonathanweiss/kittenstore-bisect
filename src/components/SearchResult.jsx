import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const List = props => {
  const term = props.term;
  const cats = props.data.filter(cat => cat.name.indexOf(term) !== -1);

  const renderEmpty = () => (
    <div className="columns">
      <div className="column col-12">
        <section className="empty">
          <i className="icon icon-search" />
          <p className="empty-title">
            No results for search term &ldquo;
            {term}
            &rdquo;
          </p>
          <p className="empty-meta">Try something different</p>
          <div className="input-group input-inline">
            <input className="form-input" type="text" placeholder="search" />
            <button className="btn btn-primary input-group-btn">Search</button>
          </div>
        </section>
      </div>
    </div>
  );

  const renderList = () => (
    <div className="columns">
      <div className="column col-12">
        <h2>
          Search results for &ldquo;
          {term}
          &rdquo;
        </h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Race</th>
            </tr>
          </thead>
          <tbody>
            {cats.map(cat => {
              const nameParts = cat.name.split(term);

              return (
                <tr key={cat.slug}>
                  <td>
                    <Link to={`/cats/${cat.breedSlug}/${cat.slug}`}>
                      {nameParts[0]}
                      <span className="highlight">{term}</span>
                      {nameParts[1]}
                    </Link>
                  </td>
                  <td>{cat.breed}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  return cats.length ? renderList() : renderEmpty();
};

List.propTypes = {
  term: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default List;
