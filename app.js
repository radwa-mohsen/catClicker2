
$(function(){

  /////////////////////////////Model ////////////////////////////////////
    var model = {

     cats :  [
     {
      catName: 'Sofia',
      imgSrc : 'img/catClicker1.jpg',
      id : 'catName1'
     },
     {
      catName: 'Lumia',
      imgSrc : 'img/catClicker2.jpg',
      id : 'catName2'
     },
     {
      catName: 'Rufia',
      imgSrc : 'img/catClicker3.jpg',
      id : 'catName3'
     },
     {
      catName: 'Dunia',
      imgSrc : 'img/catClicker4.jpg',
      id : 'catName4'
     },
     {
      catName: 'Judia',
      imgSrc : 'img/catClicker5.jpg',
      id : 'catName5'
     }
              ],
    currentCat : null
    
            };

    
    ///////////////octopus///////////////////

    var octopus = {
      init : function(){
        viewOfList.init();
        //viewOfCats.init();
        
      },
      lengthOfCats : model.cats.length,     
      catDetails : function() {
                  
                  var catInfo = model.cats;
                  
                 return catInfo
      },
      setCurrentCat : function function_name(catcopy) {
        
      model.currentCat = catcopy;

      },
      getCurrentCat : function () {
        
        return model.currentCat;
      }
      
    };
   //////////////////////view///////////////////////////
var viewOfList  = {

  init: function () {
    
     this.list = document.querySelector('#list');

   viewOfList.render();    
  },

  render: function () {
    for (var i = 0 ; i < octopus.lengthOfCats; i++) {
       var listData = document.createElement('li');
       listData.textContent = octopus.catDetails()[i].catName;
        listData.setAttribute('id',octopus.catDetails()[i].id);
       this.list.appendChild(listData);
        this.cat = octopus.catDetails()[i];
      listData.addEventListener('click', (function(catcopy) {
      
      var x =0;
        return function() {

        octopus.setCurrentCat(catcopy);

        viewOfCats.init();
           
        };
    })(this.cat));
    }
  }
};

    var viewOfCats = {
      init: function () {
        
         this.clicks = document.getElementById('clicksNumber');
          this.catNam = document.getElementById('catname');
          this.clickedCat = document.getElementById('image');
          this.clickedCat.addEventListener('click',(function(){
            
           var x =  viewOfCats.clicks.textContent;
           x++
           viewOfCats.clicks.textContent = x;
          }))


        viewOfCats.render();

      },
//          
render: function () {
  

    this.clicks.textContent = 0;
    this.catNam.textContent = octopus.getCurrentCat().catName;
    this.clickedCat.setAttribute('src',octopus.getCurrentCat().imgSrc);

}
    };

     
   octopus.init();
 });
