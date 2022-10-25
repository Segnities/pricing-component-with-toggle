import React, { useState } from "react";

import Toggle from "./components/UI/Toggle/Toggle";
import Card from "./components/Card/Card";

import styles from "./App.module.css";

const plan = {
  monthly: {
    price: {
      basic: 19.99,
      professional: 24.99,
      master: 39.99,
    },
  },
  annually: {
    price: {
      basic: 199.99,
      professional: 299.99,
      master: 399.99,
    },
  },
};

function App() {
  const [monthlyPlan, setMonthlyPlan] = useState(false);

  return (
    <div className={styles["app"]}>
      <main className={styles["wrapper"]}>
        <section className={styles["pricing-plan"]}>
          <h2>Our pricing</h2>
          <div className={styles["proposal"]}>
            <p>Annually</p>
            <Toggle isActive={monthlyPlan} setIsActive={setMonthlyPlan} />
            <p>Monthly</p>
          </div>
        </section>
        <div className={styles["cards"]}>
          <Card
            title={"Basic"}
            price={
              monthlyPlan === false ? plan.monthly.price.basic : plan.annually.price.basic
            }
            storageType={"GB"}
            storage={500}
            usersAllowed={2}
            sendUp={3}
          />
          <Card
            title={"Professional"}
            price={
              monthlyPlan === false
                ? plan.monthly.price.professional
                : plan.annually.price.professional
            }
            storageType={"TB"}
            storage={1}
            usersAllowed={2}
            sendUp={3}
            mainProposal={true}
          />
          <Card
            title={"Master"}
            price={
              monthlyPlan === false
                ? plan.monthly.price.master
                : plan.annually.price.master
            }
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
