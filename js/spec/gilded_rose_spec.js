describe("Gilded Rose", function() {

  describe('STANDARD ITEMS', function() {

    it('Reduces sellIn by 1 per day', function(){
      items = [ new Item('Elixir of the Mongoose', 5, 7) ];
      update_quality();
      expect(items[0].sell_in).toEqual(4);
    });

    it('Decreases quality by 1 per day while sellIn is >0', function(){
      items = [ new Item('Elixir of the Mongoose', 5, 7) ];
      update_quality();
      expect(items[0].quality).toEqual(6);
    });

    it('Decreases quality by 2 per day while sellIn is =0', function(){
      items = [ new Item('Elixir of the Mongoose', 0, 7) ];
      update_quality();
      expect(items[0].quality).toEqual(5);
    });

    it('Decreases quality by 2 per day while sellIn is <0', function(){
      items = [ new Item('Elixir of the Mongoose', 0, 5) ];
      update_quality();
      expect(items[0].quality).toEqual(3);
    });

    it('Quality is never negative', function(){
      items = [ new Item('Elixir of the Mongoose', 2, 0) ];
      update_quality();
      expect(items[0].quality).toEqual(0);
    });

    it('Quality is never more than 50', function(){
      items = [ new Item('Elixir of the Mongoose', 2, 80) ];
      update_quality();
      expect(items[0].quality).toEqual(50);
    });

  });

  describe('AGED BRIE', function() {

    it('Increases quality by 1 per day', function(){
      items = [ new Item('Aged Brie', 2, 0) ];
      update_quality();
      expect(items[0].quality).toEqual(1);
    });

    it('Reduces sellIn by 1 per day', function(){
      items = [ new Item('Aged Brie', 2, 0) ];
      update_quality();
      expect(items[0].sell_in).toEqual(1);
    });

    it('Quality is never more than 50', function(){
      items = [ new Item('Aged Brie', 2, 49) ];
      update_quality();
      expect(items[0].quality).toEqual(50);
    });

  });

  describe('BACKSTAGE PASSES', function(){

    it('Increases quality by 1 when >10 days left', function(){
      items = [ new Item('Backstage passes', 15, 20) ];
      update_quality();
      expect(items[0].quality).toEqual(21);
    });

    it('Increases quality by 2 when 10 days left', function(){
      items = [ new Item('Backstage passes', 10, 20) ];
      update_quality();
      expect(items[0].quality).toEqual(22);
    });

    it('Increases quality by 3 when 5 days left', function(){
      items = [ new Item('Backstage passes', 5, 20) ];
      update_quality();
      expect(items[0].quality).toEqual(23);
    });

    it('Quality is 0 when 0 days left', function(){
      items = [ new Item('Backstage passes', 0, 20) ];
      update_quality();
      expect(items[0].quality).toEqual(0);
    });

    it('Quality is 0 when -1 days left', function(){
      items = [ new Item('Backstage passes', -1, 20) ];
      update_quality();
      expect(items[0].quality).toEqual(0);
    });

    it('sellIn is reduced by 1 per day', function(){
      items = [ new Item('Backstage passes', 15, 20) ];
      update_quality();
      expect(items[0].sell_in).toEqual(14);
    });

    it('Quality is never negative', function(){
      items = [ new Item('Backstage passes', -1, 0) ];
      update_quality();
      expect(items[0].quality).toEqual(0);
    });

    it('Quality is never more than 50', function(){
      items = [ new Item('Backstage passes', 1, 49) ];
      update_quality();
      expect(items[0].quality).toEqual(50);
    });

  });

  describe('SULFURAS', function(){

    it('Quality does not change', function(){
      items = [ new Item('Sulfuras, Hand of Ragnaros', -1, 80) ];
      update_quality();
      expect(items[0].quality).toEqual(80);
    });

    it('sellIn is always 0', function(){
      items = [ new Item('Sulfuras, Hand of Ragnaros', -1, 80) ];
      update_quality();
      expect(items[0].sell_in).toEqual(0);
    });

  });

  describe('CONJURED ITEMS', function(){

    it('Quality reduces at double rate', function(){
      items = [ new Item('Conjured Mana Cake', 3, 6) ];
      update_quality();
      expect(items[0].quality).toEqual(4);
    });

    it('sellIn reduces by 1 per day', function(){
      items = [ new Item('Conjured Mana Cake', 3, 6) ];
      update_quality();
      expect(items[0].sell_in).toEqual(2);
    });

    it('Quality is never negative', function(){
      items = [ new Item('Conjured Mana Cake', 3, 0) ];
      update_quality();
      expect(items[0].quality).toEqual(0);
    });

    it('Quality is never more than 50', function(){
      items = [ new Item('Conjured Mana Cake', 3, 80) ];
      update_quality();
      expect(items[0].quality).toEqual(50);
    });

  });
});
