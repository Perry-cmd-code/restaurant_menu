import React, { useState } from "react";
import logo from "./logo2.svg";
import arrowBack from "./arrowBack.svg";

import styles from "./app.module.scss";
import { SectionType, SubSectionType, menuIta } from "./menu_ita";

function App() {
  const [filter, setFilter] = useState<SectionType | undefined>(undefined);

  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>

      <div className={styles.content}>
        {filter && (
          <div className={styles.title}>
            <img
              src={arrowBack}
              onClick={() => {
                setFilter(undefined);
              }}
            />
            <p>{filter}</p>
          </div>
        )}

        <div className={styles.wrapper}>
          {!filter &&
            Object.values(SectionType).map((el) => (
              <div
                className={styles.singleMenuItem}
                onClick={() => {
                  setFilter(el);
                }}
              >
                <p>{el}</p>
              </div>
            ))}

          {filter != undefined &&
            filter != SectionType.pizzeria &&
            menuIta
              .filter((el) => el.section === filter)
              .map((menuItem) => {
                return (
                  <div className={styles.singleItem}>
                    <div className={styles.head}>
                      <strong className={styles.nome}>{menuItem.nome}</strong>
                      <strong className={styles.prezzo}>
                        {menuItem.price}
                      </strong>
                    </div>
                    <p className={styles.descrizione}>{menuItem.description}</p>
                  </div>
                );
              })}

          {filter != undefined && filter == SectionType.pizzeria && (
            <div className={styles.wrapperPizze}>
              <strong className={styles.subtitle}>Antipasti</strong>

              {menuIta
                .filter((el) => el.section === filter)
                .filter((item) => item.subSection === SubSectionType.antipasti)
                .map((menuItem) => {
                  return (
                    <div className={styles.singleItem}>
                      <div className={styles.head}>
                        <strong className={styles.nome}>{menuItem.nome}</strong>
                        <strong className={styles.prezzo}>
                          {menuItem.price}
                        </strong>
                      </div>
                      <p className={styles.descrizione}>
                        {menuItem.description}
                      </p>
                    </div>
                  );
                })}
            </div>
          )}

          {filter != undefined && filter == SectionType.pizzeria && (
            <div className={styles.wrapperPizze}>
              <strong className={styles.subtitle}>Pizze classiche</strong>

              {menuIta
                .filter((el) => el.section === filter)
                .filter(
                  (item) => item.subSection === SubSectionType.pizzeClassiche
                )
                .map((menuItem) => {
                  return (
                    <div className={styles.singleItem}>
                      <div className={styles.head}>
                        <strong className={styles.nome}>{menuItem.nome}</strong>
                        <strong className={styles.prezzo}>
                          {menuItem.price}
                        </strong>
                      </div>
                      <p className={styles.descrizione}>
                        {menuItem.description}
                      </p>
                    </div>
                  );
                })}
            </div>
          )}

          {filter != undefined && filter == SectionType.pizzeria && (
           <div className={styles.wrapperPizze}>
              <strong className={styles.subtitle}>Pizze bufala</strong>

              {menuIta
                .filter((el) => el.section === filter)
                .filter(
                  (item) => item.subSection === SubSectionType.pizzeBufala
                )
                .map((menuItem) => {
                  return (
                    <div className={styles.singleItem}>
                      <div className={styles.head}>
                        <strong className={styles.nome}>{menuItem.nome}</strong>
                        <strong className={styles.prezzo}>
                          {menuItem.price}
                        </strong>
                      </div>
                      <p className={styles.descrizione}>
                        {menuItem.description}
                      </p>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
