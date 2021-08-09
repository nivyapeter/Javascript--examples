fetch('mydata.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });
  // document.getElementById("bg").style.backgroundImage =[data[i].imgurl];
  // document.getElementById("business-container").style.flexDirection = "row";
  
  function appendData(data) {
    var mainContainer = document.getElementById("business-container");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML += `<div class="food-wrap1">
        <div class="food-wrap-card">
          <div class="food-wrap-photo">
            <div class="photo-box-ground" id="bg">
            <img src=${data[i].imgurl}>
            </div>
          </div>
          <div class="card-body">
            <div class="card-content">
              <h3 class="card-content-title u-text-truncate">
              <span class="business-link">
                <a class="biz-name analytics-click" href="/biz/bangkok-house-thai-noodles-san-francisco">
                <span>${data[i].item}</span>
                </a>
              </span>
            </div>
          </h3>
          <div class="biz-rating clearfix">
            <div class="i-stars i-stars--regular-4-half rating-large">
            <img class="offscreen" src="https://s3-media0.fl.yelpcdn.com/assets/public/stars.yji-9bec2045845c24d3bff3ddb582884eda.png" alt="star-image">
            </div>
            <span class="rating-qualifier">
            ${data[i].rating}
            </span>
          </div>
          <div class="price-category">
            <span class="category-fist">
            ${data[i].category}
            </span>
          </div>
          <div class="neighborhood u-text-truncate">
            <span class="neighborhood-str-list">
            ${data[i].statlist}
            </span>
          </div>
          <p class="open-card">
            <span class="icon icon--18-flame icon--size-18 icon--currentColor">
              <svg class="icon_svg" role="img">
                <use xlink:href="#18x18_flame">
                  <symbol id="18x18_flame" height="18" width="18">
                    <path d="M11.508 3.743c1.173 2.429-.465 2.269-.696 3.88C10.082 2.758 5.947 1.5 5.947 1.5c2.045 2.697-1.901 4.784-3.629 8.33-1.471 3.016 2.532 5.441 4.668 6.67-2.15-2.993-.562-5.02 1.613-6.793-.806 2.448.502 2.934 1.049 3.944.711-.313 1.028-1.305 1.101-1.791.953 1.309 1.464 2.968-.249 4.64 8.303-3.775 5.978-9.748 1.008-12.757z"></path>
                  </symbol>
                </use>
              </svg>
            </span>
            ${data[i].days}
        
          </p>
          </div>
        </div>

      </div>
      `
        mainContainer.appendChild(div);
    }
}