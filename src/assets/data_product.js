import p1_img from './product_1.png'
import p2_img from './product_2.png'
import p3_img from './product_3.png'
import p4_img from './product_4.png'

let data_product=[
  {
    id:1,
    count:1,
    name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image:p1_img,
    new_price:50.00,
    old_price:80.50,
  },
  {id:2,
    name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image:p2_img,
    new_price:85.00,
    old_price:120.50,
  },
  {id:3,
    name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image:p3_img,
    new_price:60.00,
    old_price:100.50,
  },
  {id:4,
    name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image:p4_img,
    new_price:100.00,
    old_price:150.00,
  },
]

for(let item of data_product){
item.count=1;
if(item.id%2===1){
  item.new_price=(item.new_price+item.old_price)/2-5;
}
else{
  item.new_price=(item.new_price+item.old_price)/2-10;
}

}

export default data_product;
