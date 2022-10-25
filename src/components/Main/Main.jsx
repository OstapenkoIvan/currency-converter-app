import React from "react";

import Converter from "components/Converter/Converter";

export default function Main() {
  return (
    <section className="rounded-b-xl border border-gray-200 bg-gray-50 p-3">
      <h1 className="text-center text-gray-500">Converter</h1>
      <Converter />
    </section>
  );
}
