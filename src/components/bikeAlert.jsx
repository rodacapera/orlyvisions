import { useTranslation } from "react-i18next";

export const BikeAlert = (props) => {

  const [t] = useTranslation("global");

  return (
    <div id='bikeAlert' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>{t("bikeAlert.title")}</h2>
        </div>
        <div className="container">
          <div className="row">
            <div  className="col-xs-12 col-md-6 ">
              <iframe id='video-responsive' src="https://www.youtube.com/embed/9utqxeHobkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>{t("bikeAlert.about")}</h2>
                <p style={{textAlign: 'justify'}}>{t("bikeAlert.paragraph1")}</p>
                <h3>{t("bikeAlert.how")}</h3>
                <p style={{textAlign: 'justify'}}>{t("bikeAlert.paragraph2")}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className='col-xs-12 col-md-12'>
              <iframe id='video'src="https://www.youtube.com/embed/feM65He3v98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
