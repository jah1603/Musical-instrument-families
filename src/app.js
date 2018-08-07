const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_view.js');

document.addEventListener('DOMContentLoaded', function(){
  const selectElement = document.querySelector('select#instrument-families');
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const infoDiv = document.querySelector('div#instrument-info')
  const instrumentInfoDisplay = new InstrumentInfoView(infoDiv);
  instrumentInfoDisplay.bindEvents();

  const instrumentDataSource = new InstrumentFamilies();
  instrumentDataSource.bindEvents();
});
