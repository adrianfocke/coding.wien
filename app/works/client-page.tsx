"use client";
import Grid, { GridVariant } from "../../components/Grid/Grid";

export default function ClientPage() {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode

  return (
    <div>
      <Grid variant={GridVariant["Work-List"]}></Grid>
    </div>
  );
}
