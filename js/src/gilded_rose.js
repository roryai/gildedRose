function Item(name, sell_in, quality) {
  this.name    = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var STANDARD_QUALITY_MOD      = -1;
var STANDARD_PAST_SELL_IT_MOD = -2;
var TICKETS_11_PLUS_DAYS_MOD  =  1;
var TICKETS_10_TO_6_DAYS_MOD  =  2;
var TICKETS_5_TO_1_DAYS_MOD   =  3;
var CONJURED_QUALITY_MOD      = -2;
var BRIE_QUALITY_MOD          =  1;

var QUALITY_UPPER_LIMIT       = 50;
var QUALITY_LOWER_LIMIT       =  0;

var items = []

// _______________________________________________________________________

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if      (items[i].name == "Aged Brie")          {brieQualityHandler(items[i])}
    else if (items[i].name == "Backstage passes")   {backstagePassesQualityHandler(items[i])}
    else if (items[i].name == "Sulfuras")           {sulfurasHandler(items[i])}
    else if (items[i].name == "Conjured Mana Cake") {conjuredHandler(items[i])}
    else                                            {standardQualityHandler(items[i])}
  }
}

function brieQualityHandler(item) {
  itemProcessor(item, BRIE_QUALITY_MOD);
};

function backstagePassesQualityHandler(item) {
  if      (item.sell_in > 10) {itemProcessor(item, TICKETS_11_PLUS_DAYS_MOD)}
  else if (item.sell_in > 5)  {itemProcessor(item, TICKETS_10_TO_6_DAYS_MOD)}
  else if (item.sell_in > 0)  {itemProcessor(item, TICKETS_5_TO_1_DAYS_MOD)}
  else if (item.sell_in <= 0) {qualityFloor(item)}
};

function sulfurasHandler(item) {
  item.sell_in = 0;
};

function conjuredHandler(item) {
  itemProcessor(item, CONJURED_QUALITY_MOD);
};

function standardQualityHandler(item) {
  if      (item.sell_in > 0)  {itemProcessor(item, STANDARD_QUALITY_MOD);}
  else if (item.sell_in <= 0) {itemProcessor(item, STANDARD_PAST_SELL_IT_MOD);}
};

// _______________________________________________________________________

function itemProcessor(item, modifier) {
  qualityChange(item, modifier)
  qualityRangeHandler(item)
  sellInChange(item)
};

function qualityChange(item, modifier) {
  item.quality += modifier
}

function qualityRangeHandler(item) {
  if      (item.quality < QUALITY_LOWER_LIMIT) {item.quality = 0}
  else if (item.quality > QUALITY_UPPER_LIMIT) {item.quality = 50}
};

function sellInChange(item) {
  item.sell_in -= 1;
};

function qualityFloor(item) {
  item.quality = QUALITY_LOWER_LIMIT;
};
