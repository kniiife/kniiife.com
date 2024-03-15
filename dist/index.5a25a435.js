fetch("scripts/kniiives.json").then((response)=>{
    console.log(response.json());
    return response.json();
}).then((data)=>{
    console.log(data);
    for(var i = 0; i < data.kniiives.length; i++){
        const { brand , name , bladeLength , type , description , url  } = data.kniiives[i];
        document.querySelector("#kniiifeData").innerHTML += `
        <div class="kniiife-data">
            <h3 class="kniiife-data__title"><a class="kniiife-data__link" href="${url}">${brand} - ${name}</a></h3>
            <p class="kniiife-data__spec">Blade Length: ${bladeLength}</p>
            <p class="kniiife-data__type">Type: ${type}</span></p>
            <p class=""kniiife-data__description">Description: ${description}</p>
        </div>`;
    }
});

//# sourceMappingURL=index.5a25a435.js.map
