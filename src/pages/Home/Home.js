import React from "react";
import BasicLayout from "../../layouts/BasicLayout";

import "./Home.scss";

export default function Home(props) {
  const { setRefreshCheckLogin } = props;
  return (
    <BasicLayout className="home" setRefreshCheckLogin={setRefreshCheckLogin}>
      <h2>Estamos en la HOME</h2>
    </BasicLayout>
  );
}
