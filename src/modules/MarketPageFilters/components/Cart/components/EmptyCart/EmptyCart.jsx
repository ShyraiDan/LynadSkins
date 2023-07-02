import React from "react";
import styles from "./EmptyCart.module.css";

import { Typeography } from "../../../../../../ui/Typeography";
import { Container } from "../../../../../../ui/Container";

export const EmptyCart = () => {
  return (
    <Container styles={styles.container}>
      <Typeography variant={"h3"} color={"white"} m={"0px 0px 10px 0"}>
        Your cart is empty{" "}
      </Typeography>
      <Typeography color={"white"}>
        Add the items you want to purchase from our inventory{" "}
      </Typeography>
    </Container>
  );
};