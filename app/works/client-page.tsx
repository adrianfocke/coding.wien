"use client";
import { Container } from "@radix-ui/themes";

interface ClientPageProps {
  props: any;
}

export default function ClientPage({ props }: ClientPageProps) {
  console.log(props);
  return (
    <>
      <div className="marginTop100">
        <Container mx="2"></Container>
      </div>
    </>
  );
}
