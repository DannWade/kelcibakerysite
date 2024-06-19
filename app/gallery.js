import Image from 'next/image'
import macaron from "../public/images/1.JPG"
import oreoCake from "../public/images/4.JPG"
import carrotCake from "../public/images/3.JPG"
import customCake from "../public/images/7.JPG"
import birthdayCake from "../public/images/8.JPG"
import galaxyCake from "../public/images/9.JPG"

let bakedGoods = [
    {title:"Banana Split Macarons",image:macaron,description:"Classic Italian macaron filled with vanilla buttercream and carmalized Bananas, dipped in a dark chocolate ganache"},
    {title:"Oreo Cake",image:oreoCake,description:"A layered vanilla and chocolate cake, filled with whipped oreo cream. coverded in decadant buttercream with a dark chocolate ganache drip. topped wit crushed oreo bits"},
    {title:"Carrot Cake",image:carrotCake,description:"Classic carrot cake, cannot be any better. A sweet lightly spiced cake with toasted nuts and covered in a classic cream cheese frosting."},
    {title:"Custom Cake",image:customCake,description:"This is from an app called My singing Monsters, the cake is a white cake; a blueberry compote fill, decorated with a meringue buttercream. "},
    {title:"Birthday Cake",image:birthdayCake,description:"Classic white cake, american buttercream filling and frosting."},
    {title:"Galaxy Cake",image:galaxyCake,description:"Decadant chocolate cake and chocolate filling with an out of this world mirrior glaze."},
]

export default function Gallery({position}){
    return(
        <>
        <div class="w-3/4">
        <div class="flex flex-col">
            <div class=" lg:p-5 lg:w-1/2 self-center">
                 <Image class="rounded-full p-2 lg:p-10 bg-miamiTeal" src={bakedGoods[Math.abs(position%bakedGoods.length)].image} alt='cake'/>
            </div>
            <div class=" flex flex-col lg:p-2 justify-center mt-7 lg:mt-0">
                <h2 class="font-bold font-serif flex justify-center text-center text-3xl">{bakedGoods[Math.abs(position%bakedGoods.length)].title}</h2>
                <p class=" flex justify-center items-center lg:m-7 text-center text-xl mt-3 lg:mt-0">{bakedGoods[Math.abs(position%bakedGoods.length)].description}</p>
            </div>
            </div>
         </div>
        </>
        // bakedGoods.map((x)=><>
        // <div class="w-1/3 border">
        //     <h2 class="flex justify-center my-5 text-3xl">{x.title}</h2>
        //     <div class="p-5">
        //         <Image class="p-10 bg-amber-100" src={x.image}/>
        //     </div>
        //     <p class="flex justify-center text-xl">{x.description}</p>
        // </div>
        // </>
        // )
)}