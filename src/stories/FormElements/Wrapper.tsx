import { Box, Container } from "@mui/material";
import { PropsWithChildren } from "react";

export const Wrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <div style={{ width: "100vh" }}>
    <Container maxWidth="sm">
      <Box width="100%">{children}</Box>
    </Container>
  </div>
);
