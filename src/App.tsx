import React, { useState } from "react";
import logo from "./logo2.svg";
import ukIcon from "./uk.png";
import itaIcon from "./italia.png";
import arrowBack from "./arrowBack.svg";

import styles from "./app.module.scss";
import { Allergeni, SectionType, SubSectionType, allergeneToPng, menuIta } from "./menu_ita";
import { AllergeniEn, SectionTypeEn, SubSectionTypeEn, allergeneToSvgEn, menuEnglish } from "./menu_en";

enum Language {
  ita,
  en,
}

function App() {
  const [filter, setFilter] = useState<SectionType | SectionTypeEn | undefined>(undefined);
  const [language, setLanguage] = useState<Language>(Language.ita);

  return (
    <div className={styles.main}>
      <div className={styles.chooseLanguage} onClick={()=>{setFilter(undefined)}}>
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
              filter != SectionType.pizzeria && filter != SectionType.bibite &&
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
                        {menuItem.allergens?.map((el)=> <img src={allergeneToPng(el)}/>)}
                    </div>

                    </div>
                  );
                })}

          
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

{filter != undefined && filter == SectionType.bibite && (
              <div className={styles.wrapperPizze}>

                {menuIta
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === undefined
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
             {filter != undefined && filter == SectionType.bibite && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>
                  Birre classiche
                </strong>

                {menuIta
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === SubSectionType.birreClassiche
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

{filter != undefined && filter == SectionType.bibite && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>
                  Vini bianchi
                </strong>

                {menuIta
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === SubSectionType.viniBianchi
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

{filter != undefined && filter == SectionType.bibite && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>
                  Spumanti
                </strong>

                {menuIta
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === SubSectionType.spumanti
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

{filter != undefined && filter == SectionType.bibite && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>
                  Champagne
                </strong>

                {menuIta
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === SubSectionType.champagne
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
                {Object.values(Allergeni).map((allergene)=><p className={styles.singleAllergene}>
                <img src={allergeneToPng(allergene)}/>
                  
                  {allergene} 
                  </p>)}
              </div>
            )}
          </div>
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
              filter != SectionTypeEn.bibite &&
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
                        {menuItem.allergens?.map((el)=> <img src={allergeneToSvgEn(el)}/>)}
                    </div>
                    </div>
                  );
                })}

           

            {filter != undefined && filter == SectionTypeEn.pizzeria && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>Pizze classiche</strong>

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
                  Pizze con mozzarella di bufala
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

{filter != undefined && filter == SectionTypeEn.bibite && (
              <div className={styles.wrapperPizze}>

                {menuEnglish
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === undefined
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
             {filter != undefined && filter == SectionTypeEn.bibite && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>
                  Classic beers
                </strong>

                {menuEnglish
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === SubSectionTypeEn.birreClassiche
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

{filter != undefined && filter == SectionTypeEn.bibite && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>
                  White wines
                </strong>

                {menuEnglish
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === SubSectionTypeEn.viniBianchi
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

{filter != undefined && filter == SectionTypeEn.bibite && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>
                  Sparkling wines
                </strong>

                {menuEnglish
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === SubSectionTypeEn.spumanti
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

{filter != undefined && filter == SectionTypeEn.bibite && (
              <div className={styles.wrapperPizze}>
                <strong className={styles.subtitle}>
                  Champagne
                </strong>

                {menuEnglish
                  .filter((el) => el.section === filter)
                  .filter(
                    (item) => item.subSection === SubSectionTypeEn.champagne
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
                {Object.values(AllergeniEn).map((allergene)=><p className={styles.singleAllergene}>
                <img src={allergeneToSvgEn(allergene)}/>
                  {allergene} 
                  </p>)}
              </div>
            )}
          </div>
        </div>
      )}
      
    </div>
  );
}

export default App;
