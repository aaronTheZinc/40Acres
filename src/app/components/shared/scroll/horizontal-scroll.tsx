"use client";

import React, { useRef, useEffect, FC, ReactNode } from "react";

export const HorizontalAutoScroll: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    let start = 0;
    let speed = 0.5; // Adjust speed as needed
    const scrollWidth = scrollContainer.scrollWidth / 2;

    const scroll = () => {
      start += speed;
      if (start >= scrollWidth) {
        start = 0; // Reset scroll position for loop effect
      }
      scrollContainer.scrollLeft = start;
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, []);

  return (
    <div style={styles.scrollContainer} ref={containerRef}>
      <div style={styles.content}>{children}</div>
    </div>
  );
};

const styles = {
  scrollContainer: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    display: "flex",
    width: "100%",
  },
  content: {
    display: "inline-flex",
  },
  item: {
    minWidth: "150px",
    margin: "0 10px",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    textAlign: "center",
  },
};

export default HorizontalAutoScroll;
