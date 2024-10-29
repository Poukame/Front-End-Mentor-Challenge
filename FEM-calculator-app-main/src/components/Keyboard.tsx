function Keyboard() {
  return (


<div className="background-keypad grid grid-cols-[repeat(4,minmax(50px,100px))] grid-rows-[repeat(5,minmax(50px,_1fr))] mx-auto items-stretch justify-items-stretch gap-4 p-4 rounded-lg">
    <button className="col-start-1 row-start-1 rounded-lg place-content-center text-center">7</button>
    <button className="col-start-2 row-start-1 rounded-lg place-content-center text-center">8</button>
    <button className="rounded-lg col-start-3 row-start-1 place-content-center text-center">9</button>
    <button className="reset text-xl rounded-lg col-start-4 row-start-1 uppercase place-content-center text-center">del</button>
    <button className="rounded-lg col-start-1 row-start-2 place-content-center text-center">4</button>
    <button className="rounded-lg col-start-2 row-start-2 place-content-center text-center">5</button>
    <button className="rounded-lg col-start-3 row-start-2 place-content-center text-center">6</button>
    <button className="rounded-lg col-start-4 row-start-2 place-content-center text-center">+</button>
    <button className="rounded-lg col-start-1 row-start-3 place-content-center text-center">1</button>
    <button className="rounded-lg col-start-2 row-start-3 place-content-center text-center">2</button>
    <button className="rounded-lg col-start-3 row-start-3 place-content-center text-center">3</button>
    <button className="rounded-lg col-start-4 row-start-3 place-content-center text-center">-</button>
    <button className="rounded-lg col-start-1 row-start-4 place-content-center text-center">.</button>
    <button className="rounded-lg col-start-2 row-start-4 place-content-center text-center">0</button>
    <button className="rounded-lg col-start-3 row-start-4 place-content-center text-center">/</button>
    <button className="rounded-lg col-start-4 row-start-4 place-content-center text-center">x</button>
    <button className="reset text-xl rounded-lg col-span-2 col-start-1 row-start-5 uppercase place-content-center text-center">reset</button>
    <button className="equal rounded-lg col-span-2 col-start-3 row-start-5 place-content-center text-center">=</button>
</div>

    
  )
}

export default Keyboard
