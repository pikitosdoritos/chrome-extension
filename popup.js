const calculateBtn = document.querySelector('#calculate')
const output = document.querySelector('#result')

calculateBtn.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    })

    chrome.tabs.sendMessage(
        tab.id,
        {
            action: 'calculateTime'
        },
        (response) => {
            if (!response) {
                output.value = 'No response'
                return
            }

            output.value = response.time
        }
    )
})


// const input = document.querySelector("#textInput");
// const saveBtn = document.querySelector("#saveBtn");
// const changeBtn = document.querySelector("#changeBtn");
// const getTitleBtn = document.querySelector("#getTitleBtn");

// const result = document.querySelector("#result");


/*
    STORAGE

    Загружаем сохранённое значение,
    когда popup открывается.
*/

// chrome.storage.local.get(["savedText"], (data) => {

//     if (data.savedText) {
//         input.value = data.savedText;
//     }

// });


// /*
//     Сохраняем значение.
// */

// saveBtn.addEventListener("click", () => {

//     const text = input.value;

//     chrome.storage.local.set({
//         savedText: text
//     });

//     result.textContent = "Сохранено";

// });


/*
    Получаем текущую вкладку
    и отправляем сообщение content.js
*/

// changeBtn.addEventListener("click", async () => {

//     const [tab] = await chrome.tabs.query({
//         active: true,
//         currentWindow: true
//     });

//     chrome.tabs.sendMessage(
//         tab.id,
//         {
//             action: "changePage",
//             text: input.value
//         }
//     );

// });

// /*
//     Получаем информацию
//     из content.js
// */

// getTitleBtn.addEventListener("click", async () => {

//     const [tab] = await chrome.tabs.query({
//         active: true,
//         currentWindow: true
//     });

//     chrome.tabs.sendMessage(
//         tab.id,
//         {
//             action: "getTitle"
//         },
//         (response) => {

//             if (!response) {
//                 result.textContent = "Нет ответа";
//                 return;
//             }

//             result.textContent = response.title;

//         }
//     );

// });