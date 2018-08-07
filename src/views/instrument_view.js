const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:selected-instrument-ready', (evt) => {
    const instrument = evt.detail;
    this.render(instrument);
  });
};

InstrumentInfoView.prototype.render = function(instrument){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `The`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

module.exports = InstrumentInfoView;
