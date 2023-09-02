import { style } from "@vanilla-extract/css";

const root = style({
  display: "grid",
  gridTemplateColumns: "1fr minmax(0px, 1300px) 1fr",
  gridTemplateRows: "50px 1fr min-content",
  //   justifyContent: "center",
});

export const classes = { root };
