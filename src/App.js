import { Container, CssBaseline, Skeleton, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import react, { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import CustomCard from "./components/CustomCard";
import LoadingSkeleton from "./components/LoadingSkeleton";
import SearchAppBar from "./components/NavBar";

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "vp2pXafU-SF39lw5XOZgF9rkrKWxOmT19jsRn7QtI8Q",
});

function App() {
  const [data, setPhotosResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.search
      .getPhotos({ query: "cat", orientation: "landscape", page: 0 })
      .then((result) => {
        setPhotosResponse(result);
        setLoading(false);
      })
      .catch(() => {
        console.log("something went wrong!");
        setLoading(false);
      });
  }, []);

  if (!loading) console.log("data.respons.results: ", data);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="l" sx={{ maxWidth: "xl" }}>
        <Box sx={{ bgcolor: "#454545", minHeight: "100vh" }}>
          <SearchAppBar />
          {loading ? (
            <LoadingSkeleton />
          ) : (
            <Box justifyContent={"center"} alignItems={"center"} flex>
              {data.response.results.map((item) => (
                <CustomCard {...item} />
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
