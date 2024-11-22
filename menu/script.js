let itemBox = document.querySelectorAll('.itemBox');
let filterDropdown = document.getElementById('filterDropdown');

filterDropdown.addEventListener('change', function() {
    let dataFilter = this.value;

    for (let k = 0; k < itemBox.length; k++) {
        itemBox[k].classList.remove('active');
        itemBox[k].classList.add('hide');

        if (itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('active');
        }
    }
});
