import {
  Container,
  CssBaseline,
  Pagination,
  Skeleton,
  Stack,
} from "@mui/material";
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
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    api.search
      .getPhotos({
        query: searchValue || "random",
        orientation: "landscape",
        perPage: 30,
        page: pageNumber,
      })
      .then((result) => {
        setPhotosResponse(result);
        setLoading(false);
      })
      .catch(() => {
        console.log("something went wrong!");
        setLoading(false);
      });
    window.scroll(0, 0);
  }, [pageNumber, searchValue]);
  if (!loading) console.log("data.response.results: ", data);

  const handlePageChange = (e, pageNumber) => {
    console.log("Page Number: ", pageNumber);
    setPageNumber(pageNumber);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="l" sx={{ maxWidth: "xl" }}>
        <Box sx={{ bgcolor: "#454545", minHeight: "100vh", paddingBottom: 5 }}>
          <SearchAppBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          {loading ? (
            <LoadingSkeleton />
          ) : (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"start"}
              flex
              flexDirection={"row"}
              flexWrap={"wrap"}
            >
              {data.response.results.map((item) => (
                <CustomCard {...item} />
              ))}
            </Box>
          )}
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"start"}
            flex
            flexDirection={"row"}
            flexWrap={"wrap"}
            marginTop={5}
            marginBottom={5}
          >
            {data?.response?.total_pages > 1 && (
              <Pagination
                count={data.response.total_pages}
                color="secondary"
                onChange={handlePageChange}
              />
            )}
            {/* {!loading && (
              <Pagination
                count={data.response.total_pages}
                color="secondary"
                onChange={handlePageChange}
              />
            )} */}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
