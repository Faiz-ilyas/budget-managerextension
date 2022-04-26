$(function(){
        chrome.storage.sync.get(['limit'],function(budget){
            $("#limit").text(budget.limit);
        })
        $("#sl").click(function(){
            var limit=$("#el").val();
            if(limit){
            chrome.storage.sync.set({"limit":limit},function(){
              close();
               
            });
          

            }

        });
        $("#reset").click(function(){
            chrome.storage.sync.set({"total":0},function(){
                alert("hellow there");
                chrome.notifications.create("NOTFICATION_ID",{
                        type:"basic",
                        iconUrl:"browser.png",
                        title:"Reset Total",
                        message:"you have reset Total",
                        priority: 2
                })
               
         
            });  
        });
});