import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Sorularınız mı var?</h1>
              <p>Kariyerinizi ve büyümenizi destekleyeceğiz.</p>
            </div>
            <button className="btn5">Bugün Bize Ulaşın</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo-light.png" alt="" />
              <h2>Herhangi Bir Konuda Yardıma İhtiyacınız mı Var?</h2>
              <p>
                Her ay e-posta kutunuza gönderilen güncellemeleri, özel
                fırsatları, öğreticileri ve indirimleri alın.
              </p>

              <div className="input flex">
                <input type="text" placeholder="E-posta Adresi" />
                <button>Abone Ol</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>© YALIM GÜRBÜZ Tarafından Tasarlandı.</span>
      </div>
    </>
  );
};

export default Footer;
