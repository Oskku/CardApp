import React, { useState } from "react";
import styles from "./App.module.css";
import Card from "../Card/Card";
import Filter from "../Filter/Filter";
const App = () => {
  const [cardToggle, setCardtoggle] = useState(true);
  const [filter, setFilter] = useState("");
  const [state, setstate] = useState([
    {
      name: "sara",
      Country: "Finland",
      State: "Pirkanmaa",
      PhoneNumber: "0400236682",
    },
    {
      name: "laura",
      Country: "Finland",
      State: "Lappi",
      PhoneNumber: "0400236682",
    },

    {
      name: "mary",
      Country: "Finland",
      State: "UusiMaa",
      PhoneNumber: "0400236682",
    },
    {
      name: "nermen",
      Country: "Finland",
      State: "UusiMaa",
      PhoneNumber: "0498837821",
    },
  ]);

  //Show items
  const showHandlar = () => {
    setCardtoggle(!cardToggle);
  };

  //Delete items
  const deletHandlar = (e, clickedIdx) => {
    /*  const embty = state.filter((el, idx) => idx !== clickedIdx);
    setstate(embty)
    console.log(state) */

    //Hide items by filter function
    setstate((preveState) => {
      return preveState.filter((el, idx) => idx !== clickedIdx);
    });
  };
  const filterNames = (names) => {
    setFilter(names);
  };

  const namesHandler = () => {
    if (filter.length !== 0) {
      return state.filter((el) => el.name.includes(filter));
    }
    return state;
  };

  return (
    <div className={styles.container}>
      <h1>Girls Data</h1>
      <button className={styles.button} onClick={showHandlar}>
        {cardToggle ? "Hide Names" : "Show Names"}
      </button>
      <Filter filterProp={filterNames} />
      <div className={cardToggle ? styles.show : styles.hide}>
        <Card nameList={namesHandler()} deleteFunc={deletHandlar} type="girl" />
      </div>
    </div>
  );
};

export default App;
