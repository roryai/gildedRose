function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var STANDARD_QUALITY_MOD      = -1;
var STANDARD_PAST_SELL_IT_MOD = -2;
var TICKETS_11_PLUS_DAYS_MOD  = 1;
var TICKETS_10_TO_6_DAYS_MOD  = 2;
var TICKETS_5_TO_1_DAYS_MOD   = 3;
var CONJURED_QUALITY_MOD      = -2;
var BRIE_QUALITY_MOD          = 1;

var PASSES_0_DAYS_QUALITY     = 0;
var QUALITY_UPPER_LIMIT       = 50;
var QUALITY_LOWER_LIMIT       = 0;

var items = []

function qualityChange(item, modifier) {
  item.quality += modifier
  if (item.quality < QUALITY_LOWER_LIMIT) {
    item.quality = 0
  } else if (item.quality > QUALITY_UPPER_LIMIT) {
    item.quality = 50
  }
  sellInChange(item)
};

function sellInChange(item) {
  item.sell_in -= 1;
};

function standardQualityHandler(item) {
  if (item.sell_in > 0) {
    qualityChange(item, STANDARD_QUALITY_MOD);

  } else if (item.sell_in <= 0) {
    qualityChange(item, STANDARD_PAST_SELL_IT_MOD);

  }
};

function brieQualityHandler(item) {
  qualityChange(item, BRIE_QUALITY_MOD);

};

function sulfurasHandler(item) {
  sellInChange(item)
};

function conjuredHandler(item) {
  sellInChange(item)
};

function backstagePassesQualityHandler(item) {
  if (item.sell_in > 10) {
    qualityChange(item, TICKETS_11_PLUS_DAYS_MOD)

  } else if (item.sell_in > 5) {
    qualityChange(item, TICKETS_10_TO_6_DAYS_MOD)

  } else if (item.sell_in > 0) {
    qualityChange(item, TICKETS_5_TO_1_DAYS_MOD)

  } else if (item.sell_in <= 0) {
    item.quality = 0;
    sellInChange(item)
  } else {item.sell_in = 0}
};

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name == "Aged Brie") {
      brieQualityHandler(items[i])
    } else if (items[i].name == "Backstage passes") {
      backstagePassesQualityHandler(items[i])
    } else if (items[i].name == "Sulfuras, Hand of Ragnaros") {
      sulfurasHandler(items[i])
    } else if (items[i].name == "Conjured Mana Cake") {
      conjuredHandler(items[i])
    } else {standardQualityHandler(items[i])}
  }
}
