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
  const header = document.createElement('h2');
  header.textContent = `${instrument.name}`;

  const space = document.createElement('p');

  const secondaryHeader = document.createElement('h3');
  secondaryHeader.textContent = "Notable instruments include:";

  const instrumentsList = document.createElement('')

  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${instrument.description}`;
  this.container.innerHTML = '';

  this.container.appendChild(header);
  this.container.appendChild(space);
  this.container.appendChild(secondaryHeader);
  this.container.appendChild(infoParagraph);
};

module.exports = InstrumentInfoView;
