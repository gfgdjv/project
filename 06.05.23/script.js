let purcasheArray = []
let btn = form.addBtn;
let tbody = document.querySelector('#tbody');
let categories = document.querySelectorAll('.legend__desc');
let prices = document.querySelectorAll('.legend__price');

console.log(categories);

btn.addEventListener('click', (evt) => {
let purcashe = {}

evt.preventDefault();

purcashe.name = form.name.value;
purcashe.price = +form.price.value;

let options = form.selectCategory.options;

purcasheArray.push(purcashe);

tbody.insertAdjacentHTML('beforeEnd',
`
tbody.insertAdjacentHTML('beforeEnd',
<tr class="purcashes＿item purcashes＿row" data-category="product">
<td class="purcashes＿td">${purcashe.name}</td>
<td class="purcashes＿td">${purcashe.category}</td>
<td class="purcashestd">${purcashe.price}</td>
<td class="purcashes＿td"><i class="purcashes＿item-del fa-solid fa-xmark"></i></td>
</tr>
`
)

form.reset();

for (let category of categories) {
    if(purcashe.categoty == category) {
        category.nextElementSibling.textContent = Number(category)
    }
}
});

tbody.addEventListener ('click', (evt) => {
    if (evt.target.classList.contains('purcashes__item-del')) {
        evt.target.closest('tr').remove();
    }
})