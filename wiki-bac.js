var button = document.getElementById("btn");
button.addEventListener('click',function(){
//document.getElementById(results).style.border="2px solid blue";
var searchTerm = $("#searchval").val();
var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";

$.ajax({
  type:"GET",
  url: url,
  asyn: false,
  dataType: "json",
  success: function(data){
    var result = document.getElementById("results");
    result.innerHTML = "";
    for(var i=0;i<data[1].length;i++)
      {
        result.innerHTML += '<li> <a href = \"'+ data[3][i]+ '\">' +data[1][i]+ '</a>'+ '<p>'+data[2][i]+'</p></li>';
      }
    result.style.border = "1px solid blue";
  },
  error: function(errorMessage){
    alert("Error");
  }
});
});


/*var button = document.getElementById("btn");
button.addEventListener('click',function(){
  var searchTerm = document.getElementById("searchval").value;
  var wiki = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
    wiki.onload = function(){
       organizeData(wiki.responseText);
    };
  
  wiki.open('GET', url, false);
  wiki.send();
});

function organizeData(data)
{
    //var wikiData = JSON.stringify(data);
    //encodeURIComponent(data);
    //var wikiData = JSON.parse(data);
    var result = document.getElementById("results");
    console.log(data);
    /*for(var i=0;i<wikiData.length;i++)
        {
            result.innerHTML += wikiData[i] + "</br>";
        }
}*/

