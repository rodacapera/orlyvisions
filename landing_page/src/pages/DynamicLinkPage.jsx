import "../styles/dynamicLink.css";

export default function DynamicLinkPage(params) {
  return (
    <div class="row">
      <div className="col-md-8">
        <a
          className="btn btn-lg btn-primary big-btn"
          href="https://apps.apple.com/app/id1428944146?mt=8"
        >
          <img
            width="80px"
            height="63px"
            className="pull-left"
            src="https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large_2x.png"
            alt="Playstore link"
          />
          <div className="btn-text">
            <small>Available on</small>
            <br />
            <strong>Appstore</strong>
          </div>
        </a>
        <a
          className="btn btn-lg btn-success big-btn android-btn "
          href="https://play.google.com/store/apps/details?id=io.cordova.alarmu&pcampaignid=fdl_long&url=https://apps.apple.com/app/id1428944146?mt%3D8"
        >
          <img
            width="80px"
            height="60px"
            className="pull-left"
            src="http://www.userlogos.org/files/logos/jumpordie/google_play_04.png"
            alt="Playstore link"
          />
          <div className="btn-text">
            <small>Available on</small>
            <br />
            <strong>Google Play</strong>
          </div>
        </a>
      </div>
    </div>
  );
}
