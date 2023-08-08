const data = [
    {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: { rate: 3.9, count: 120 }
    },
    {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        rating: { rate: 4.1, count: 259 }
    },
    {
        id: 3,
        title: 'Mens Cotton Jacket',
        price: 55.99,
        description: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        rating: { rate: 4.7, count: 500 }
    },
    {
        id: 4,
        title: 'Mens Casual Slim Fit',
        price: 15.99,
        description: 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        rating: { rate: 2.1, count: 430 }
    },
    {
        id: 5,
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 4.6, count: 400 }
    },
    {
        id: 6,
        title: 'Solid Gold Petite Micropave ',
        price: 168,
        description: 'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 3.9, count: 70 }
    },
    {
        id: 7,
        title: 'White Gold Plated Princess',
        price: 9.99,
        description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 3, count: 400 }
    },
    {
        id: 8,
        title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
        price: 10.99,
        description: 'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 1.9, count: 100 }
    },
    {
        id: 9,
        title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
        price: 64,
        description: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
        rating: { rate: 3.3, count: 203 }
    },
    {
        id: 10,
        title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
        price: 109,
        description: 'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/ write speeds of up to 535MB / s / 450MB / s(Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.) ',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
        rating: { rate: 2.9, count: 470 }
    },
    {
        id: 11,
        title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
        price: 109,
        description: '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC(Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
        rating: { rate: 4.8, count: 319 }
    },
    {
        id: 12,
        title: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
        price: 114,
        description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
        rating: { rate: 4.8, count: 400 }
    },
    {
        id: 13,
        title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
        price: 599,
        description: '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        rating: { rate: 2.9, count: 250 }
    },
    {
        id: 14,
        title: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
        price: 999.99,
        description: '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag', category: 'electronics',
        image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
        rating: { rate: 2.2, count: 140 }
    },
    {
        id: 15,
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        description: 'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
        rating: { rate: 2.6, count: 235 }
    },
    {
        id: 16,
        title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        description: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
        rating: { rate: 2.9, count: 340 }
    },
    {
        id: 17,
        title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
        price: 39.99,
        description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.", category: "women's clothing",
        image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
        rating: { rate: 3.8, count: 679 }
    },
    {
        id: 18,
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        description: '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        rating: { rate: 4.7, count: 130 }
    },
    {
        id: 19,
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        description: '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
        rating: { rate: 4.5, count: 146 }
    },
    {
        id: 20,
        title: 'DANVOUY Womens T Shirt Casual Cotton Short',
        price: 12.99,
        description: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual / Office / Beach / School / Home / Street.Season: Spring, Summer, Autumn, Winter.', category: "women's clothing",
        image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
        rating: { rate: 3.6, count: 145 }
    }
]

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
    productCard.remove();
    // remove from list
    data = data.filter(product => product.id !== productCard.id);
    productsElements = productsElements.filter(product => product.productCard.id !== productCard.id); 
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

    product.title = productTitle;
    product.category = productCategory;
    product.price = productPrice;
    product.image = productImage;
    product.quantity = productQuantity;
    product.description = productDescription;

    backHome();
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
    data.push(product);
    const productCard = createProductCard(product);
    productsContainer.append(productCard);
    productsElements.push({productCard , product});
    backHome();
}


/*------------------------------------------------------------------------------------------ */

function addRandomQuantity(products){
    products.forEach(product => {
        product.quantity = Math.floor(Math.random() * 100);
        return product;
    });
}

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


/*-----------------------------------  main  -----------------------------------------*/
addRandomQuantity(data);
const root = document.getElementsByClassName('root')[0];
const productsElements = []; // {productCard, product}
const categoriesBtns = [];
const categories = ['All categories', 'Men', 'Women', 'Jewelery', 'Electronics'];
const searchLine = createSearchLine();
const productsContainer = createProductCards(data);
const header = createHeader();
const main = document.createElement('main');
const h = createElement('h1', 'Products');
const footer = createFooter();
main.append(h, productsContainer);
root.append(header, searchLine, main , footer);
