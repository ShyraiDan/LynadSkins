import React, { forwardRef } from "react";
import { motion } from "framer-motion";

export const ListItem = forwardRef(
  (
    {
      children,
      display,
      justifyContent,
      mt,
      mb,
      mr,
      ml,
      m,
      pr,
      pt,
      pb,
      pl,
      p,
      style,
      bg,
      w,
      h,
      borderRadius,
      position,
      rotate,
      cursor,
      onClick,
    },
    ref
  ) => {
    let cl = "";
    if (style) {
      cl += `${style}`;
    }
    return (
      <li
        ref={ref}
        style={{
          display,
          justifyContent,
          marginRight: mr,
          marginTop: mt,
          marginBottom: mb,
          marginLeft: ml,
          margin: m,
          paddingRight: pr,
          paddingTop: pt,
          paddingBottom: pb,
          paddingLeft: pl,
          padding: p,
          background: bg,
          width: w,
          height: h,
          borderRadius,
          position,
          rotate,
          cursor,
        }}
        className={cl}
        onClick={onClick}
      >
        {children}
      </li>
    );
  }
);
export const MListItem = motion(ListItem);
