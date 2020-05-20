import React from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./Components";
import { fetchData } from "./api/index";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
    console.log(data);
  }

  handleCountry = async (country) => {
    const data = await fetchData(country);

    this.setState({ country, data });
  };
  render() {
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        <CountryPicker
          handleCountry={(country) => this.handleCountry(country)}
        />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
