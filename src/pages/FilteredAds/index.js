import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Grid, Typography, Link } from "@material-ui/core";

import AdCard from "../../components/AdCard";
import Bottomnav from "../../components/Bottomnav";
import { GoBackIcon } from "../../components/DesignElements";

const FilteredAds = () => {
  const { category } = useParams();
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/ads`)
      .then((res) => res.json())
      .then((data) => setAds(data));
  }, [category]);

  const history = useHistory();

  return (
    <section>
      <br></br>
      <Link variant="button" onClick={() => history.goBack()}>
        <GoBackIcon />
      </Link>
      <br></br>
      <br></br>
      <Typography variant="h2">{category}</Typography>
      <Grid container spacing={3}>
        {ads
          .filter((item) => item.category === category)
          .slice(0)
          .reverse()
          .map((ad) => (
            <Grid item key={ad.id} xs={12} sm={6} lg={4}>
              <AdCard ad={ad} />
            </Grid>
          ))}
      </Grid>
      <Bottomnav />
    </section>
  );
};

export default FilteredAds;
