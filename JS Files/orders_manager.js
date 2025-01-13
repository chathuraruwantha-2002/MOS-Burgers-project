import { getOrders } from "./data.js";

let orderList = getOrders();

console.log(orderList);

console.log("Orders Manager Page Loaded..!");

document.addEventListener('DOMContentLoaded', () => {

    const tableBody = document.querySelector('tbody');

    orderList.forEach(order => {
        
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${order.orderId}</td>
            <td>
                <img src="/Images and lcons/man.png" class="rounded-circle me-2 p-1" alt="Avatar">
                ${order.customerName}
            </td>
            <td>${order.phoneNumber}</td>
            <td>${order.date}</td>
            <td class="status-completed">Completed</td>
            <td>${order.totalAmount}</td>
            <td class="action-icons">
                <a href="#" class="text-primary"><i class="bi bi-pencil-square"></i></a>
                <a href="#" class="text-danger"><i class="bi bi-trash-fill"></i></a>
            </td>
        `;

        tableBody.appendChild(row);
    });
});
