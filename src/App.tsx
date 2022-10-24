import React, { useState } from "react";

import Toggle from "./components/UI/Toggle/Toggle";
import Card from "./components/Card/Card";

import styles from "./App.module.css";

function App() {
  const [monthlyPlan, setMonthlyPlan] = useState(false);
  return (
    <div className={styles["app"]}>
      <main className={styles["wrapper"]}>
        <section className={styles["pricing-plan"]}>
          <h2>Our pricing</h2>
          <div className={styles["proposal"]}>
            <p>Annualy</p>
            <Toggle isActive={monthlyPlan} setIsActive={setMonthlyPlan} />
            <p>Monthly</p>
          </div>
        </section>
        <div className={styles["cards"]}>
          <Card
            title={"Basic"}
            price={19.99}
            storageType={"GB"}
            storage={500}
            usersAllowed={2}
            sendUp={3}
          />
          <Card
            title={"Professional"}
            price={24.99}
            storageType={"TB"}
            storage={1}
            usersAllowed={2}
            sendUp={3}
            mainProposal={true}
          />
          <Card
            title={"Master"}
            price={39.99}
            storageType={"TB"}
            storage={2}
            usersAllowed={2}
            sendUp={3}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
