//variables

let btn = document.querySelector('#new-quote')
let  quote =document.querySelector('.quote')
let person = document.querySelector(".person")

const quotes = [{
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: `Benjamin Franklin`
}, {
    quote: `"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."`,
    person: `Helen Keller`
}, {
    quote: `"It is during our darkest moments that we must focus to see the light."`,
    person: `Aristotle`
}, {
    quote: `"Whoever is happy will make others happy too."`,
    person: `Anne Frank`
}, {
    quote: `"Do not go where the path may lead, go instead where there is no path and leave a trail."`,
    person: `Ralph Waldo Emerson`
}, {
    quote: `"If life were predictable it would cease to be life and be without flavor."`,
    person: `Eleanor Roosevelt`
}, {
    quote: `"The purpose of our lives is to be happy."`,
    person: `Dalai Lama`
}, {
    quote: `"In this life we cannot do great things. We can only do small things with great love."`,
    person: `Mother Teresa`
}, {
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: `Nelson Mandela`
}, {
    quote: `"You only live once, but if you do it right, once is enough."`,
    person: `Mae West`
}]

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random()*quotes.length)
    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person

})