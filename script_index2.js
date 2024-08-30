document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.getElementById("data-table");

    data.forEach(item => {
        const row = document.createElement("tr");

        const imageCell = document.createElement("td");
        const image = document.createElement("img");
        image.src = `data2/${item.image}`;
        image.alt = item.chinese;  
        imageCell.appendChild(image);

        const chineseCell = document.createElement("td");
        chineseCell.innerHTML = item.chinese;
        chineseCell.classList.add("center-column"); 

        const vietnameseCell = document.createElement("td");
        vietnameseCell.innerHTML = item.vietnamese.replace(/\n/g, '<br>'); 
        vietnameseCell.classList.add("text-column"); 

        row.appendChild(imageCell);
        row.appendChild(chineseCell);
        row.appendChild(vietnameseCell);

        tableBody.appendChild(row);
    });
});

