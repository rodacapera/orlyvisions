import { useTranslation } from "react-i18next";

export const About = (props) => {

  const [t] = useTranslation("global");
  const list = t('about.why', { returnObjects: true });


  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 video-responsive">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DC5DwMahgjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{t("about.aboutOurs")}</h2>
              <p>{t("about.paragraph")}</p>
              <h3>{t("about.whyChoose")}</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {list
                      ? list.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : "loading"}
                    {/*  {list.map((number) => (
                      <li key={number}>{t("about.why" + number)}</li>
                    ))
                    } */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
