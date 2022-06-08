import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";

const pages = ["TRIPS", "RECENTLY VIEWED", "BOOKINGS"];
const Header = () => {
  return (
    <header>
      <Stack
        direction="row"
        justifyContent={{ xs: "start", sm: "center", md: "end" }}
        alignItems="center"
        spacing={{ xs: 1, sm: 4, md: 8 }}
        px={{ xs: 2, sm: 4, md: 8 }}
        paddingTop={4}
        paddingBottom={{ xs: 5, sm: 10 }}
      >
        {pages.map((page) => (
          <Typography
            variant="subtitle1"
            textAlign="center"
            sx={{ color: "#484848", fontWeight: "500" }}
          >
            {page}
          </Typography>
        ))}
        <Avatar
          alt="image"
          src="https://i3.wp.com/elcomercio.pe/resizer/5OAnUCe5uU-lMrEY4JKDBbXEhvk=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6LOMSVPYQ5GVVOEC6XRE5GGXEA.jpg?resize=1024,1024"
        />
      </Stack>
    </header>
  );
};

export default Header;
