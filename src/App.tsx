import React, { useState } from "react";
import logo from "./logo2.svg";
import ukIcon from "./uk.png";
import itaIcon from "./italia.png";
import arrowBack from "./arrowBack.svg";

import styles from "./app.module.scss";
import {
  Allergeni,
  SectionType,
  SubSectionType,
  allergeneToPng,
  menuIta,
} from "./menu_ita";
import {
  AllergeniEn,
  SectionTypeEn,
  SubSectionTypeEn,
  allergeneToSvgEn,
  menuEnglish,
} from "./menu_en";

enum Language {
  ita,
  en,
}

function App() {
  const [filter, setFilter] = useState<SectionType | SectionTypeEn | undefined>(
    undefined
  );
  const [language, setLanguage] = useState<Language>(Language.ita);

  return (
    <div className={styles.main}>
      <div
        className={styles.chooseLanguage}
        onClick={() => {
          setFilter(undefined);
        }}
      >
        {language === Language.ita ? (
          <img
            src={ukIcon}
            onClick={() => {
              setLanguage(Language.en);
            }}
          />
        ) : (
          <img
            src={itaIcon}
            onClick={() => {
              setLanguage(Language.ita);
            }}
          />
        )}
      </div>
      <div className={styles.logo}>
        <img src={logo} />
      </div>

      {language === Language.ita ? (
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
              filter != SectionType.vini &&
              filter != SectionType.antipasti &&
              filter != SectionType.primiPiatti &&
              filter != SectionType.secondiPiatti &&
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
                      <p className={styles.descrizione}>
                        {menuItem.description}
                      </p>
                      <div className={styles.allergeni}>
                        {menuItem.allergens?.map((el) => (
                          <img src={allergeneToPng(el)} />
                        ))}
                      </div>
                    </div>
                  );
                })}

{filter != undefined && filter == SectionType.antipasti && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>Antipasti</strong>

                {menuIta
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === SubSectionType.antipasti
                  )
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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

{filter != undefined && filter == SectionType.antipasti && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>Antipasti di Mare</strong>

                {menuIta
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === SubSectionType.antipastiMare
                  )
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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

{filter != undefined && filter == SectionType.primiPiatti && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>Primi piatti</strong>

                {menuIta
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === SubSectionType.primiPiatti
                  )
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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

{filter != undefined && filter == SectionType.primiPiatti && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>Primi piatti di mare</strong>

                {menuIta
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === SubSectionType.primiPiattiMare
                  )
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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

{filter != undefined && filter == SectionType.secondiPiatti && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>Secondi piatti</strong>

                {menuIta
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === SubSectionType.secondiPiatti
                  )
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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

{filter != undefined && filter == SectionType.secondiPiatti && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>Secondi piatti di mare</strong>

                {menuIta
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === SubSectionType.secondiPiattiMare
                  )
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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
                <strong className={styles.subtitle}>
                  Pizze con mozzarella di bufala
                </strong>

                {menuIta
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === SubSectionType.pizzeBufala
                  )
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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

            {filter != undefined && filter == SectionType.vini && (
              <div className={styles.wrapperPizze}>
                {menuIta
                  .filter((el) => el.section === filter)
                  .filter((item) => item.subSection === undefined)
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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
            {filter != undefined && filter == SectionType.vini && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>
                  Vino bianco Tenuto dello Jato
                </strong>

                {menuIta
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === SubSectionType.vinoBiancoJato
                  )
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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

            {filter != undefined && filter == SectionType.vini && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>
                  Vino rosso Tenuto dello Jato
                </strong>

                {menuIta
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === SubSectionType.vinoRossoJato
                  )
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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

            {filter != undefined && filter == SectionType.allergeni && (
              <div className={styles.allergeni}>
                {Object.values(Allergeni).map((allergene) => (
                  <p className={styles.singleAllergene}>
                    <img src={allergeneToPng(allergene)} />

                    {allergene}
                  </p>
                ))}
              </div>
            )}
          </div>
          {filter == SectionType.secondiPiatti && <p style={{width: "100%", textAlign: "right", paddingTop: "10px", margin:"0"}}>Tutti i secondi verranno accompagnati da un'insalatina croccante</p>}
          <i style={{width: "100%", textAlign: "right", paddingTop: "10px"}}>Coperto € 2,00</i>
        </div>
      ) : (
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
              Object.values(SectionTypeEn).map((el) => (
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
              filter != SectionTypeEn.pizzeria &&
              filter != SectionTypeEn.vini &&
              filter != SectionTypeEn.antipasti &&
              filter != SectionTypeEn.primiPiatti &&
              filter != SectionTypeEn.secondiPiatti &&
              menuEnglish
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
                      <p className={styles.descrizione}>
                        {menuItem.description}
                      </p>
                      <div className={styles.allergeni}>
                        {menuItem.allergens?.map((el) => (
                          <img src={allergeneToSvgEn(el)} />
                        ))}
                      </div>
                    </div>
                  );
                })}

                 {filter != undefined && filter == SectionTypeEn.antipasti && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>Starter</strong>

                {menuEnglish
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) =>
                      item.subSection === SubSectionTypeEn.antipasti
                  )
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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

{filter != undefined && filter == SectionTypeEn.antipasti && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>Seafood starter</strong>

                {menuEnglish
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) =>
                      item.subSection === SubSectionTypeEn.antipastiMare
                  )
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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

{filter != undefined && filter == SectionTypeEn.primiPiatti && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>First courses</strong>

                {menuEnglish
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) =>
                      item.subSection === SubSectionTypeEn.primiPiatti
                  )
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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

{filter != undefined && filter == SectionTypeEn.primiPiatti && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>Seafood first courses</strong>

                {menuEnglish
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) =>
                      item.subSection === SubSectionTypeEn.primiPiattiMare
                  )
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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

{filter != undefined && filter == SectionTypeEn.secondiPiatti && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>Second courses</strong>

                {menuEnglish
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) =>
                      item.subSection === SubSectionTypeEn.secondiPiatti
                  )
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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
            {filter != undefined && filter == SectionTypeEn.secondiPiatti && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>Seafood second courses</strong>

                {menuEnglish
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) =>
                      item.subSection === SubSectionTypeEn.secondiPiattiMare
                  )
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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
                

            {filter != undefined && filter == SectionTypeEn.pizzeria && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>Classic pizzas</strong>

                {menuEnglish
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) =>
                      item.subSection === SubSectionTypeEn.pizzeClassiche
                  )
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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

            {filter != undefined && filter == SectionTypeEn.pizzeria && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>
                  Pizzas with buffalo mozzarella DOP
                </strong>

                {menuEnglish
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === SubSectionTypeEn.pizzeBufala
                  )
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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

            {filter != undefined && filter == SectionTypeEn.vini && (
              <div className={styles.wrapperPizze}>
                {menuEnglish
                  .filter((el) => el.section === filter)
                  .filter((item) => item.subSection === undefined)
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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
            {filter != undefined && filter == SectionTypeEn.vini && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>
                  White Wines from Tenute dello Jato
                </strong>

                {menuEnglish
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) =>
                      item.subSection === SubSectionTypeEn.vinoBiancoJato
                  )
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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

            {filter != undefined && filter == SectionTypeEn.vini && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>
                  Red Wines from Tenute dello Jato
                </strong>

                {menuEnglish
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === SubSectionTypeEn.vinoRossoJato
                  )
                  .map((menuItem) => {
                    return (
                      <div className={styles.singleItem}>
                        <div className={styles.head}>
                          <strong className={styles.nome}>
                            {menuItem.nome}
                          </strong>
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

            {filter != undefined && filter == SectionTypeEn.allergeni && (
              <div className={styles.allergeni}>
                {Object.values(AllergeniEn).map((allergene) => (
                  <p className={styles.singleAllergene}>
                    <img src={allergeneToSvgEn(allergene)} />
                    {allergene}
                  </p>
                ))}
              </div>
            )}
          </div>
          {filter == SectionTypeEn.secondiPiatti && <p style={{width: "100%", textAlign: "right", paddingTop: "10px", margin: "0"}}>
          All second courses will be accompanied by a crunchy salad.</p>}
          <i style={{width: "100%", textAlign: "right", paddingTop: "10px"}}>Cover charge € 2,00</i>
        </div>
      )}
    </div>
  );
}

export default App;
