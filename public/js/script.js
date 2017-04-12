$(document).ready (function(){
  console.log('linked');


let arizona = "25507be1-6a68-4267-bd82-e097d94b359b";
let rockies = "29dd9a87-5bcc-4774-80c3-7f50d985068b";
let dodgers= "ef64da7f-cfaf-4300-87b0-9313386b977c";
let padres= "d52d5339-cbdd-43f3-9dfa-a42fd588b9a3";
let giants= "a7723160-10b7-4277-a309-d8dd95a8ae65";
let reds= "95e2d773-d899-4751-b61a-b9463e5aa874";
let cubs= "55714da8-fcaf-4574-8443-59bfb511a524";
let brewers= "dcfd5266-00ce-442c-bc09-264cd20cf455";
let pirates= "481dfe7e-5dab-46ab-a49f-9dcc2b6e2cfd";
let cardinals= "44671792-dc02-4fdd-a5ad-f5f17edaa9d7";
let nats= "d89bed32-3aee-4407-99e3-4103641b999a";
let mets= "f246a5e5-afdb-479c-9aaa-c68beeda7af6";
let marlins= "03556285-bdbb-4576-a06d-42f71f46ddc5";
let phillies= "2142e1ba-3b40-445c-b8bb-f1f8b1054220";
let braves= "12079497-e414-450a-8bf2-29f91de646bf";
let orioles= "75729d34-bca7-4a0f-b3df-6f26c6ad3719";
let red_sox= "93941372-eb4c-4c40-aced-fe3267174393";
let rays= "bdc11650-6f74-49c4-875e-778aeb7632d9";
let bluejays= "1d678440-b4b1-4954-9b39-70afb3ebbcfa";
let yankees= "a09ec676-f887-43dc-bbb3-cf4bbaee9a18";
let twins= "aa34e0ed-f342-4ec6-b774-c79b47b60e2d";
let indians= "80715d0d-0d2a-450f-a970-1b9a3b18c7e7";
let tigers= "575c19b7-4052-41c2-9f0a-1c5813d02f99";
let whitesox= "47f490cd-2f58-4ef7-9dfd-2ad6ba6c1ae8";
let royals= "833a51a9-0d84-410f-bd77-da08c3e5e26e";
let angels= "4f735188-37c8-473d-ae32-1f7e34ccf892";
let astros= "eb21dadd-8f10-4095-8bf3-dfb3b779f107";
let athletics= "27a59d3b-ff7c-48ea-b016-4798f560f5e1";
let rangers= "d99f919b-1534-4516-8e8a-9cd106c6d8cd";
let mariners= "43a39081-52b4-4f93-ad29-da7f329ea960";




let btn = $("button");
let location = document.getElementById("nameteam");
let nameteam="";//empty becasue in show dog there is a input with nameteam id
let inputField = $("input")
let response = "";
let teamdata = $("#teamData")
let teamdatas = function(data){
    $.ajax({
    "url": "http://api.sportradar.us/mlb-t6/league/venues.json?api_key=*************",
    "Method": "GET",
    "dataType": "json",
    success: function(data) {
    $.each(data.contents[0].contents, function() {
      $('#teamData').append('<div id="stat">' + this.venues[0].name + " " + "at"     + " " + this.venues[1].name + '</div>');
  });
},
error: function() {
     // handle the error
}
  })
}
  btn.on("click", function(event){
    event.preventDefault();
    data = inputField.val(nameteam);
    teamdatas(data);
  });

});





// let metsdata = function(input){
// $.ajax({
//     "url": "'http://api.sportradar.us/mlb-t6/teams/f246a5e5-afdb-479c-9aaa-c68beeda7af6/profile.json?api_key='+key",
//     "method": "GET",
//     "success": function(results){
//     $(.player).appendTo
//
//
//       })
