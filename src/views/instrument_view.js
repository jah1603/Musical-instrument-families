const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:selected-instrument-ready', (evt) => {
    const instrument = evt.detail;
    this.container.innerHTML = '';
    this.updateView(instrument);
  });
};

InstrumentInfoView.prototype.updateView = function (instrument) {
  this.renderMainHeader(instrument);
  this.renderSpaceAfterHeader();
  this.renderFamilyDescription(instrument);
  this.renderInstrumentsHeader();
  this.populateAndStyleInstrumentList(instrument);
};

InstrumentInfoView.prototype.renderMainHeader = function(instrument){
  const header = document.createElement('h2');
  header.textContent = `${instrument.name}`;
  this.container.appendChild(header);
  };

InstrumentInfoView.prototype.renderSpaceAfterHeader = function () {
  const space = document.createElement('p');
  this.container.appendChild(space);
};

InstrumentInfoView.prototype.renderFamilyDescription = function (instrument) {
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${instrument.description}`;
  this.container.appendChild(infoParagraph);
};

InstrumentInfoView.prototype.renderInstrumentsHeader = function () {
  const secondaryHeader = document.createElement('h3');
  secondaryHeader.textContent = "Notable instruments include:";
  this.container.appendChild(secondaryHeader);
};

InstrumentInfoView.prototype.populateAndStyleInstrumentList = function (instrument){
  const listOfInstruments = document.createElement('ol');
  listOfInstruments.style = "list-style-type:square";
  instrument.instruments.forEach((individualInstrument, index) => {
  const listItem = document.createElement('li');
  listItem.textContent = `${individualInstrument}`;
  listOfInstruments.appendChild(listItem);
  this.container.appendChild(listOfInstruments);
}
)};


module.exports = InstrumentInfoView;
