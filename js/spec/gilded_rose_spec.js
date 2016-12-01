describe("Gilded Rose", function() {

  describe('STANDARD ITEMS', function() {

    it('Reduces sellIn by 1 per day', function(){
      items = [ new Item('Elixir of the Mongoose', 5, 7) ];
      update_quality();
      expect(items[0].sell_in).toEqual(4);
    });

    it('Decreases quality by 1 per day', function(){
      items = [ new Item('Elixir of the Mongoose', 5, 7) ];
      update_quality();
      expect(items[0].quality).toEqual(6);
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

  });

  describe('BACKSTAGE PASSES', function(){

    it('Increases quality by 1 when more than 10 days left', function(){
      items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20) ];
      update_quality();
      expect(items[0].quality).toEqual(21);
    });

    it('Increases quality by 2 when 10 or fewer days left', function(){
      items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20) ];
      update_quality();
      expect(items[0].quality).toEqual(22);
    });

    it('Increases quality by 3 when 5 or fewer days left', function(){
      items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20) ];
      update_quality();
      expect(items[0].quality).toEqual(23);
    });

    it('Quality is 0 when -1 days left', function(){
      items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20) ];
      update_quality();
      expect(items[0].quality).toEqual(0);
    });

    it('sellIn is reduced by 1 per day', function(){
      items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20) ];
      update_quality();
      expect(items[0].sell_in).toEqual(14);
    });

  });

  describe('SULFURAS', function(){

  });

  describe('CONJURED ITEMS', function(){

  });
});

// describe('', function(){
//
// });
