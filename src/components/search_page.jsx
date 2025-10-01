import { useEffect, useRef } from "react";
import { Footer } from "./footer";
import { Sidebar } from "./recipe/sidebar";
import { Subscribe } from "./subscribe";
import { useDispatch, useSelector } from "react-redux";
import { searchThunk } from "../redux/search";
import { extractMainIngredient } from "../utils/dataExtraction";
import img1 from "../assets/ForkKnife.png";
import img2 from "../assets/Timer.png";
import "../style/recipes.scss";
import { getPageNumbers } from "../utils/navigate";
import { Autocomplete } from "./searchbar";
import { setCurrentPage } from "../redux/search";
import { dishClick } from "../utils/dishClick";
import { useNavigate } from "react-router-dom";

export const SearchPage = () => {
  const { data, currentPage, loading } = useSelector((state) => state.search);
  const recipe = useSelector((state) => state.recipe);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hasRequested = useRef(false);
  const itemsPerPage = 6; // Show 6 items per page

  const ss = ["pie", "shrimp", "fish"];

  function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  useEffect(() => {
    if (!data && !hasRequested.current) {
      hasRequested.current = true;
      dispatch(searchThunk(getRandomElement(ss)));
    }
  }, [data, dispatch]);

  // Calculate total pages
  const totalItems = data?.results?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      dispatch(setCurrentPage(pageNumber));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Get current page items
  const currentItems = data?.results?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div id="search-page">
      <div id="search-header">
        <h1>Blog & Article</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <Autocomplete placeholder="Search article, news or recipe..." />
      </div>
      <div id="main-content">
        <div id="dishes-container">
          {currentItems?.map((elem) => {
            return (
              <div
                className="dish"
                key={elem.id}
                onClick={() =>
                  dishClick(recipe.loading, navigate, dispatch, elem.id)
                }
              >
                <img src={elem.thumbnail_url} alt="" className="dish-pic" />
                <div className="dish-text">
                  <div className="dish-name">{elem.name}</div>
                  <p className="description">{elem.description}</p>
                  <div className="dish-details">
                    <div className="dish-time">
                      <img src={img2} alt="" className="details-icon" />
                      {elem.total_time_tier?.display_tier
                        ? elem.total_time_tier.display_tier
                            .replace("Under ", "")
                            .trim()
                        : "N/A"}
                    </div>
                    <div className="dish-type">
                      <img src={img1} alt="" className="details-icon" />
                      {extractMainIngredient(elem)}{" "}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Sidebar />

        {/* Pagination Component */}
        {totalPages > 1 && (
          <div id="move-between-pages">
            <button
              className="page-btn prev-next"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {getPageNumbers(totalPages, currentPage).map((pageNumber, index) =>
              pageNumber === "..." ? (
                <span key={`ellipsis-${index}`} className="page-ellipsis">
                  ...
                </span>
              ) : (
                <button
                  key={pageNumber}
                  className={`page-btn ${
                    currentPage === pageNumber ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            )}

            <button
              className="page-btn prev-next"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
      <Subscribe />
      <Footer />
      {loading ? (
        <div id="loading-page">
          <div className="loader"></div>
        </div>
      ) : null}
    </div>
  );
};
