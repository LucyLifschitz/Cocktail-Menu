const menu = [
  {
    id: 1,
    title: "Cosmopolitan",
    base: "vodka",
    price: 15,
    img: "img/cosmopolitan.jpeg",
    ingredients: "citrus vodka, Cointreau, lime juice, cranberry juice",
  },
  {
    id: 2,
    title: "Vesper",
    base: "gin",
    price: 16,
    img: "img/classic-vesper.jpeg",
    ingredients: "gin, vodka, Lillet blanc",
  },
  {
    id: 3,
    title: "French 75",
    base: "gin",
    price: 14,
    img: "img/french-75.jpeg",
    ingredients: "gin, simple syrup, lemon juice, Champagne",
  },
  {
    id: 4,
    title: "Gimlet",
    base: "vodka",
    price: 14,
    img: "img/gimlet.jpeg",
    ingredients: "vodka, simple syrup, lime juice",
  },
  {
    id: 5,
    title: "Manhattan",
    base: "whiskey",
    price: 16,
    img: "img/manhattan.jpeg",
    ingredients: "rye whiskey, sweet vermouth, Angostura bitters",
  },
  {
    id: 6,
    title: "Martini",
    base: "vodka",
    price: 15,
    img: "img/martini.jpeg",
    ingredients: "vodka, dry vermouth, lemon peel or olive",
  },
  {
    id: 7,
    title: "Moscow Mule",
    base: "vodka",
    price: 14.5,
    img: "img/moscow-mule.jpeg",
    ingredients: "vodka, ginger beer, lime juice",
  },
  {
    id: 8,
    title: "Negroni",
    base: "gin",
    price: 15.5,
    img: "img/negroni.jpeg",
    ingredients: "gin, Campari, sweet vermouth",
  },
  {
    id: 9,
    title: "Old Fashioned",
    base: "whiskey",
    price: 16,
    img: "img/old-fashioned.jpeg",
    ingredients: "rye whiskey, Angostura bitters, sugar, orange twist",
  },
  {
    id: 10,
    title: "Whiskey Sour",
    base: "whiskey",
    price: 15,
    img: "img/whiskey-sour.jpeg",
    ingredients: "whiskey, lemon juice, sugar, egg white",
  },
];
const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

//load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return ` <article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title} />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-ingredients">
        ${item.ingredients}
      </p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const bases = menu.reduce(
    function (values, item) {
      if (!values.includes(item.base)) {
        values.push(item.base);
      }
      return values;
    },
    ["all"]
  );
  const baseBtns = bases
    .map(function (base) {
      return ` <button class="filter-btn" type="button" data-id=${base}>${base}</button>`;
    })
    .join("");
  container.innerHTML = baseBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");

  //filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const base = e.target.dataset.id;
      const menuBase = menu.filter(function (menuItem) {
        if (menuItem.base === base) {
          return menuItem;
        }
      });
      if (base === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuBase);
      }
    });
  });
}
