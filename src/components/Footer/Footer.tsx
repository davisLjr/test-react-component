import * as React from "react";

export interface Phone {
  title: string;
  number: number;
}
export interface FooterLinks {
  title: string;
  src: string;
  icon?: string;
}

export interface FooterProps {
  phoneItems?: Phone[];
  networkItems?: FooterLinks[];
  legalItems?: FooterLinks[];
  isPhoneSectionHidden?: boolean;
  isNetworkSectionHidden?: boolean;
  isLegalSectionHidden?: boolean;
  hasIndicator?: boolean;
}

const PHONE_ITEMS = [
  {
    title: "Niñez y Adolescencia",
    number: 102,
  },
  {
    title: "Emergencias",
    number: 103,
  },
  {
    title: "SAME",
    number: 107,
  },
  {
    title: "Policía",
    number: 911,
  },
  {
    title: "Violencia de género",
    number: 144,
  },
  {
    title: "Atención ciudadana",
    number: 147,
  },
];

const NETWORK_ITEMS = [
  {
    title: "Facebook",
    src: "https://www.facebook.com/GCBA",
    icon: "bx bxl-facebook-circle",
  },
  {
    title: "Instagram",
    src: "https://www.instagram.com/gcba/",
    icon: "bx bxl-instagram-alt",
  },
  {
    title: "Twitter",
    src: "https://twitter.com/buenosaires",
    icon: "bx bxl-twitter",
  },
  {
    title: "YouTube",
    src: "https://www.youtube.com/user/GCBA",
    icon: "bx bxl-youtube",
  },
  {
    title: "LinkedIn",
    src: "https://ar.linkedin.com/company/gobierno-de-la-ciudad-de-buenos-aires",
    icon: "bx bxl-linkedin-square",
  },
  {
    title: "TikTok",
    src: "https://www.tiktok.com/@buenosaires",
    icon: "bx bxl-tiktok",
  },
  {
    title: "Pinterest",
    src: "https://www.pinterest.es/buenosaires/",
    icon: "bx bxl-pinterest",
  },
];

const LEGAL_ITEMS = [
  {
    title: "Boletín oficial",
    src: "https://boletinoficial.buenosaires.gob.ar",
  },
  {
    title: "Términos y condiciones",
    src: "https://buenosaires.gob.ar/inicio/terminos-y-condiciones",
  },
  {
    title: "Política de privacidad",
    src: "https://buenosaires.gob.ar/inicio/privacidad",
  },
  {
    title: "Oficios judiciales",
    src: "https://buenosaires.gob.ar/jefedegobierno/legalytecnica/normativa/boletin-oficial-y-registro/oficios-judiciales",
  },
  {
    title: "Transparencia",
    src: "https://buenosaires.gob.ar/gobierno/transparencia",
  },
];

export default function Footer(props: React.PropsWithChildren<FooterProps>) {
  const {
    phoneItems = PHONE_ITEMS,
    networkItems = NETWORK_ITEMS,
    legalItems = LEGAL_ITEMS,
    isPhoneSectionHidden = false,
    isNetworkSectionHidden = false,
    isLegalSectionHidden = false,
    hasIndicator = false,
  } = props;

  const getPhoneSection = (items: Phone[]): JSX.Element => (
    <section>
      <h4>Teléfonos útiles</h4>
      <ul className="list-inline">
        {items.map(({number, title}, index) => (
          <li className="list-inline-item phone-items" key={index}>
            <a href={`tel:${number}`}>
              {number} - {title}
            </a>
          </li>
        ))}
      </ul>
      <a href="https://buenosaires.gob.ar/inicio/telefonos">
        Ver todos los teléfonos
      </a>
    </section>
  );

  const getNetworkSection = (items: FooterLinks[]): JSX.Element => (
    <section>
      <h4>Redes de la ciudad</h4>
      <ul className="list-inline">
        {items.map(({title, src, icon}, index) => (
          <li className="list-inline-item redes-items" key={index}>
            <a href={src}>
              <i className={`${icon ? icon : ""}`} />
              {title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );

  const getLegalSection = (items: FooterLinks[]): JSX.Element => (
    <section className="footer-legal-section">
      <div className="row align-items-center">
        <div className="col-12 col-md-5 col-xl-4 footer-content-img">
          <img
            className="d-lg-none"
            src="https://gcba.github.io/Obelisco/footer/ciudad-ba-sm.svg"
            alt="Ciudad de Buenos Aires"
            height="48"
          />
          <img
            className="d-none d-lg-inline"
            src="https://gcba.github.io/Obelisco/footer/ciudad-ba.svg"
            alt="Ciudad de Buenos Aires"
            height="40"
          />
          <img
            className="img-vamos-ba"
            src="https://gcba.github.io/Obelisco/footer/vamos-ba.svg"
            alt="Vamos Buenos Aires"
          />
        </div>
        <div className="col-12">
          <ul className="list-inline">
            {items.map(({title, src}, index) => (
              <li className="list-inline-item" key={index}>
                <a href={src}>{title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );

  const LicenseSection = (): JSX.Element => (
    <section>
      <div className="footer-license-text">
        Los contenidos de buenosaires.gob.ar están licenciados bajo Creative
        Commons Reconocimiento 2.5 Argentina License.
      </div>
    </section>
  );

  const FooterIndicator = (): JSX.Element => (
    <div className="footer-info">
      <div className="container">
        <h4 className="footer-info-text">¿Te fue útil esta página?</h4>
        <div className="footer-info-actions">
          <button className="btn btn-primary">Sí, me fue útil</button>
          <button className="btn btn-secondary">No me sirvió</button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {hasIndicator ? <FooterIndicator /> : null}
      <footer className="main-footer">
        <div className="container">
          {!isPhoneSectionHidden && getPhoneSection(phoneItems)}
          {!isNetworkSectionHidden && getNetworkSection(networkItems)}
        </div>
        {isNetworkSectionHidden && isPhoneSectionHidden ? null : (
          <hr className="divider" />
        )}
        <div className="container">
          {!isLegalSectionHidden && getLegalSection(legalItems)}
          <LicenseSection />
        </div>
      </footer>
    </>
  );
}
