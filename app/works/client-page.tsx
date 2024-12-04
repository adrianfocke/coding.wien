"use client";
import { Container } from "@radix-ui/themes";
import Grid, { GridVariant } from "../../components/Grid/Grid";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";

interface ClientPageProps {
  props: any;
}

export default function ClientPage({ props }: ClientPageProps) {
  return (
    <>
      <NavigationMenu />
      <div style={{ marginTop: "100px" }}>
        <Container mx="2">
          <Grid variant={GridVariant["Work-List"]} content={props}></Grid>
        </Container>
      </div>
    </>
  );
}
