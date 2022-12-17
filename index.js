let outputArray = []
let arrayLoop = 0;
let data;
$(function(){
    $.getJSON('options.json', function(newData){
        data = newData;
        //Messages

        for (let i=0; i<data.messages.length;i++){
            outputArray.push(data.messages[i]);
        }
        // Links
        for (let i=0; i<data.links.length;i++){ 
            outputArray.push(`<a href="${data.links[i].link}">[${data.links[i].name}]</a>`);
        }
        //Label
        let searchDiv = document.createElement("div");
        let label = document.createElement("label");
        let input = document.createElement("input");
        input.type = "text";
        input.name = "searchLine";
        input.id = "searchLine";
        label.textContent = data.settings.prependOfSearch;
        searchDiv.insertAdjacentElement("beforeend", label);
        searchDiv.insertAdjacentElement("beforeend", input);
        outputLoop();
        document.querySelector(".container").insertAdjacentElement("beforeend", searchDiv);
        document.querySelector("#searchLine").focus();
    });
});
function outputLoop(){
    arrayLoop++;
    if (outputArray[arrayLoop]){
        document.querySelector("#linkpile").innerHTML += `<p>${outputArray[arrayLoop]}</p>`;
        outputLoop();
    }
}
document.addEventListener("keypress", function(event){
    console.log("hi");
    if (event.which === 13){
        window.open(data.settings.searchEngine.replace("$",$("#searchLine").val()),"_self")
    }
})