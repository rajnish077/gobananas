import React from "react";
import { Container, Typography } from "@mui/material";

function AboutUs() {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        malesuada justo vitae purus commodo, sit amet interdum tortor placerat.
        Sed scelerisque blandit nisi id hendrerit.
      </Typography>
    </Container>
  );
}

export default AboutUs;
