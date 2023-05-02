import React from "react";
import s from "./Menu.module.css";
import {NavLink, useHistory} from "react-router-dom";


const Menu = (props) => {


    const history = useHistory()

    const plusClicks1 = () => {
        let clicks = document.getElementById('clicks1').innerHTML;
        let a = Number(clicks)
        a++
        document.getElementById('clicks1').innerHTML = String(a)
    }

    const plusClicks2 = () => {
        let clicks = document.getElementById('clicks2').innerHTML;
        let a = Number(clicks)
        a++
        document.getElementById('clicks2').innerHTML = String(a)
    }

    const plusClicks3 = () => {
        let clicks = document.getElementById('clicks3').innerHTML;
        let a = Number(clicks)
        a++
        document.getElementById('clicks3').innerHTML = String(a)
    }

    const plusClicks4 = () => {
        let clicks = document.getElementById('clicks4').innerHTML;
        let a = Number(clicks)
        a++
        document.getElementById('clicks4').innerHTML = String(a)
    }

    const plusClicks5 = () => {
        let clicks = document.getElementById('clicks5').innerHTML;
        let a = Number(clicks)
        a++
        document.getElementById('clicks5').innerHTML = String(a)
    }

    const plusClicks6 = () => {
        let clicks = document.getElementById('clicks6').innerHTML;
        let a = Number(clicks)
        a++
        document.getElementById('clicks6').innerHTML = String(a)
    }

    const plusClicks7 = () => {
        let clicks = document.getElementById('clicks7').innerHTML;
        let a = Number(clicks)
        a++
        document.getElementById('clicks7').innerHTML = String(a)
    }

    const plusClicks8 = () => {
        let clicks = document.getElementById('clicks8').innerHTML;
        let a = Number(clicks)
        a++
        document.getElementById('clicks8').innerHTML = String(a)
    }

    const plusClicks9 = () => {
        let clicks = document.getElementById('clicks9').innerHTML;
        let a = Number(clicks)
        a++
        document.getElementById('clicks9').innerHTML = String(a)
    }


    const minusClicks1 = () => {
        let clicks = document.getElementById('clicks1').innerHTML;
        let a = Number(clicks)
        if (a === 1) {
            hotDogHandlere()
        }
        a--
        document.getElementById('clicks1').innerHTML = String(a)
    }

    const minusClicks2 = () => {
        let clicks = document.getElementById('clicks2').innerHTML;
        let a = Number(clicks)
        if (a === 1) {
            macaroniHandlere()
        }
        a--
        document.getElementById('clicks2').innerHTML = String(a)
    }

    const minusClicks3 = () => {
        let clicks = document.getElementById('clicks3').innerHTML;
        let a = Number(clicks)
        if (a === 1) {
            pizzaHandlere()
        }
        a--
        document.getElementById('clicks3').innerHTML = String(a)
    }

    const minusClicks4 = () => {
        let clicks = document.getElementById('clicks4').innerHTML;
        let a = Number(clicks)
        if (a === 1) {
            saladHandlere()
        }
        a--
        document.getElementById('clicks4').innerHTML = String(a)
    }

    const minusClicks5 = () => {
        let clicks = document.getElementById('clicks5').innerHTML;
        let a = Number(clicks)
        if (a === 1) {
            burgerHandlere()
        }
        a--
        document.getElementById('clicks5').innerHTML = String(a)
    }

    const minusClicks6 = () => {
        let clicks = document.getElementById('clicks6').innerHTML;
        let a = Number(clicks)
        if (a === 1) {
            dessertHandlere()
        }
        a--
        document.getElementById('clicks6').innerHTML = String(a)
    }

    const minusClicks7 = () => {
        let clicks = document.getElementById('clicks7').innerHTML;
        let a = Number(clicks)
        if (a === 1) {
            borshchHandlere()
        }
        a--
        document.getElementById('clicks7').innerHTML = String(a)
    }

    const minusClicks8 = () => {
        let clicks = document.getElementById('clicks8').innerHTML;
        let a = Number(clicks)
        if (a === 1) {
            shawarmaHandlere()
        }
        a--
        document.getElementById('clicks8').innerHTML = String(a)
    }

    const minusClicks9 = () => {
        let clicks = document.getElementById('clicks9').innerHTML;
        let a = Number(clicks)
        if (a === 1) {
            tacoHandlere()
        }
        a--
        document.getElementById('clicks9').innerHTML = String(a)
    }





const checkOrder = () => {
    let clicks1 = document.getElementById('clicks1').innerHTML
    let a1 = Number(clicks1)
    let clicks2 = document.getElementById('clicks2').innerHTML
    let a2 = Number(clicks2)
    let clicks3 = document.getElementById('clicks3').innerHTML
    let a3 = Number(clicks3)
    let clicks4 = document.getElementById('clicks4').innerHTML
    let a4 = Number(clicks4)
    let clicks5 = document.getElementById('clicks5').innerHTML
    let a5 = Number(clicks5)
    let clicks6 = document.getElementById('clicks6').innerHTML
    let a6 = Number(clicks6)
    let clicks7 = document.getElementById('clicks7').innerHTML
    let a7 = Number(clicks7)
    let clicks8 = document.getElementById('clicks8').innerHTML
    let a8 = Number(clicks8)
    let clicks9 = document.getElementById('clicks9').innerHTML
    let a9 = Number(clicks9)

    if (a1 === 0 && a2 === 0 && a3 === 0 && a4 === 0 && a5 === 0 && a6 === 0 && a7 === 0 && a8 === 0 && a9 === 0) {
        alert('Please choose something')
    } else {
        history.push('/thanks')
    }
}


const hotDogHandlere = () => {
    let elem = document.getElementById('1')
    elem.style.display = "none"
}
const macaroniHandlere = () => {
    let elem = document.getElementById('2')
    elem.style.display = "none"
}
const pizzaHandlere = () => {
    let elem = document.getElementById('3')
    elem.style.display = "none"
}
const saladHandlere = () => {
    let elem = document.getElementById('4')
    elem.style.display = "none"
}
const burgerHandlere = () => {
    let elem = document.getElementById('5')
    elem.style.display = "none"
}
const dessertHandlere = () => {
    let elem = document.getElementById('6')
    elem.style.display = "none"
}
const borshchHandlere = () => {
    let elem = document.getElementById('7')
    elem.style.display = "none"
}
const shawarmaHandlere = () => {
    let elem = document.getElementById('8')
    elem.style.display = "none"
}
const tacoHandlere = () => {
    let elem = document.getElementById('9')
    elem.style.display = "none"
}


const hotDogHandler = () => {
    let elem = document.getElementById('1')
    elem.style.display = "inline-block"
    let clicks = document.getElementById('clicks1').innerHTML;
    let a = Number(clicks)
    a++
    document.getElementById('clicks1').innerHTML = String(a)
}
const macaroniHandler = () => {
    let elem = document.getElementById('2')
    elem.style.display = "inline-block"
    let clicks = document.getElementById('clicks2').innerHTML;
    let a = Number(clicks)
    a++
    document.getElementById('clicks2').innerHTML = String(a)
}
const pizzaHandler = () => {
    let elem = document.getElementById('3')
    elem.style.display = "inline-block"
    let clicks = document.getElementById('clicks3').innerHTML;
    let a = Number(clicks)
    a++
    document.getElementById('clicks3').innerHTML = String(a)
}
const saladHandler = () => {
    let elem = document.getElementById('4')
    elem.style.display = "inline-block"
    let clicks = document.getElementById('clicks4').innerHTML;
    let a = Number(clicks)
    a++
    document.getElementById('clicks4').innerHTML = String(a)
}
const burgerHandler = () => {
    let elem = document.getElementById('5')
    elem.style.display = "inline-block"
    let clicks = document.getElementById('clicks5').innerHTML;
    let a = Number(clicks)
    a++
    document.getElementById('clicks5').innerHTML = String(a)
}
const dessertHandler = () => {
    let elem = document.getElementById('6')
    elem.style.display = "inline-block"
    let clicks = document.getElementById('clicks6').innerHTML;
    let a = Number(clicks)
    a++
    document.getElementById('clicks6').innerHTML = String(a)
}
const borshchHandler = () => {
    let elem = document.getElementById('7')
    elem.style.display = "inline-block"
    let clicks = document.getElementById('clicks7').innerHTML;
    let a = Number(clicks)
    a++
    document.getElementById('clicks7').innerHTML = String(a)
}
const shawarmaHandler = () => {
    let elem = document.getElementById('8')
    elem.style.display = "inline-block"
    let clicks = document.getElementById('clicks8').innerHTML;
    let a = Number(clicks)
    a++
    document.getElementById('clicks8').innerHTML = String(a)
}
const tacoHandler = () => {
    let elem = document.getElementById('9')
    elem.style.display = "inline-block"
    let clicks = document.getElementById('clicks9').innerHTML;
    let a = Number(clicks)
    a++
    document.getElementById('clicks9').innerHTML = String(a)
}

return (
    <div id='container' className={s.element}>
        <div className={s.div}>
            <button className={s.item} onClick={hotDogHandler}><img className={s.img}
                                                                    src={"https://img.freepik.com/free-photo/barbecue-grilled-hot-dogs-with-yellow-american-mustard-on-a-dark-wooden-background_152625-357.jpg?size=626&ext=jpg"}
                                                                    alt="Приклад"/></button>
            <button className={s.item} onClick={saladHandler}><img className={s.img}
                                                                   src={"https://www.acouplecooks.com/wp-content/uploads/2020/02/Mexican-Salad-005.jpg"}
                                                                   alt="Приклад"/></button>
            <button className={s.item} onClick={borshchHandler}><img className={s.img}
                                                                     src={"https://freedesignfile.com/upload/2017/07/Black-bread-slices-with-tomato-soup-HD-picture.jpg"}
                                                                     alt="Приклад"/></button>
            <button className={s.item} onClick={macaroniHandler}><img className={s.img}
                                                                      src={"https://imagebee.org/food/meal/meal-1-1698x1131.jpg"}
                                                                      alt="Приклад"/></button>
            <button className={s.item} onClick={burgerHandler}><img className={s.img}
                                                                    src={"https://i.pinimg.com/originals/ee/6e/9e/ee6e9e74d019d5ea9723aefbeb6a832f.jpg"}
                                                                    alt="Приклад"/></button>
            <button className={s.item} onClick={shawarmaHandler}><img className={s.img}
                                                                      src={"https://www.foreverwallpapers.com/wp-content/uploads/2018/12/Fast-Food.jpg"}
                                                                      alt="Приклад"/></button>
            <button className={s.item} onClick={pizzaHandler}><img className={s.img}
                                                                   src={"https://www.blogenium.com/wp-content/uploads/2019/08/blogenium-fast-food-hd-wallpaper-1.jpg"}
                                                                   alt="Приклад"/></button>
            <button className={s.item} onClick={dessertHandler}><img className={s.img}
                                                                     src={"https://i.pinimg.com/originals/df/93/47/df934728329e4ab81f5941e1bb4734ea.jpg"}
                                                                     alt="Приклад"/></button>
            <button className={s.item} onClick={tacoHandler}><img className={s.img}
                                                                  src={"https://images.all-free-download.com/images/graphiclarge/food_picture_05_hd_picture_167519.jpg"}
                                                                  alt="Приклад"/></button>
        </div>
        <br/>
        <div className={s.order}>
            <h3>Order</h3>
            <article>
                <ul className={s.stovpc}>
                    <div id="1" className={s.divs}>
                        <li className={s.one}>HotDog</li>
                        <button onClick={plusClicks1} className="blogos"><img className={s.logos}
                                                                              src={"https://pngimg.com/uploads/plus/plus_PNG100.png"}
                                                                              alt="Приклад"/></button>
                        <a className={s.click} id="clicks1">0</a>
                        <button onClick={minusClicks1} className="blogos"><img className={s.logos}
                                                                               src={"data:image/png;base64,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"}
                                                                               alt="Приклад"/></button>
                    </div>


                    <div id="2" className={s.divs}>
                        <li className={s.one}>Macaroni</li>
                        <button id="2p" onClick={plusClicks2} className="blogos"><img className={s.logos}
                                                                                      src={"https://pngimg.com/uploads/plus/plus_PNG100.png"}
                                                                                      alt="Приклад"/></button>
                        <a className={s.click} id="clicks2">0</a>
                        <button onClick={minusClicks2} className="blogos"><img className={s.logos}
                                                                               src={"data:image/png;base64,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"}
                                                                               alt="Приклад"/></button>
                    </div>
                    <div id="3" className={s.divs}>
                        <li className={s.one}>Pizza</li>
                        <button id="3p" onClick={plusClicks3} className="blogos"><img className={s.logos}
                                                                                      src={"https://pngimg.com/uploads/plus/plus_PNG100.png"}
                                                                                      alt="Приклад"/></button>
                        <a className={s.click} id="clicks3">0</a>
                        <button onClick={minusClicks3} className="blogos"><img className={s.logos}
                                                                               src={"data:image/png;base64,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"}
                                                                               alt="Приклад"/></button>
                    </div>
                    <div id="4" className={s.divs}>
                        <li className={s.one} id="4">Salad</li>
                        <button id="4p" onClick={plusClicks4} className="blogos"><img className={s.logos}
                                                                                      src={"https://pngimg.com/uploads/plus/plus_PNG100.png"}
                                                                                      alt="Приклад"/></button>
                        <a className={s.click} id="clicks4">0</a>
                        <button onClick={minusClicks4} className="blogos"><img className={s.logos}
                                                                               src={"data:image/png;base64,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"}
                                                                               alt="Приклад"/></button>
                    </div>
                    <div id="5" className={s.divs}>
                        <li className={s.one}>Burger</li>
                        <button id="5p" onClick={plusClicks5} className="blogos"><img className={s.logos}
                                                                                      src={"https://pngimg.com/uploads/plus/plus_PNG100.png"}
                                                                                      alt="Приклад"/></button>
                        <a className={s.click} id="clicks5">0</a>
                        <button onClick={minusClicks5} className="blogos"><img className={s.logos}
                                                                               src={"data:image/png;base64,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"}
                                                                               alt="Приклад"/></button>
                    </div>
                    <div id="6" className={s.divs}>
                        <li className={s.one}>Dessert</li>
                        <button id="6p" onClick={plusClicks6} className="blogos"><img className={s.logos}
                                                                                      src={"https://pngimg.com/uploads/plus/plus_PNG100.png"}
                                                                                      alt="Приклад"/></button>
                        <a className={s.click} id="clicks6">0</a>
                        <button onClick={minusClicks6} className="blogos"><img className={s.logos}
                                                                               src={"data:image/png;base64,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"}
                                                                               alt="Приклад"/></button>
                    </div>
                    <div id="7" className={s.divs}>
                        <li className={s.one}>Borshch</li>
                        <button id="7p" onClick={plusClicks7} className="blogos"><img className={s.logos}
                                                                                      src={"https://pngimg.com/uploads/plus/plus_PNG100.png"}
                                                                                      alt="Приклад"/></button>
                        <a className={s.click} id="clicks7">0</a>
                        <button onClick={minusClicks7} className="blogos"><img className={s.logos}
                                                                               src={"data:image/png;base64,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"}
                                                                               alt="Приклад"/></button>
                    </div>
                    <div id="8" className={s.divs}>
                        <li className={s.one}>Shawarma</li>
                        <button id="8p" onClick={plusClicks8} className="blogos"><img className={s.logos}
                                                                                      src={"https://pngimg.com/uploads/plus/plus_PNG100.png"}
                                                                                      alt="Приклад"/></button>
                        <a className={s.click} id="clicks8">0</a>
                        <button onClick={minusClicks8} className="blogos"><img className={s.logos}
                                                                               src={"data:image/png;base64,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"}
                                                                               alt="Приклад"/></button>
                    </div>
                    <div id="9" className={s.divs}>
                        <li className={s.one}>Taco</li>
                        <button id="9p" onClick={plusClicks9} className="blogos"><img className={s.logos}
                                                                                      src={"https://pngimg.com/uploads/plus/plus_PNG100.png"}
                                                                                      alt="Приклад"/></button>
                        <a className={s.click} id="clicks9">0</a>
                        <button onClick={minusClicks9} className="blogos"><img className={s.logos}
                                                                               src={"data:image/png;base64,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"}
                                                                               alt="Приклад"/></button>
                    </div>


                </ul>
            </article>

            <button onClick={checkOrder} className={s.submit}>Submit</button>

        </div>
    </div>
)
}

export default Menu;
