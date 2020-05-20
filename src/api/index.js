import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  var changebleUrl = url;

  if (country) {
    changebleUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changebleUrl);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.log(error);
  }
};
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    console.log(data);
    const modifiedData = data.map((el) => ({
      confirmed: el.confirmed.total,
      deaths: el.deaths.total,
      date: el.reportDate,
    }));
    console.log(modifiedData);
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const Countries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((el) => el.name);
  } catch (error) {
    console.log(error);
  }
};
