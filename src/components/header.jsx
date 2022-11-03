import { useTranslation } from "react-i18next";

export const Header = (props) => {

  const [t] = useTranslation("global");

  return (
    <div className='intro'>
      <div className='overlay'>
        <div className='container'>
          <div className='row'>
            <div className='intro-text'>
              <br />
              <br />
              <br />
              <br />
              <a
                href='#about'
                className='btn btn-custom btn-lg page-scroll'
              >
                {t("header.button-learn")}
              </a>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
