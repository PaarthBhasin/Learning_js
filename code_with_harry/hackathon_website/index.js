let url = "https://kontests.net/api/v1/all"
let response=fetch(url);
response.then((v)=>{
    return v.json();
}).then((contests)=>{
    console.log(contests);
    ihtml="";
    for(item in contests){
        console.log(contests[item]);
        ihtml+=`
        <div class="card mx-1 my-1" style="width: 22rem;">
                <img src="https://cdn.mos.cms.futurecdn.net/3eSHhTo4WUYwXJUpMCxEUo-1920-80.jpg.webp" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${contests[item].name}</h5>
                  <p class="card-text">Status is : ${contests[item].status} and site is : ${contests[item].site}</p>
                  <p class="card-text">In 24 hours : ${contests[item].in_24_hours}</p>
                  <p>Start at: ${contests[item].start_time}</p>
                  <p>End at: ${contests[item].end_time}</p>
                  <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
                </div>
              </div>
          </div>`
    }
        cardContainer.innerHTML=ihtml;
})
