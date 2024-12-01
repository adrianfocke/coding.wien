"use client";
import { Container } from "@radix-ui/themes";
import Grid, { GridVariant } from "../../components/Grid/Grid";

export default function ClientPage() {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode

  return (
    <div style={{ marginTop: "100px" }}>
      <Container mx="2">
        <Grid variant={GridVariant["Work-List"]}></Grid>
      </Container>
    </div>
  );
}
