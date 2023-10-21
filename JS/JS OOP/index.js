// console.log("Hello World");

//object litreal syntax
// const circle={
//     radius:1,
//     location:{
//         x:1,
//         y:1
//     },
//     draw: function(){
//         console.log('draw');
//     }
// };
// circle.draw();

//factory function
// function createcircle(radius)
// {
//     return{radius,draw:function(){
//         console.log('circle');
//     }
// };

// }
// const circle=createcircle(1);
// circle.draw();

//construstor function
// function Circle(radius){
//     this.radius=radius;
//     this.draw=function(){
//         console.log('draw');
//     }
// }
// const another =new Circle(1);

let number={value:10};
function increase(number)
{
    number.value++;
}
increase(number);
console.log(number);