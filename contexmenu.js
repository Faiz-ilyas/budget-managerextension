chrome.runtime.onInstalled.addListener(() =>  {
var contMi={
    "id":"1",
    "title":"SpendMoney",
   "contexts" : ["selection"]
};

            function isInt(value) {
    return !isNaN(value) && 
           parseInt(Number(value)) == value && 
           !isNaN(parseInt(value, 10));
  }
chrome.contextMenus.create(contMi);
chrome.contextMenus.onClicked.addListener(function(clickdata){
if(clickdata.menuItemId=="1"&& clickdata.sectionText){
   if(isInt(clickdata.sectionText) ){
       chrome.storage.sync.get(['total','limit'],function(budget){
            var newTotal=0;
            if(budget.total){
                newTotal+=parseInt(budget.total);
            }
            newTotal+=parseInt(clickdata.sectionText);
            chrome.storage.sync.set({'total':newTotal},function(){
                if(newTotal>=budget.limit){
                    alert("hii")
                }
            })
       });

   }
}
});

});