imageCardTemp(title, image, width, height, contentBg, footerBg, textcolor, footertextcolor, titletextcolor) => {
  return `<style>

  .demo-card-wide.mdl-card {
      width: {width}px;
      background-color: {contentBg};
  }

  .demo-card-wide > .mdl-card__title {
      color: {titletextcolor};
      height: {height}px;
      background: url('{titleImage}') center / cover;
  }

  .demo-card-wide > .mdl-card__menu {
      color: #FFFFFFf;
  }

  .mdl-card__supporting-text {
      color: {textcolor};
  }

  .mdl-card__actions {
      background-color: {footerBg};
  }

  .mdl-button.mdl-button--colored {
      color: {footertextcolor};
  }
  </style>

  <div class="demo-card-wide mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">{title}</h2>
      </div>
      <div class="mdl-card__supporting-text">
          {{ipsumText}}
      </div>
      <div class="mdl-card__actions mdl-card--border">
          <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          Get Started
          </a>
      </div>
      <div class="mdl-card__menu">
          <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
          <i class="material-icons">share</i>
          </button>
      </div>
  </div>
  </div>`

}

module.exports.imageCardTemp = imageCardTemp;
