import { useTranslation } from "react-i18next";

export const Services = (props) => {

  const [t] = useTranslation("global");

  const items = t('services.items', { returnObjects: true });


  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>{t("services.ourServices")}</h2>
          <p style={{textAlign: 'center'}}>
            {t("services.meetOurServices")}
          </p>
        </div>
        <div className='row'>
          {items
            ? items.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-4'>
                {' '}
                <i className={d.icon}></i>
                <div className='service-desc'>
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
