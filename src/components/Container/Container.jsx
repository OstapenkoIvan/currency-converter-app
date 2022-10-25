import React from "react";
import PropTypes from "prop-types";

export default function Container({ children }) {
  return (
    <main className="mx-auto max-w-screen-sm rounded-xl shadow-sm">
      {children}
    </main>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
