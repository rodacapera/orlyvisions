export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Funcionamiento</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <iframe width="560" height="315" src="https://www.youtube.com/embed/L3wKzyIN1yk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Acerca De la Aplicación</h2>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
                <h3>¿Como funciona?</h3>
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
