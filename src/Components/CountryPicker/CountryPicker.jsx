import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { Countries } from "../../api/index";

import styles from "./CountryPicker.module.css";

const CountryPicker = (props) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setFetchedCountries(await Countries());
    };

    fetchCountries();
    // console.log(fetchedCountries);
  }, [fetchedCountries]);

  return (
    <FormControl className={styles.form}>
      <NativeSelect onChange={(e) => props.handleCountry(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountries.map((el, i) => (
          <option key={i} value={el}>
            {el}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
