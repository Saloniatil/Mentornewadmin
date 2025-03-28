import React from "react";
import { Link } from "react-router-dom";

export function itemRender(current, type, originalElement) {
  if (type === "prev") {
    return <Link to="#0">Previous</Link>;
  }
  if (type === "next") {
    return <Link to="#0">Next</Link>;
  }
  return originalElement;
}

export function onShowSizeChange() {}
