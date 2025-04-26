"use client";
import { Container } from "@radix-ui/themes";

interface ClientPageProps {
  props: any;
}

export default function ClientPage({ props }: ClientPageProps) {
  console.log(props);
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <Container mx="2"></Container>
      </div>
    </>
  );
}
