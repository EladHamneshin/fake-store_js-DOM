let data = [];
let productsElements = []; // {productCard, product}
const categoriesBtns = [];
const categories = ['All categories', 'Men', 'Women', 'Jewelery', 'Electronics'];
const URL = 'https://fake-store-mq2a.onrender.com'
const PRODUCT_ENDPOINT = '/products'
/*----------------- DOM Elements creators ------------------------------*/

function createElement(tag, innerText=''){
    const element = document.createElement(tag)
    element.innerText = innerText
    return element
}

function createHeader(){
    const header = createElement('header');

    const h4 = createElement('h4', 'inventory Managment');

    const iconsContainer = createElement('div');
    iconsContainer.id = 'header-icons-container';

    const homeIcon = createElement('i', 'home');
    homeIcon.classList.add('material-icons');
    homeIcon.id = 'home-icon';
    homeIcon.addEventListener('click', homeIconClickHandler);

    const addIcon = createElement('i', 'add_circle_outline');
    addIcon.classList.add('material-icons');
    addIcon.id = 'add-icon';
    addIcon.addEventListener('click', addIconClickHandler);

    iconsContainer.append(homeIcon, addIcon);
    header.append(h4, iconsContainer);

    return header;
}

function createSearchLine(){
    const searchLine = createElement('div');
    searchLine.id ='search-line-container';

    const categories = createCategories();

    const searchBar = createElement('div');
    searchBar.classList.add('search-bar');

    const searchInputElement = createElement('input');
    searchInputElement.classList.add('search-input');
    searchInputElement.placeholder = 'Search'; 

    const searchIcon = createElement('i', 'search');
    searchIcon.classList.add('material-icons');
    searchIcon.id = 'search-icon';
    searchIcon.addEventListener('click', event => searchClickHandler(event, searchInputElement));

    searchBar.append(searchInputElement, searchIcon);
    searchLine.append(categories, searchBar);

    return searchLine;
}

function createCategories(){
    const categoriesContainer = createElement('div')
    categoriesContainer.classList.add('categories-container')

    categories.forEach(category => {
        const categoryElement = createElement('button', category);
        if (category === categories[0])
            categoryElement.classList.add('active-category');
        categoryElement.classList.add('category');
        categoryElement.addEventListener('click', event => categoryClickHandler(event, category));
        categoriesContainer.append(categoryElement);
        categoriesBtns.push(categoryElement);
    });

    return categoriesContainer;
}

function createProductCards(products){
    const productsContainer = createElement('div');
    productsContainer.id = 'products-container';

    products.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.append(productCard);
    });

    return productsContainer;
}

function createProductCard(product){
    const productCard = createElement('div');
    productCard.classList.add('product-card');
    productCard.id = product.id;
    
    const productImg = createElement('img');
    productImg.classList.add('product-img');
    productImg.src = product.image;
    productImg.alt = product.title;
    productImg.addEventListener('click', event => productClickHandler(event, product));

    const detailsContainer = createElement('div');
    detailsContainer.classList.add('product-details-container');

    const productTitle = createElement('h3', product.title);
    productTitle.classList.add('product-title');

    const productIconsContainer = createElement('div');
    productIconsContainer.classList.add('product-icons-container');

    const editIcon = createElement('i', 'edit');
    editIcon.classList.add('material-icons');
    editIcon.addEventListener('click', event => editIconClickHandler(event, product));

    const deleteIcon = createElement('i', 'delete');
    deleteIcon.classList.add('material-icons');
    deleteIcon.addEventListener('click', event => removeProductCardHandler(event, productCard));

    productIconsContainer.append(editIcon, deleteIcon);
    detailsContainer.append(productTitle, productIconsContainer);
    productCard.append(productImg, detailsContainer);


    productsElements.push({productCard , product});

    return productCard;

}

function createFooter(){
    const footer = createElement('footer');

    const footerText = createElement('p', '© 2023 FakeStoreAPI');
    footerText.classList.add('footer-text');

    footer.append(footerText);

    return footer;
}

function createProductDetailsPage(product){
    const productDetails = createElement('div');
    productDetails.classList.add('details-page-container');

    const h = createElement('h1', 'Product Details');

    const productDetailsCard = createElement('div');
    productDetailsCard.classList.add('details-page-card');

    const productImg = createElement('img');
    productImg.src = product.image;
    productImg.alt = product.title;
    productImg.classList.add('details-page-img');
    
    const detailsContainer = document.createElement('div');
    const productTitleHeadline = createElement('h3', "Title");
    const productTitle = createElement('p', product.title);
    const productDescriptionHeadline = createElement('h3', 'Description');
    const productDescription = createElement('p', product.description);
    const productCategoryHeadline = createElement('h3', 'Category');
    const productCategory = createElement('p', product.category);
    const productPriceHeadline = createElement('h3', 'Price');
    const productPrice = createElement('p', product.price);
    const productQuantityHeadline = createElement('h3', 'Quantity');
    const productQuantity = createElement('p', product.quantity);

    detailsContainer.append(productTitleHeadline, productTitle, productDescriptionHeadline, 
        productDescription, productCategoryHeadline, productCategory, productPriceHeadline, 
        productPrice, productQuantityHeadline, productQuantity);
    productDetailsCard.append(productImg, detailsContainer);
    productDetails.append(h, productDetailsCard);
    return productDetails;

}

function createEditProductPage(product){
    const editProductPage = createElement('div');
    editProductPage.classList.add('form-container');

    const editProductPageForm = createElement('form');
    editProductPageForm.classList.add('edit-product-page-form');

    const h1 = createElement('h1', 'Edit Product');
    const productTitleLabel = createElement('label', 'Title');
    const productTitleInput = createElement('input');
    productTitleInput.type = 'text';
    productTitleInput.value = product.title;
    productTitleInput.id = 'product-title-input';
    productTitleInput.required = true;

    const productCategoryLabel = createElement('label', 'Category');
    const productCategoryInput = createElement('input');
    productCategoryInput.type = 'text';
    productCategoryInput.value = product.category;
    productCategoryInput.id = 'product-category-input';
    productTitleInput.required = true;

    const productPriceLabel = createElement('label', 'Price');
    const productPriceInput = createElement('input');
    productPriceInput.type = 'number';
    productPriceInput.value = product.price;
    productPriceInput.step = '0.01';
    productPriceInput.id = 'product-price-input';
    productPriceInput.required = true;

    const productImageLabel = createElement('label', 'Image URL');
    const productImageInput = createElement('input');
    productImageInput.type = 'url';
    productImageInput.value = product.image;
    productImageInput.id = 'product-image-input';
    productImageInput.required = true;

    const productQuantityLabel = createElement('label', 'Quantity');
    const productQuantityInput = createElement('input');
    productQuantityInput.type = 'number';
    productQuantityInput.value = product.quantity;
    productQuantityInput.id = 'product-quantity-input';
    productQuantityInput.required = true;


    const productDescriptionLabel = createElement('label', 'Description');
    const productDescriptionInput = createElement('textarea');
    productDescriptionInput.value = product.description;
    productDescriptionInput.id = 'product-description-input';
    productDescriptionInput.required = true;

    const submitBtn = createElement('button', 'edit');
    submitBtn.type = 'submit';
    submitBtn.addEventListener('click', event => editProductPageSubmitHandler(event, product, editProductPageForm));

    editProductPageForm.append(h1, productTitleLabel, productTitleInput,
         productCategoryLabel, productCategoryInput, productPriceLabel,
          productPriceInput, productImageLabel, productImageInput,
           productQuantityLabel, productQuantityInput, 
           productDescriptionLabel, productDescriptionInput, submitBtn);
    editProductPage.append(editProductPageForm);

    return editProductPage;
}

function createAddProductPage(){
    const addProductPage = createElement('div');
    addProductPage.classList.add('form-container');


    const addProductPageForm = createElement('form');
    addProductPageForm.classList.add('add-product-page-form');

    const h1 = createElement('h1', 'Add Product');
    const productTitleLabel = createElement('label', 'Title');
    const productTitleInput = createElement('input');
    productTitleInput.type = 'text';
    productTitleInput.placeholder = 'Enter title';
    productTitleInput.id = 'new-product-title-input';
    productTitleInput.required = true;

    const productCategoryLabel = createElement('label', 'Category');
    const productCategoryInput = createElement('input');
    productCategoryInput.type = 'text';
    productCategoryInput.placeHolder = 'Enter category';
    productCategoryInput.id = 'new-product-category-input';
    productTitleInput.required = true;

    const productPriceLabel = createElement('label', 'Price');
    const productPriceInput = createElement('input');
    productPriceInput.type = 'number';
    productPriceInput.placeHolder = 'Enter price';
    productPriceInput.step = '0.01';
    productPriceInput.id = 'new-product-price-input';
    productPriceInput.required = true;

    const productImageLabel = createElement('label', 'Image URL');
    const productImageInput = createElement('input');
    productImageInput.type = 'url';
    productImageInput.placeHolder = 'Enter image URL';
    productImageInput.id = 'new-product-image-input';
    productImageInput.required = true;

    const productQuantityLabel = createElement('label', 'Quantity');
    const productQuantityInput = createElement('input');
    productQuantityInput.type = 'number';
    productQuantityInput.placeHolder = 'Enter quantity';
    productQuantityInput.id = 'new-product-quantity-input';
    productQuantityInput.required = true;


    const productDescriptionLabel = createElement('label', 'Description');
    const productDescriptionInput = createElement('textarea');
    productDescriptionInput.placeHolder = 'Enter description';
    productDescriptionInput.id = 'new-product-description-input';
    productDescriptionInput.required = true;

    const submitBtn = createElement('button', 'add');
    submitBtn.type = 'submit';
    submitBtn.addEventListener('click', event => addProductPageSubmitHandler(event, addProductPageForm));

    addProductPageForm.append(h1, productTitleLabel, productTitleInput,
         productCategoryLabel, productCategoryInput, productPriceLabel,
          productPriceInput, productImageLabel, productImageInput,
           productQuantityLabel, productQuantityInput, 
           productDescriptionLabel, productDescriptionInput, submitBtn);

    addProductPage.append(addProductPageForm);

    return addProductPage;
}


/*--------------- Event Handlers -------------*/

function homeIconClickHandler(event){
    backHome();
}

function addIconClickHandler(event){
    const addProductPage = createAddProductPage();
    emptyMain();
    main.append(addProductPage);
}

function removeProductCardHandler(event, productCard){
    const productToDel = productsElements.find((pe) => pe.productCard.id === productCard.id).product;
    console.log(productsElements);
    console.log(productToDel);
    // remove from server
    deleteProduct(productToDel).then(res =>{
        productCard.remove();
        // remove from list
        data = data.filter(product => product.id !== productCard.id);
        productsElements = productsElements.filter(product => product.productCard.id !== productCard.id); 
    }).catch(err => console.log(err));
}

function categoryClickHandler(event, category){
    const categoryBtn = event.target;
    removeActiveCategory(categoriesBtns);
    categoryBtn.classList.add('active-category');
    const categoriesDict = {Men : "men's clothing", Women: "women's clothing", Jewelery: 'jewelery', Electronics: 'electronics'};

    for(let i = 0; i < productsElements.length; i++){
        if(category === categories[0]){// All categories
            if(productsElements[i].productCard.classList.contains('hidden'))
                productsElements[i].productCard.classList.remove('hidden');
        }
        else if(productsElements[i].product.category === categoriesDict[category]){
            if(productsElements[i].productCard.classList.contains('hidden'))
                productsElements[i].productCard.classList.remove('hidden');
        }
        else{
            if(!productsElements[i].productCard.classList.contains('hidden'))
                productsElements[i].productCard.classList.add('hidden');
        }
    }
}

function searchClickHandler(event, searchInputElement){
    const searchInput = searchInputElement.value.toLowerCase();
    for(let i = 0; i < productsElements.length; i++){
        if(!productsElements[i].product.title.toLowerCase().includes(searchInput))
         if(!productsElements[i].productCard.classList.contains('hidden'))
                productsElements[i].productCard.classList.add('hidden');
    }
    searchInputElement.value = '';
}

function productClickHandler(event, product){
    const productDetails = createProductDetailsPage(product);
    emptyMain();
    main.append(productDetails);
}

function editIconClickHandler(event, product){
    const addProductPage = createEditProductPage(product);
    emptyMain();
    main.append(addProductPage);
}

function editProductPageSubmitHandler(event, product, form){
    event.preventDefault();
    const productTitle = form.querySelector('#product-title-input').value;
    const productCategory = form.querySelector('#product-category-input').value;
    const productPrice = form.querySelector('#product-price-input').value;
    const productImage = form.querySelector('#product-image-input').value;
    const productQuantity = form.querySelector('#product-quantity-input').value;
    const productDescription = form.querySelector('#product-description-input').value;

    const editedProduct = {
        id: product.id,
        title: productTitle,
        category: productCategory,
        price: productPrice,
        image: productImage,
        quantity: productQuantity,
        description: productDescription
    };

    putProduct(editedProduct).then(res => {
        product.title = productTitle;
        product.category = productCategory;
        product.price = productPrice;
        product.image = productImage;
        product.quantity = productQuantity;
        product.description = productDescription;
    
        backHome();
    }).catch(err => console.log(err));

    
}

function addProductPageSubmitHandler(event, form){
    event.preventDefault();
    const title = form.querySelector('#new-product-title-input').value;
    const category = form.querySelector('#new-product-category-input').value;
    const price = form.querySelector('#new-product-price-input').value;
    const image = form.querySelector('#new-product-image-input').value;
    const quantity = form.querySelector('#new-product-quantity-input').value;
    const description = form.querySelector('#new-product-description-input').value;
    const product = {
        id: data.length + 1, 
        title, 
        category, 
        price, 
        image, 
        quantity, 
        description
    };
    postProduct(product).then((res)=>{
        console.log(res);
        data.push(product);
        const productCard = createProductCard(product);
        productsContainer.append(productCard);
        productsElements.push({productCard , product});
        backHome();
    }
    ).catch(err => console.log(err));

}


/*------------------------------------------------------------------------------------------ */
function emptyMain(){
    searchLine.remove();
    while(main.firstChild){
        main.removeChild(main.firstChild);
    }
}

function removeActiveCategory(categoriesBtns){
    for(let i = 0; i < categoriesBtns.length; i++){
        if(categoriesBtns[i].classList.contains('active-category'))
            categoriesBtns[i].classList.remove('active-category');
    }
}

function backHome(){
    emptyMain();
    main.append(h, productsContainer);
    root.insertBefore(searchLine, root.children[1]);
}


/*----------------------------------- Server request ---------------------------------*/
async function getProducts(){
    const response = await fetch(`${URL}${PRODUCT_ENDPOINT}`);
    const products = await response.json();
    return products;
}

async function postProduct(product){
    const response = await fetch(`${URL}${PRODUCT_ENDPOINT}`, {method: 'POST', headers: { "Content-Type": "application/json",}, body: JSON.stringify(product)});
    const newProduct = await response.json();
    return newProduct;
}

async function putProduct(product){
    const response = await fetch(`${URL}${PRODUCT_ENDPOINT}/${product.id}`, {method: 'PUT', headers: { "Content-Type": "application/json",}, body: JSON.stringify(product)});
    const updatedProduct = await response.json();
    return updatedProduct;
}

async function deleteProduct(product){
    const response = await fetch(`${URL}${PRODUCT_ENDPOINT}/${product.id}`, {method: 'DELETE'});
    const deletedProduct = await response.json();
    return deletedProduct;
}




/*-----------------------------------  main  -----------------------------------------*/
const root = document.getElementsByClassName('root')[0];
const searchLine = createSearchLine();
let productsContainer;
const header = createHeader();
const main = document.createElement('main');
const h = createElement('h1', 'Products');
const footer = createFooter();
getProducts().then(products => {
    data = products;
    productsContainer = createProductCards(data);
    main.append(h, productsContainer);
    root.append(header, searchLine, main , footer);
}).catch(err => console.log(err));




