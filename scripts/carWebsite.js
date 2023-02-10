import { colorOptions } from "./colorOptions.js"
import { interiorOptions } from "./interiorOptions.js"
import { techOptions } from "./techOptions.js"
import { wheelOptions } from "./wheelOptions.js"
import { Orders } from "./Orders.js"
import { getColor, getInterior, getTech, getWheels } from "./database.js"
 
document.addEventListener(
     "click",
     (event) => {
         if (event.target.name === "orderButton") {
             addCustomOrder()
         }
     }
 )


export const carsRus = () => {
    return `
    
    <h1> Cars-R-Us</h1>
    
    <article class="choices">
       <section class="choices_color options">
            <h2>Colors</h2>
            ${colorOptions()}
       </section>
       <section class="choices_interior options">
            <h2>Interior</h2>
            ${interiorOptions()}
       </section>
       <section class="choices_tech options">
            <h2>Tech Upgrades</h2>
            ${techOptions()}
       </section>
       <section class="choices_wheel options">
            <h2>Wheels</h2>
            ${wheelOptions()}
       </section> 
      </article>
      
      <article>
          <button id="orderButton">Create Custom Order</button>
     </article>
     
     <article class="customOrders">
          <h2>Custom Jewelry Orders</h2>
          ${Orders()}
     </article>`
}