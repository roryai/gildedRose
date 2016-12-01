describe("Gilded Rose", function() {

  describe('sellIn', function() {

    it('Reduces sellIn- standard item', function(){
      items = [ new Item('Elixir of the Mongoose', 5, 7) ];
      update_quality();
      expect(items[0].sell_in).toEqual(4);
    });

  });

  describe('sellIn', function() {

    it('Increases quality- standard item', function(){
      items = [ new Item('Elixir of the Mongoose', 5, 7) ];
      update_quality();
      expect(items[0].quality).toEqual(6);
    });

  });
});
