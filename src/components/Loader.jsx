import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

function Loader(loading) {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
  return (
    <ClipLoader
    loading={loading}
    cssOverride={override}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  )
}

export default Loader