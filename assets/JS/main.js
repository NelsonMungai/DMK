const hamburger_icon=document.querySelector('#nav-bar .nav-bar .nav-list .hamburger')
const nav_list=document.querySelector('#nav-bar .nav-bar .nav-list')

hamburger_icon.addEventListener('click',()=>{
    hamburger_icon.classList.toggle('active')
    nav_list.classList.toggle('open')
})

let products={
    data:[
        // hoddies
        {
            productName:'Black and white sleeeved Hoddy.webp',
            category:"Hoddies",
            price:'30',
            image:'USEIMG/Hoddies/Black and white sleeeved Hoddy.webp'
        },
        {
            productName:'Black sleeved Hoddy.webp',
            category:"Hoddies",
            price:'30',
            image:'USEIMG/Hoddies/Black sleeved Hoddy.webp'
        },
        {
            productName:'Regular Red Hoddy.webp',
            category:"Hoddies",
            price:'30',
            image:'USEIMG/Hoddies/Regular Red Hoddy.webp'
        },

        {
            productName:'Regular Grey Hoddy',
            category:"Hoddies",
            price:'30',
            image:'USEIMG/Hoddies/Regular Grey Hoddy.webp'
        },
        {
            productName:'Black sleeved Hoddy.webp',
            category:"Hoddies",
            price:'30',
            image:'USEIMG/Hoddies/HOODY.webp'
        },
        {
            productName:'Regular Red Hoddy.webp',
            category:"Hoddies",
            price:'30',
            image:'USEIMG/Hoddies/Hoddyy4.webp'
        },
        {
            productName:'Regular Grey Hoddy',
            category:"Hoddies",
            price:'30',
            image:'USEIMG/Hoddies/Hoddyy3.webp'
        },
        {
            productName:'Black sleeved Hoddy.webp',
            category:"Hoddies",
            price:'30',
            image:'USEIMG/Hoddies/Hoddyy2.webp'
        },
        {
            productName:'Regular Red Hoddy.webp',
            category:"Hoddies",
            price:'30',
            image:'USEIMG/Hoddies/Hoddy8.webp'
        },
        // caps
        {
            productName:'USEIMG/Caps/Branded Caps1.webp',
            category:"Caps",
            price:'30',
            image:'USEIMG/Caps/Branded Caps1.webp'
        },
        {
            productName:'USEIMG/Caps/Branded Caps1.webp',
            category:"Caps",
            price:'30',
            image:'USEIMG/Caps/Branded Caps2.webp'
        },
        {
            productName:'USEIMG/Caps/Branded Caps8.webp',
            category:"Caps",
            price:'30',
            image:'USEIMG/Caps/Branded Caps3..webp'
        },
        {
            productName:'USEIMG/Caps/Branded Caps8.webp',
            category:"Caps",
            price:'30',
            image:'USEIMG/Caps/Branded Caps4.webp.webp'
        },
        {
            productName:'USEIMG/Caps/Branded Caps8.webp',
            category:"Caps",
            price:'30',
            image:'USEIMG/Caps/Branded Caps5..webp'
        },
        {
            productName:'USEIMG/Caps/Branded Caps8.webp',
            category:"Caps",
            price:'30',
            image:'USEIMG/Caps/Branded Caps6.webp'
        },
        {
            productName:'USEIMG/Caps/Branded Caps7.webp',
            category:"Caps",
            price:'30',
            image:'USEIMG/Caps/Branded Caps7.webp'
        },
        {
            productName:'USEIMG/Caps/Branded Caps8.webp',
            category:"Caps",
            price:'30',
            image:'USEIMG/Caps/Branded Caps8.webp'
        },
        {
            productName:'USEIMG/Caps/Branded Caps7.webp',
            category:"Caps",
            price:'30',
            image:'USEIMG/Caps/Branded Caps7.webp'
        },
        // apollo
        {
            productName:'USEIMG/Apollo/Women Apollo1.webp',
            category:"Apollo",
            price:'30',
            image:'USEIMG/Apollo/apollo.webp'
        },
        {
            productName:'USEIMG/Apollo/ApolloBrandeT.webp',
            category:"Apollo",
            price:'30',
            image:'USEIMG/Apollo/Apollo1.jpg'
        },
        {
            productName:'USEIMG/Apollo/Women Apollo5.webp',
            category:"Apollo",
            price:'30',
            image:'USEIMG/Apollo/Apollo1.webp'
        },
        {
            productName:'USEIMG/Apollo/Women Apollo1.webp',
            category:"Apollo",
            price:'30',
            image:'USEIMG/Apollo/Women Apollo1.webp'
        },
        {
            productName:'USEIMG/Apollo/ApolloBrandeT.webp',
            category:"Apollo",
            price:'30',
            image:'USEIMG/Apollo/Wo.webp'
        },
        {
            productName:'USEIMG/Apollo/Women Apollo5.webp',
            category:"Apollo",
            price:'30',
            image:'USEIMG/Apollo/Women Apollo5.webp'
        },

        {
            productName:'USEIMG/Apollo/Women Apollo5.webp',
            category:"Apollo",
            price:'30',
            image:'USEIMG/Apollo/Apollo4.webp'
        },
        {
            productName:'USEIMG/Apollo/Women Apollo1.webp',
            category:"Apollo",
            price:'30',
            image:'USEIMG/Apollo/Apollo5.webp'
        },
        {
            productName:'USEIMG/Apollo/ApolloBrandeT.webp',
            category:"Apollo",
            price:'30',
            image:'USEIMG/Apollo/Women Apollo4.webp'
        },
        {
            productName:'USEIMG/Apollo/Women Apollo5.webp',
            category:"Apollo",
            price:'30',
            image:'USEIMG/Apollo/Women Apollo2.webp'
        },
        // T-shirt
        {
            productName:'USEIMG/T-shirts/Branded T1.webp',
            category:"T-shirts",
            price:'30',
            image:'USEIMG/T-shirts/Branded T1.webp'
        },
        {
            productName:'USEIMG/T-shirts/Branded T2.webp',
            category:"T-shirts",
            price:'30',
            image:'USEIMG/T-shirts/Branded T2.webp'
        },
        {
            productName:'USEIMG/T-shirts/sixpacks.webp',
            category:"T-shirts",
            price:'30',
            image:'USEIMG/T-shirts/Branded T3.webp'
        },

        {
            productName:'USEIMG/T-shirts/Branded T1.webp',
            category:"T-shirts",
            price:'30',
            image:'USEIMG/T-shirts/Branded T4.webp'
        },
        {
            productName:'USEIMG/T-shirts/Branded T2.webp',
            category:"T-shirts",
            price:'30',
            image:'USEIMG/T-shirts/Branded T5.webp'
        },
        {
            productName:'USEIMG/T-shirts/sixpacks.webp',
            category:"T-shirts",
            price:'30',
            image:'USEIMG/T-shirts/brandedT1.webp'
        },

        {
            productName:'USEIMG/T-shirts/Branded T1.webp',
            category:"T-shirts",
            price:'30',
            image:'USEIMG/T-shirts/brandedT2.webp'
        },
        {
            productName:'USEIMG/T-shirts/Branded T2.webp',
            category:"T-shirts",
            price:'30',
            image:'USEIMG/T-shirts/front_design_idea (1).webp'
        },
        {
            productName:'USEIMG/T-shirts/sixpacks.webp',
            category:"T-shirts",
            price:'30',
            image:'USEIMG/T-shirts/sixpacks.webp'
        },
        // Shirt
        {
            productName:'USEIMG/Shirts/Dress-Shirt-PNG.png',
            category:"Shirts",
            price:'30',
            image:'USEIMG/Shirts/Dress-Shirt-PNG.png'
        },
        {
            productName:'USEIMG/Shirts/Tailored Office Shirts.png',
            category:"Shirts",
            price:'30',
            image:'USEIMG/Shirts/Tailored Office Shirts.png'
        }

    ]
};

for (let i of products.data){
    // create  a card
    let card=document.createElement('div');
    // card category and should be hidden initially

    card.classList.add('card',i.category,"hide");
    // create image container
    let imgContainer=document.createElement('div');
    imgContainer.classList.add('image-container')
    // img tag
    let image=document.createElement('img')
    // /src
    image.setAttribute('src',i.image);
    imgContainer.appendChild(image);
    card.append(imgContainer);

    

    // add container
    let container=document.createElement('div');
    container.classList.add('container');

    // product name
    let name=document.createElement('h4')
    name.classList.add('product-name')
    name.innerText=i.productName

    container.appendChild(name)

    card.appendChild(container)
    // price

    let price=document.createElement('h5')
    price.classList.add('price')
    price.innerText=`$ ${i.price}`
    container.appendChild(price)

    document.getElementById('products').appendChild(card) 
}
// filter product method
// paramters passed should be equal to the value of the category of our item
function filterProduct(value){
    // button class code 
    let buttons=document.querySelectorAll('.button-value');
    buttons.forEach(button=>{
        // check if value equla innertext
        if(value.toUpperCase()== button.innerText.toUpperCase()){
            button.classList.add('active')
        }
        else{
            button.classList.remove('active')
        }
    })
    // select all cards
    let elements=document.querySelectorAll('.card')
    // loop thru all
    elements.forEach(element=>{
        if(value=='all'){
            element.classList.remove('hide')
        }
        else{
            // display element based on category
            if(element.classList.contains(value)){
                element.classList.remove('hide')
            }
            else{
                // hide elements
                element.classList.add('hide');
            }
        }
    })
}

// initial display all onloading
window.onload=()=>{
    filterProduct('all')
}

function scrollTop(){
    window.scrollTo(0,0);
}