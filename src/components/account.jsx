import { useDispatch, useSelector } from "react-redux";
import "../style/account.scss";
import { useEffect, useRef, useState } from "react";
import { getFavouritesThunk } from "../redux/favourites";
import { Delete } from "./deletePopOut";
import { deleteThunk } from "../redux/delete";
import { logoutThunk } from "../redux/logout";

export const Account = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.accessToken);
  const { lastAction, items } = useSelector((state) => state.favourites);
  const { accessToken } = useSelector((state) => state.accessToken);
  const logout = useSelector((state) => state.logout);
  const { loading, error } = useSelector((state) => state.deleteAccount); // Add delete state
  const hasRequested = useRef(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  useEffect(() => {
    if (accessToken && lastAction === null && !hasRequested.current) {
      hasRequested.current = true;
      dispatch(getFavouritesThunk());
    }
  }, [lastAction, accessToken]);

  const handleLogoutClick = () => {
    try {
      dispatch(logoutThunk());
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleConfirmDelete = async () => {
    try {
      await dispatch(deleteThunk()).unwrap();
      window.location.href = "/login";

      console.log("Account deleted successfully");
    } catch (error) {
      console.error("Failed to delete account:", error);
      // You might want to show an error message to the user
    } finally {
      setShowDeleteConfirmation(false);
    }
  };

  if (!user) return null;

  return (
    <div id="account-page">
      <div id="account-container">
        <div id="svg-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path
              fill="currentColor"
              d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"
            />
          </svg>
        </div>

        <div id="account">
          <div id="details">
            <p id="name">{user.name}</p>
            <p id="email">{user.email}</p>

            <div id="fav">
              <p>favourites count</p>
              <p>{items?.length}</p>
            </div>
          </div>

          <button
            id="log-out"
            disabled={logout.loading}
            onClick={handleLogoutClick}
          >
            {logout.loading ? "logging out..." : "log out"}
          </button>
          {logout.error && <p className="error">Error: {logout.error}</p>}

          <button id="delete" onClick={handleDeleteClick} disabled={loading}>
            delete account
          </button>
          {loading && (
            <div id="loading-page">
              <p>Deleting account...</p>
            </div>
          )}
          {error && <p className="error">Error: {error}</p>}
        </div>
      </div>

      {showDeleteConfirmation && (
        <Delete
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
          loading={loading}
        />
      )}
    </div>
  );
};
