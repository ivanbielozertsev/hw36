'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const $form = document.getElementById('form');

    if ($form) {
        $form.addEventListener('submit', (event) => {
            event.preventDefault();
            let inputs = event.target.querySelectorAll('input, select, textarea');
            let formData = {};

            for (let item of inputs) {
                formData[item.name] = item.value;
            }

            localStorage.setItem('formData', JSON.stringify(formData));

            console.log('formData: ', formData);
            console.log('window.location: ', window.location);
            const {origin, pathname} = window.location;
            window.location.href = origin + pathname.replace('index.html', 'list.html');
        });
    }

    const $list = document.getElementById('list');

    if ($list) {
        const formData = localStorage.getItem('formData');
        Object.entries(JSON.parse(formData)).forEach(([key, value]) => {
            const $li = document.createElement('li');
            $li.innerText = `${key}: ${value || 'N/A'}`;

            $list.appendChild($li);
        });
    }
});

