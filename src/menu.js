export function showMenuPage() {
  const body = document.querySelector(".overlay");

  const container = document.querySelector("#container");

  const markup = `
    <h2 class="menu__heading">Pizza</h2>
    <div class="menu__list">
      <li class="pizza">
        <div class="pizza_details">
          <span>Classic Cheese</span>
          <small>
            This stripped-down American version of pizza deserves a tasty
            American Pale Ale.
          </small>
        </div>

        <div class="pizza__price">
          <p>Slice: $2</p>
          <p>Whole: <strong>$15</strong></p>
          <p>Combo: $3.5</p>
        </div>
      </li>
      <li class="pizza">
        <div class="pizza_details">
          <span>Classic Pepperoni</span>
          <small>
            The slightly spicy notes of the pepperoni go really well with a
            malty beer.
          </small>
        </div>

        <div class="pizza__price">
          <p>Slice: $2.5</p>
          <p>Whole: <strong>$19</strong></p>
          <p>Combo: $4</p>
        </div>
      </li>
      <li class="pizza">
        <div class="pizza_details">
          <span>Vegetarian</span>
          <small>
            A nice summer kolsch that plays second fiddle to the delicate
            veggies.
          </small>
        </div>

        <div class="pizza__price">
          <p>Slice: $2.8</p>
          <p>Whole: <strong>$22</strong></p>
          <p>Combo: $4.5</p>
        </div>
      </li>
      <li class="pizza">
        <div class="pizza_details">
          <span>Mushroom</span>
          <small>
            An English Ale like Old Speckled Hen which has a bit of sweetness
            to brighten up the pizza.
          </small>
        </div>

        <div class="pizza__price">
          <p>Slice: $3</p>
          <p>Whole: <strong>$23</strong></p>
          <p>Combo: $4.9</p>
        </div>
      </li>
      <li class="pizza">
        <div class="pizza_details">
          <span>Seafood</span>
          <small>
            Off Color’s Fierce, a Berliner Weiss known for its super tart
            acidity with heavy lemon character.
          </small>
        </div>

        <div class="pizza__price">
          <p>Slice: $4</p>
          <p>Whole: <strong>$33</strong></p>
          <p>Combo: $5.5</p>
        </div>
      </li>
      <li class="pizza">
        <div class="pizza_details">
          <span>Meat Lovers</span>
          <small>
            So much meat, so little time…reach for a dark smoked beer in this
            situation to give the various toppings a more authentic smoky
            backbone.
          </small>
        </div>

        <div class="pizza__price">
          <p>Slice: $5</p>
          <p>Whole: <strong>$40</strong></p>
          <p>Combo: $6</p>
        </div>
      </li>
    </div>

    <h2 class="menu__heading">Beer</h2>
    <div class="menu__list">
      <li class="pizza">
        <div class="pizza_details">
          <span>American Pale Ale</span>
          <small>
            Alter Brewing Hopular Kid has just enough bitterness to cut
            through some of the richness of the cheese.
          </small>
        </div>

        <div class="pizza__price">
          <p>Bottle: $2</p>
          <p>Bucket: <strong>$15</strong></p>
        </div>
      </li>
      <li class="pizza">
        <div class="pizza_details">
          <span>Malty beer</span>
          <small>
            Ale Asylum’s Madtown Nut Brown and its light caramel sweetness.
          </small>
        </div>

        <div class="pizza__price">
          <p>Bottle: $2</p>
          <p>Bucket: <strong>$15</strong></p>
        </div>
      </li>
      <li class="pizza">
        <div class="pizza_details">
          <span>Summer kolsch</span>
          <small>
            Around the Bend Ghost of Lectricity, which is a very delicate
            Kolsch that won't overpower the veggies.
          </small>
        </div>

        <div class="pizza__price">
          <p>Bottle: $2</p>
          <p>Bucket: <strong>$15</strong></p>
        </div>
      </li>
      <li class="pizza">
        <div class="pizza_details">
          <span>English Ale</span>
          <small>
            An English Ale like Old Speckled Hen which has a subtle earthy hop
            profile and a bit of sweetness to brighten up the pizza.
          </small>
        </div>

        <div class="pizza__price">
          <p>Bottle: $2</p>
          <p>Bucket: <strong>$15</strong></p>
        </div>
      </li>
      <li class="pizza">
        <div class="pizza_details">
          <span>Berliner Weiss</span>
          <small>
            Off Color's Fierce, a Berliner Weiss known for its super tart
            acidity with heavy lemon character.
          </small>
        </div>

        <div class="pizza__price">
          <p>Bottle: $2</p>
          <p>Bucket: <strong>$15</strong></p>
        </div>
      </li>
      <li class="pizza">
        <div class="pizza_details">
          <span>Dark smoked beer</span>
          <small>
            Schlenkerla Marzen has an aroma of bacon and char and finishes
            with a roasty sweetness that is perfect.
          </small>
        </div>

        <div class="pizza__price">
          <p>Bottle: $2</p>
          <p>Bucket: <strong>$15</strong></p>
        </div>
      </li>
    </div>
      `;

  container.innerHTML = markup;

  body.style.background = `url(/dist/img/menu.jpg) no-repeat`;
  body.style.backgroundSize = `cover`;
  body.style.backgroundPosition = `center`;
}
