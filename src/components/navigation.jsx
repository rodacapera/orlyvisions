import { useTranslation } from "react-i18next";
import Select from 'react-select';

const options = [
  { label: 'Es', value: 'es', flag: 'img/español.png' },
  { label: 'En', value: 'en', flag: 'img/ingles.png' },
]

export const Navigation = (props) => {

  const style = {
    paddingTop: 10,
    margin: '0 20',
  }
  const [t, i18n] = useTranslation("global");

  const handleSelectChange = (event) => {
    i18n.changeLanguage(event.value)
  }

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            BodegAlert
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                {t("navigation.button1")}
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                {t("navigation.button2")}
              </a>
            </li>
            <li>
              <a href='#features' className='page-scroll'>
                {t("navigation.button3")}
              </a>
            </li>
            <li>
              <a href='#bikeAlert' className='page-scroll'>
                {t("navigation.button6")}
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                {t("navigation.button4")}
              </a>
            </li>

            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li> */}
            {/* <li>
              <a href='#team' className='page-scroll'>
                Equipo
              </a>
            </li> */}
            <li>
              <a href='#contact' className='page-scroll'>
                {t("navigation.button5")}
              </a>
            </li>
            <li style={style}>
              <Select defaultValue={options[0]} options={options} onChange={(e) => handleSelectChange(e)} formatOptionLabel={option => (
                <div>
                  {option.flag ? <img style={{ height: '30px', width: '30px', borderRadius: '50%', marginRight: '10px' }} alt='flag' src={option.flag} /> : ''}
                  {option.label}
                </div>
              )} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
