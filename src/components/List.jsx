import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const headers = ["Name", "Age", "Weight", "Gender", "Price"];

const List = props => {
  const { slug, type, sortedBy, sortDirection, pathname } = props;
  let products = props.data.filter(product => product.breedSlug === slug);

  const renderHeader = text => {
    const value = text.toLowerCase();
    const arrowName = sortDirection === "desc" ? "down" : "up";
    let direction;

    if (value === sortedBy) {
      direction = sortDirection === "asc" ? "desc" : "asc";
    } else {
      direction = "asc";
    }

    return (
      <th key={text}>
        <Link to={`?sortedBy=${value}&sortDirection=${direction}`}>{text}</Link>
        {text.toLowerCase() === sortedBy ? (
          <span className={`icon icon-arrow-${direction}2`} />
        ) : null}
        {value === sortedBy ? (
          <span className={`icon icon-arrow-${arrowName}2`} />
        ) : null}
      </th>
    );
  };

  const renderProducts = () => (
    <div className="columns">
      <div className="column col-12">
        <h2>
          All &ldquo;
          {products[0].breed}
          &rdquo;
        </h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              {headers.map(text =>
                renderHeader(
                  text,
                  sortedBy,
                  sortDirection === "desc" ? "down" : "up"
                )
              )}
            </tr>
          </thead>
          <tbody>
            {products.map(product => {
              const { age, weight, gender, price } = product;

              return (
                <tr key={`${product.slug}`}>
                  <td>
                    <Link to={`${pathname}/${product.slug}`}>
                      {product.name}
                    </Link>
                  </td>
                  <td>{age} weeks</td>
                  <td>{weight} oz</td>
                  <td>{gender === "male" ? "♂" : " ♀"}</td>
                  <td>${price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderEmpty = () => (
    <div className="columns">
      <div className="column col-12">
        <section className="empty">
          <i className="icon icon-baffled" />
          <p className="empty-title">
            No product found for category &ldquo;
            {slug}
            &rdquo;.
          </p>
          <p className="empty-meta">Try a different category.</p>
          <Link to={`/${type}`}>
            <button className="empty-action btn btn-primary">
              Browse for products
            </button>
          </Link>
        </section>
      </div>
    </div>
  );

  if (sortedBy) {
    products = products.sort((a, b) => {
      const trueValue = sortDirection === "desc" ? -1 : 1;
      const falseValue = sortDirection === "desc" ? 1 : -1;

      return a[props.sortedBy] > b[props.sortedBy] ? trueValue : falseValue;
    });
  }

  return products.length ? renderProducts() : renderEmpty();
};

List.propTypes = {
  slug: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  pathname: PropTypes.string,
  sortedBy: PropTypes.string,
  sortDirection: PropTypes.string
};

export default List;
