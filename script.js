let titleFirst = [
  {
    title: 'Computer',
    text: 'Lorem ipsum dolor sit',
    imgUrl: './images/computer.png',
    imgAlt: 'Computer',
    imgTitle: 'Computer',
    bgcolor: '#f0cc50',
  },
  {
    title: 'Music',
    text: 'Lorem ipsum dolor sit',
    imgUrl: './images/music.png',
    imgAlt: 'Music',
    imgTitle: 'Music',
    bgcolor: '#f14d4d',
  },
  {
    title: 'Website',
    text: 'Lorem ipsum dolor sit',
    imgUrl: './images/website.png',
    imgAlt: 'Website',
    imgTitle: 'Website',
    bgcolor: '#00a8a9',
  }
]

let titleSecond = [
  {
    title: 'Android App',
    text: 'Lorem ipsum dolor sit',
    imgUrl: './images/android.png',
    imgAlt: 'Android App',
    imgTitle: 'Android App',
    bgcolor: '#8cc63e',
  },
  {
    title: 'iOs App',
    text: 'Lorem ipsum dolor sit',
    imgUrl: './images/ios.png',
    imgAlt: 'iOs App',
    imgTitle: 'iOs App',
    bgcolor: '#2e64bd',
  },
  {
    title: 'Other',
    text: 'Lorem ipsum dolor sit',
    imgUrl: './images/other.png',
    imgAlt: 'Other',
    imgTitle: 'Other',
    bgcolor: '#315f6d',
  },
]

let productFirst = [
  {
    img: './images/hardDisk.png',
    title: 'Hard Disk',
    alt: 'Hard Disk',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta libero',
    price: '$70.00'
  },
  {
    img: './images/gameRemote.png',
    title: 'Game Remote',
    alt: 'Game Remote',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta libero',
    price: '$40.00',
  },
  {
    img: './images/cdDvd.png',
    title: 'CD / DVD',
    alt: 'CD / DVD',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta libero',
    price: '$10.00',
  }
]

let productSecond = [
  {
    img: './images/laptop.png',
    title: 'Laptop',
    alt: 'Laptop',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta libero',
    price: '$200.00',
    salePrice: '$250.00'
  },
  {
    img: './images/books.png',
    title: 'Books',
    alt: 'Books',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta libero',
    price: '$20.00',
    salePrice: '$30.00'
  },
  {
    img: './images/camera.png',
    title: 'Camera',
    alt: 'Camera',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta libero',
    price: '$50.00',
  }
]

// Start блока welcome
function createTileItem(data) {
  const tileItem = document.createElement('div');
  tileItem.classList.add("tile__item");
  tileItem.style.borderWidth = '1px';
  tileItem.style.borderStyle = 'solid';
  tileItem.style.borderColor = data.bgcolor;

  const tileItemBlock = document.createElement('div');
  tileItemBlock.classList.add("tile__item_block");
  tileItemBlock.style.backgroundColor = data.bgcolor;

  const pTitle = document.createElement('p');
  pTitle.classList.add("title");
  pTitle.textContent = data.title;

  const pText = document.createElement('p');
  pText.classList.add("text");
  pText.textContent = data.text;

  const iFolder = document.createElement('i');
  iFolder.classList.add("fa");
  iFolder.classList.add("fa-folder-open-o");

  const tileItemImg = document.createElement('div');
  tileItemImg.classList.add("tile__item_img");

  const img = document.createElement('img');
  img.setAttribute('src', data.imgUrl);
  img.setAttribute('alt', data.imgAlt);
  img.setAttribute('title', data.imgTitle);


  tileItemBlock.appendChild(pTitle);
  tileItemBlock.appendChild(pText);
  tileItemBlock.appendChild(iFolder);
  tileItem.appendChild(tileItemBlock);
  tileItemImg.appendChild(img);
  tileItem.appendChild(tileItemImg);

  return tileItem;
};

function createTile(dataArr) {
  const blockTile = document.querySelectorAll('.block__tile')[0];

  const tile = document.createElement('div');
  tile.classList.add("tile");

  dataArr.forEach(elm => {
    const tileItem = createTileItem(elm);
    tile.appendChild(tileItem);
  })
  blockTile.appendChild(tile);
}

createTile(titleFirst);
createTile(titleSecond);
// Finish блока welcome


// Start блока Products

function createProductsTile(data) {
  const products = document.querySelectorAll('.products')[0];

  const productsTile = document.createElement('div');
  productsTile.classList.add("products__tile");

  const productsTileImg = document.createElement('div');
  productsTileImg.classList.add("products__tile_img");
  const img = document.createElement('img');
  img.setAttribute('src', data.img);
  img.setAttribute('alt', data.title);
  img.setAttribute('title', data.alt);

  const h4 = document.createElement('h4');
  h4.textContent = data.title;

  const text = document.createElement('p');
  text.classList.add("text");
  text.textContent = data.text;

  //Блок с ценами (без и со скидкой)

  const price = document.createElement('p');
  const blockSalePrice = document.createElement('div');

  //В if проверяем наличие скидки и делаем "макет" для блока со скидкой
  if (data.salePrice) {

    blockSalePrice.classList.add("block__sale-price");

    price.classList.add("price");
    price.textContent = data.price;

    const salePrice = document.createElement('p');
    salePrice.classList.add("sale-price");
    salePrice.textContent = data.salePrice;
    blockSalePrice.appendChild(price);
    blockSalePrice.appendChild(salePrice);

  } else {
    price.classList.add("price");
    price.textContent = data.price;
  }
  // Finish if

  const button = document.createElement('button');
  button.classList.add("common-button");
  button.classList.add("shop");

  const iShop = document.createElement('i');
  iShop.classList.add("fa");
  iShop.classList.add("fa-shopping-cart");

  const iPlus = document.createElement('i');
  iPlus.classList.add("fa");
  iPlus.classList.add("fa-plus");

  // ---------------
  const addBlock = document.createElement('div');
  addBlock.classList.add("add__block");

  const like = document.createElement('div');
  like.classList.add("like");
  const iLike = document.createElement('i');
  iLike.classList.add("fa");
  iLike.classList.add("fa-heart");
  const pLike = document.createElement('p');
  pLike.textContent = 'Add to wishlist';

  const compare = document.createElement('div');
  compare.classList.add("compare");
  const iCompare = document.createElement('i');
  iCompare.classList.add("fa");
  iCompare.classList.add("fa-files-o");
  const pCompare = document.createElement('p');
  pCompare.textContent = 'Add to Compare';
// ---------------


  productsTile.appendChild(productsTileImg);
  productsTileImg.appendChild(img);
  productsTile.appendChild(h4);
  productsTile.appendChild(text);

  // appendChild для условия if (для цен)
  if (data.salePrice) {
    productsTile.appendChild(blockSalePrice);
  } else {
    productsTile.appendChild(price);
  }

  productsTile.appendChild(button);
  button.appendChild(iShop);
  button.appendChild(iPlus);

  productsTile.appendChild(addBlock);
  addBlock.appendChild(like);
  like.appendChild(iLike);
  like.appendChild(pLike);
  addBlock.appendChild(compare);
  compare.appendChild(iCompare);
  compare.appendChild(pCompare);




  return productsTile;
}





//функция для перебора массива с объектами
function productsTile(dataArr, index) {

  const products = document.querySelectorAll('.products')[index];

  dataArr.forEach(elm => {
    const productsTile = createProductsTile(elm);
    products.appendChild(productsTile);
  })
}

productsTile(productFirst, 0);
productsTile(productSecond, 1);

// Finish блока Products;