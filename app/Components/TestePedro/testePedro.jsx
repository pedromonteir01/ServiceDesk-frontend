"use client";
import React, { useEffect, useState } from "react";
import styles from "./testePedro.module.css";

const TestePedro = ({ value, label, context }) => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("sua-api-aqui");
      const data = await response.json();
      setValue(data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.divGeneral}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
      <p className={styles.context}>{context}</p>
    </div>
  );
};

export default TestePedro;
