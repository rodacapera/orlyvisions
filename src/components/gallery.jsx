import { Image } from "./image";
import { useTranslation } from "react-i18next";

export const Gallery = (props) => {

  const [t] = useTranslation("global");

  const list = t('gallery.items', { returnObjects: true });

  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>{t("gallery.title")}</h2>
          <p>
          {t("gallery.paragraph")}
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {list
              ? list.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-12 col-md-6 col-lg-4'>
                  <Image  title={d.title} text={d.text} /* largeImage={d.largeImage} */ smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
