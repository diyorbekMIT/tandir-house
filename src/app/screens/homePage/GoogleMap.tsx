import { Box, Container, Stack } from "@mui/material";
import "../../../css/products.css";

export default function GoogleMap() {
  return (
    <div className="address" style={{ marginBottom: "150px" }}>
      <Container>
        <Stack className="address-area">
        <Box className={"title"} sx={
            {fontSize:"36px", fontFamily: "Dancing Script", fontStyle:"normal", fontWeight:"700", lineHeight: "43px", marginLeft: "100px", justifyContent: "center", alignItems: "center", marginRight: "-100px"}
            
            }>Our address</Box>
          <iframe
            style={{ marginTop: "60px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.363734762081!2d69.2267250514616!3d41.322703307863044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9a0a33281d%3A0x9c5015eab678e435!2z0KDQsNC50YXQvtC9!5e0!3m2!1sko!2skr!4v1655461169573!5m2!1sko!2skr"
            width="1320"
            height="500"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Stack>
      </Container>
    </div>
  );
}
