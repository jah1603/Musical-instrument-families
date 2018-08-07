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

  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${instrument.description}`;
  this.container.innerHTML = '';

  const secondaryHeader = document.createElement('h3');
  secondaryHeader.textContent = "Notable instruments include:";

  const listOfInstruments = document.createElement('ol');
  listOfInstruments.style = "list-style-type:square";
  // for (individualInstrument of instrument.instruments){
  //   document.createElement('')
  // }
  instrument.instruments.forEach((individualInstrument, index) => {
  const listItem = document.createElement('li');
  listItem.textContent = `${individualInstrument}`;
    listOfInstruments.appendChild(listItem);
  console.log("hi");
});

  this.container.appendChild(header);
  this.container.appendChild(space);
  this.container.appendChild(infoParagraph);
  this.container.appendChild(secondaryHeader);
  this.container.appendChild(listOfInstruments);

};

module.exports = InstrumentInfoView;
