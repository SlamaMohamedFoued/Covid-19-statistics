import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <div></div>;
  } else
    return (
      <div>
        <Grid container spacing={3} justify="center">
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.stat, styles.infectedStat)}
          >
            <CardContent>
              <Typography
                color="textSecondary"
                gutterBottom
                className={styles.infected}
              >
                infected
              </Typography>
              <Typography variant="h5">
                <CountUp end={confirmed.value} duration={2.75} separator="," />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">Numbet of active</Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.stat, styles.recoveredStat)}
          >
            <CardContent>
              <Typography
                color="textSecondary"
                gutterBottom
                className={styles.recovered}
              >
                recovered
              </Typography>
              <Typography variant="h5">
                <CountUp end={recovered.value} duration={2.75} separator="," />
              </Typography>
              <Typography color="textSecondary">
                {" "}
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">Number of recovered</Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.stat, styles.deathsStat)}
          >
            <CardContent>
              <Typography
                color="textSecondary"
                gutterBottom
                className={styles.deaths}
              >
                Deaths
              </Typography>
              <Typography variant="h5">
                <CountUp end={deaths.value} duration={2.75} separator="," />
              </Typography>
              <Typography color="textSecondary">
                {" "}
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">Numbet of deaths</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
};

export default Cards;
