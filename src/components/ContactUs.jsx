import React from "react";
import { Container, Typography } from "@mui/material";

function ContactUs() {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1">
        Email: example@example.com
        <br />
        Phone: 123-456-7890
        <br />
        Address: 123 Main St, City, Country
      </Typography>
    </Container>
  );
}

export default ContactUs;
