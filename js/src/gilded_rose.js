function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var STANDARD_QUALITY_DECREASE = 1;
var STANDARD_PAST_SELL_IT_MOD = 2;
var TICKETS_11_PLUS_DAYS_MOD = 1;
var TICKETS_10_TO_6_DAYS_MOD = 2;
var TICKETS_5_TO_1_DAYS_MOD = 3;
var TICKETS_0_DAYS_QUALITY = 0;
var QUALITY_UPPER_LIMIT = 50;
var QUALITY_LOWER_LIMIT = 0;
var CONJURED_QUALITY_MOD = 2;
var BRIE_QUALITY_MOD = 1;


var items = []

function qualityDecrease(item, modifier) {
  item.quality -= modifier;
};

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (items[i].quality > 0) {
        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
          // NEEDS EXCEPTION HERE FOR CONJRUED ITEMS
          qualityDecrease(items[i], STANDARD_QUALITY_DECREASE)
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1
        if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
        }
      }
    }
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1;
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != 'Aged Brie') {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].quality > 0) {
            if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
              items[i].quality = items[i].quality - 1
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
        }
      }
    }
  }
}
