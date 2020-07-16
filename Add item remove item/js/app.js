(function(){
  angular.module("myApp", [])
  .controller("ToBuyListController", ToBuyListController)
  .controller("AlreadyBoughtListController", AlreadyBoughtListController)
  .service("ShoppingService", ShoppingService);

  ToBuyListController.$inject = ['ShoppingService'];
  function ToBuyListController(ShoppingService){
    var toBuyList = this;
    toBuyList.itemName = "";
    toBuyList.itemCount = "";
    toBuyList.toBuyItemList = ShoppingService.getListItems(); 
    try{
      toBuyList.addToBoughtList = function(index, itemName, itemCount){
        ShoppingService.toBuyRemoveItem(index);
        ShoppingService.addItem(itemName, itemCount);
      }
    } catch(error){
      toBuyList.errorMessage = error.message;
    }
    
  }

  AlreadyBoughtListController.$inject = ['ShoppingService'];
  function AlreadyBoughtListController(ShoppingService){
    var alreadyBoughtList = this;
    alreadyBoughtList.boughtItemList = ShoppingService.getItems();
    try{
      alreadyBoughtList.removeItem = function(index, name, count){
        ShoppingService.removeItem(index);
        ShoppingService.addItemToBuy(name, count);
      }
      } catch(error){
        alreadyBoughtList.errorMessage = error.message;
    }
  }

  function ShoppingService(){
    var service = this;
    var toBuyListItemList = [
      {
        name : "milk",
        count : "5"
      },
      {
        name : "cookies",
        count : "10"
      },
      {
        name : "noodles",
        count : "7"
      },
      {
        name : "chips",
        count : "20"
      },
      {
        name : "eggs",
        count : "30"
      },
      {
        name : "cakes",
        count : "20"
      }
    ];
    var boughtItemList = [];
    service.toBuyList = function(){
      return toBuyListItemList;
    }
    service.addItem = function(itemName, counts){
      var item = {
        name : itemName,
        count : counts
      }
      boughtItemList.push(item);
    };
    service.addItemToBuy = function(itemName, counts){
      var item = {
        name : itemName,
        count : counts
      }
      toBuyListItemList.push(item);
    };
    service.getItems = function(){
      return boughtItemList;
    };
    service.getListItems = function(){
      return toBuyListItemList;
    };
    service.removeItem = function(index){
      boughtItemList.splice(index, 1);
    };
    service.toBuyRemoveItem = function(index){
      toBuyListItemList.splice(index, 1);
    };
  }
})();