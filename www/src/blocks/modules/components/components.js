import Choices from 'choices.js';
import autoComplete from '@tarekraafat/autocomplete.js';
import Pikaday from 'pikaday';
import moment from 'moment';
require('fslightbox');

document.addEventListener('DOMContentLoaded', () => {

    // choices selects init
    selectInit();

    // autocomplete-js init
    autoCompleteInit();

    // calendars init
    calendarsInit();

    // required for adaptive
    mobileResingReload()
});


const autoCompleteInit = () => {
    if (document.querySelector('.autocomplete-holder')) {
        const allHolders = document.querySelectorAll('.autocomplete-holder');
        allHolders.forEach(element => {
            const inputInner = element.querySelector('.autocomplete');
            const autoCompleteInstance = new autoComplete({
                data: {
                    src: ['Пример', 'Длинный пример', ' Пример 3', ' Пример 4'],
                },
                placeHolder: element.querySelector('.autocomplete').getAttribute('data-placeholder'),
                selector: () => element.querySelector('.autocomplete'),
                threshold: 3,
                searchEngine: "strict",
                resultsList: {
                    render: true,
                    container: source => {
                        source.setAttribute("class", "unstyled res_list");
                    },
                    destination: element.querySelector(".autocomplete"),
                    position: "afterend",
                    element: "ul"
                },
                highlight: true,
                resultItem: {
                    content: (data, source) => {
                        source.innerHTML = data.match;
                        element.classList.add('is-open');
                    },
                    element: "li",
                },
                noResults: () => {
                    const result = document.createElement("li");
                    result.setAttribute("class", "no_result");
                    result.setAttribute("tabindex", "1");
                    result.innerHTML = "Нет результатов...";
                    element.querySelector("#autoComplete_list").appendChild(result);
                },
                onSelection: feedback => {
                    element.querySelector('.autocomplete').value = feedback.selection.value;
                    element.classList.remove('is-open');
                }
            });
            inputInner.addEventListener('input', () => {
                if (inputInner.value.length < 4) {
                    element.classList.remove('is-open');
                } else {
                    element.classList.add('is-open');
                }
            });
            document.body.addEventListener('click', (e) => {
                if (e.target != element && element.classList.contains('is-open')) {
                    element.classList.remove('is-open');
                }
            });
        });
    }
};

const selectInit = () => {
    if (document.querySelector('select.select')) {
        const selects = document.querySelectorAll('select.select');
        selects.forEach(element => {
            const selectInstance = new Choices(element, {
                searchEnabled: false,
                itemSelectText: '',
                noResultsText: 'Результатов нет',
                noChoicesText: 'Нет опций для выбора',
                maxItemText: (maxItemCount) => {
                    return `Доступно ${maxItemCount} опции(-ий) для выбора.`;
                }
            })
        });
    }
};

const calendarsInit = () => {
    if (document.querySelector('.input-module--calendar')) {
        const allCalendars = document.querySelectorAll('.input-module--calendar');
        allCalendars.forEach(calendar => {
            const dateInput = calendar.querySelector('input');
            const picker = new Pikaday({ field: dateInput, format: 'DD/MM/YYYY', });
        });
    }
};


const mobileResingReload = () => {
    if (window.innerWidth < 1181) {
        document.body.classList.add('mobile-mode');
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1180 && document.body.classList.contains('mobile-mode')) {
                window.location.reload();
            }
        });
    } else {
        document.body.classList.add('desktop-mode');
        window.addEventListener('resize', () => {
            if (window.innerWidth < 1181 && document.body.classList.contains('desktop-mode')) {
                window.location.reload();
            }
        });
    }
};