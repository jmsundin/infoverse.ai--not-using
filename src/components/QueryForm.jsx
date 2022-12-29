import React, { useState, useCallback } from "react";

import "../assets/QueryForm.css";

const QueryForm = (props) => {
  const chartDropdownBtn = (
    <div className="dropdown">
      <button className="dropdown-btn">Chart Type</button>
      <div className="dropdown-content">
        <a href="#">Network Diagram</a>
        <a href="#">Tree Chart</a>
        <a href="#">Table</a>
      </div>
    </div>
  );

  const topicDropdownBtn = (
    <div className="dropdown">
      <button className="dropdown-btn">Topic</button>
      <div className="dropdown-content">
        <a href="#">Computer Science</a>
        <a href="#">Mathematics</a>
        <a href="#">Physics</a>
      </div>
    </div>
  );

  const exploreBtn = (
    <input type="submit" name="Explore" value="Explore" className="explore-btn" />
  );

  return (
    <form>
      {chartDropdownBtn}
      {topicDropdownBtn}
      {exploreBtn}
    </form>
  );
};

export default QueryForm;
