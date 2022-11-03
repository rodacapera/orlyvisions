import { useTranslation } from "react-i18next";

export const Features = (props) => {

  const [t] = useTranslation("global");

  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>{t("features.funct")}</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 video-responsive">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/od1r0fgriQ4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>{t("features.about")}</h2>
                <h3>{t("features.how")}</h3>
                <p>{t("features.paragraph")}</p>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
