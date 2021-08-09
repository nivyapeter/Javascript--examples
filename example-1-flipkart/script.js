const mobiles = [
  {id: 1, name: 'realme C21 (Cross Blue, 64 GB)', price:8999 , imgurl:"https://rukminim1.flixcart.com/image/312/312/kn7sdjk0/mobile/g/r/g/c21-rmx3201-realme-original-imagfxfwn9aryyda.jpeg?q=70"},
{id: 2, name: 'realme C21 (Cross Black, 32 GB)', price: 7999, imgurl: "https://rukminim1.flixcart.com/image/312/312/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70"}
];

  const container = document.getElementById('mobile-container'); 
  mobiles.map(mobile => {
  container.innerHTML += ` <div class ="first-mobile" id='mobile-container'>
<div class="first" id="mobimg">
  <img src='${mobile.imgurl}'/>
  <div class="text-block" id="textblock">
    <span class="text-block-1">
      <label class="mobile-text">
        <input class="mobile-input" type="checkbox" />
        <div class="mob"></div>
      </label>
    </span>
    <label class="mobile-text1">
      <span>Add to Compare</span>
    </label>
  </div>
  <div class="heart-symbol">
    <div class="heart-symbol1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="_1l0elc"
        width="16"
        height="16"
        viewBox="0 0 20 16"
      >
        <path
          class="eX72wL"
          d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
          fill="#2874F0"
          class="eX72wL"
          stroke="#FFF"
          fill-rule="evenodd"
          opacity=".9"
        ></path>
      </svg>
    </div>
  </div>
</div>
<div class="mob-first-details">
  <div class="mobiledetails">
  <h2>${mobile.name}</h2>
    <div class="rating-button" id="ratingbtn">
      <button class="rating">
        4.3
        <img
          class="rating-img"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
          alt="rating-star-img"
        />
      </button>
      <span class="rating-text">
        <span>30,294 Ratings </span>
        <span>&</span>
        <span>1,030 Reviews</span>
      </span>
     
    </div>
    <ul class="mobile-data" id="mobdata">
      <li class="data-1">
        4 GB RAM | 64 GB ROM | Expandable Upto 256 GB
      </li>
      <li class="data-1">16.51 cm (6.5 inch) HD+ Display</li>
      <li class="data-1">13MP + 2MP + 2MP | 5MP Front Camera</li>
      <li class="data-1">5000 mAh Battery</li>
      <li class="data-1">MediaTek Helio G35 Processor</li>
      <li class="data-1">
        1 Year Warranty for Mobile and 6 Months for Accessories
      </li>
    </ul>
  </div>

  <div class="mobile-price">
    <div class="price-first-block">
      <div class="price-fst">
        <div class="price-1">
        <strong>${mobile.price}</strong>

          <img
            class="side-img"
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
            alt="side-flipkart-logo"
          />
        </div>
        <div class="price-2">
          ₹
          
          10,999
        </div>
        <div class="off-price">18% off</div>
      </div>
    </div> 
   
    <div class="side-text">
      <div class="side-text1">
        <div class="side-text2">Exchange, 100% Money Back</div>
      </div>
    </div>
    <div class="next-side-text">
      <div class="next-side-text1">
        <div class="first-one">
          Upto <strong>₹8,350</strong> Off on Exchange
        </div>
      </div>
    </div>
  </div>
</div>`



});