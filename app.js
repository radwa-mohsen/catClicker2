
$(function(){

  /////////////////////////////Model ////////////////////////////////////
    var model = {

     cats :  [
     {
      catName: 'Sofia',
      imgSrc : 'img/catClicker1.jpg',
      id : 'catName1',
      currentClicks : 0,
      idNo :0
     },
     {
      catName: 'Lumia',
      imgSrc : 'img/catClicker2.jpg',
      id : 'catName2',
      currentClicks : 0,
      idNo :1
     },
     {
      catName: 'Rufia',
      imgSrc : 'img/catClicker3.jpg',
      id : 'catName3',
      currentClicks : 0,
      idNo :2
     },
     {
      catName: 'Dunia',
      imgSrc : 'img/catClicker4.jpg',
      id : 'catName4',
      currentClicks : 0,
      idNo :3
     },
     {

      catName: 'Judia',
      imgSrc : 'img/catClicker5.jpg',
      id : 'catName5',
      currentClicks : 0,
      idNo :4
     }
              ],
    currentCat : null,
    
    
            };

    
    ///////////////octopus///////////////////

    var octopus = {
      init : function(){
        viewOfList.init();
        //    viewOfCats.init();
        admin.init();
        
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
      },
     
      getCurrentClicks : function (i) {
        
        //return model.cats[i].currentClicks;
        return model.cats[i].currentClicks;
      },
      setCurrentClicks : function function_name(clicks,i) {
        model.cats[i].currentClicks = clicks;
      },
      currentAdminInfo : function (argument) {
        // body...
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
        
        return function() {
        octopus.setCurrentClicks(0,catcopy.idNo);
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
          // this.clickedCat.addEventListener('click',(function(){
          //  debugger
          // var i = octopus.getCurrentCat();
          //  var x = octopus.getCurrentClicks(i.idNo);
          //  viewOfCats.clicks.textContent = ++x;
          //  octopus.setCurrentClicks(x,i.idNo);


          // }))
          this.clickedCat.onclick = function(){
           
          var i = octopus.getCurrentCat();
           var x = octopus.getCurrentClicks(i.idNo);
           viewOfCats.clicks.textContent = ++x;
           octopus.setCurrentClicks(x,i.idNo);


          };


        viewOfCats.render();

      },
//          
render: function () {
  

    this.clicks.textContent = 0;
    this.catNam.textContent = octopus.getCurrentCat().catName;
    this.clickedCat.setAttribute('src',octopus.getCurrentCat().imgSrc);

}
    };
var admin = {
  init : function () {
    
    var adminButton = document.querySelector('.admin');
    this.nameInput = document.getElementById('Name');
    this.urlInput = document.getElementById('imgurl');
    this.clicksInput = document.getElementById('clicks');
    adminButton.onclick = function () {
        
        document.querySelector('form').removeAttribute('class');

        admin.render();
    }
  },

  render : function () {
debugger
    
   this.nameInput.setAttribute('value',octopus.getCurrentCat().catName)
   this.urlInput.setAttribute('value',octopus.getCurrentCat().imgSrc)
   this.clicksInput.setAttribute('value',octopus.getCurrentCat().currentClicks)

  }
}
     
   octopus.init();
 });
