$(function(){
    chrome.storage.sync.get(['total','limit'], function(budget) {
                        $("#Spend").text(budget.total);
                        $("#totalLimit").text(budget.limit);

    })
      $("#submit").click(function(){
                
                    chrome.storage.sync.get(['total','limit'], function(budget) {
                        var newTotal=0;
                       if(budget.total){
                        newTotal+=parseInt(budget.total);
                        
                       }
                       var enteramount=$("#enetrAmount").val();
                       
                       if(enteramount){
                        newTotal+=parseInt(enteramount);
                       }
                    
                     
                      chrome.storage.sync.set({"total": newTotal},function(){
                          if(enteramount && newTotal >=budget.limit){
                            chrome.notifications.create("limitrexhed",{
                                type:"basic",
                                iconUrl:"browser.png",
                                title:"Reached Limit",
                                message:"you have reached limit",
                                priority: 2
                        })
                          }
                      });
                      $("#Spend").text(newTotal);
                      $("#enetrAmount").val("");
                    });
      });
    
});