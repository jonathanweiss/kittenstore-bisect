import PropTypes from "prop-types";
import React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";

import { getRandomQuote } from "../tools/quotes";

const Detail = (props, context) => {
  const quote = getRandomQuote();
  const { slug, data, showDetails, displayRelated } = props;

  const catIndex = data.findIndex(cat => cat.slug === slug);
  const catData = data[catIndex];
  const { age, gender, price, weight } = catData;

  const renderMiniView = () => {
    const linkTarget = context.history
      ? [...context.history.location.pathname.split("/")]
      : [];
    linkTarget.pop();
    linkTarget.push(catData.slug);

    const link = showDetails ? (
      <span>{catData.name}</span>
    ) : (
      <Link to={linkTarget.join("/")}>{catData.name}</Link>
    );

    return (
      <div>
        <h4 className="card-title">{link}</h4>
        <h6 className="card-meta">{catData.breed}</h6>
        <img
          width="200"
          height="200"
          alt={catData.name}
          src={`https://placekitten.com/200/200?image=${Math.round(
            Math.random() * 16
          )}`}
        />
      </div>
    );
  };

  const renderDetailView = () => (
    <div>
      <div className="columns">
        <div className="column col-12">
          <div className="card">
            <div className="card-header">{renderMiniView()}</div>
            <div className="card-body">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>Age</td>
                    <td>{age} weeks</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>{gender === "male" ? "♂" : " ♀"}</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>
                      {weight}
                      oz
                    </td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>
                      <span
                        className={`label ${
                          price < 100 ? "label-success" : "label-danger"
                        }`}
                      >
                        ${price}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="pt-10">
                <a href="/" className="btn btn-primary">
                  Buy
                </a>
                <a href="/" className="btn btn-link">
                  Share
                </a>
              </p>
            </div>
            <div className="card-footer">
              <blockquote>
                <p>{quote.text}</p>
                <cite>&ndash; {quote.person}</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      {displayRelated ? (
        <Route
          path="/cats/:breed/:catName"
          render={() => {
            const relatedProducts = data
              .filter(cat => cat.breed === catData.breed)
              .filter(cat => cat.slug !== catData.slug);

            return relatedProducts.length > 2 ? (
              <div>
                <h3>Related products</h3>
                <div className="columns">
                  <Detail
                    slug={relatedProducts[0].slug}
                    data={data}
                    showDetails={false}
                  />
                  <Detail
                    slug={relatedProducts[1].slug}
                    data={data}
                    showDetails={false}
                  />
                  <Detail
                    slug={relatedProducts[2].slug}
                    data={data}
                    showDetails={false}
                  />
                </div>
              </div>
            ) : null;
          }}
        />
      ) : null}
    </div>
  );

  return showDetails ? (
    renderDetailView()
  ) : (
    <div className="column col-4">{renderMiniView()}</div>
  );
};

Detail.propTypes = {
  slug: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  displayRelated: PropTypes.bool,
  showDetails: PropTypes.bool
};

Detail.contextTypes = {
  history: PropTypes.object
};

Detail.defaultProps = {
  displayRelated: false,
  showDetails: true
};

export default Detail;
