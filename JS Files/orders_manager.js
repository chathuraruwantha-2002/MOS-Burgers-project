import { getOrders,SearchOrderUsingIndex,deleteOrder,searchOrderByOrderId } from "./data.js";

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

//search order
document.getElementById('search-order').addEventListener('input', () => {
    const searchQuery = document.getElementById('search-order').value.toLowerCase();
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        const orderId = row.querySelector('td:nth-child(1)').textContent.toLowerCase();
        const customerName = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        const phoneNumber = row.querySelector('td:nth-child(3)').textContent.toLowerCase();
        if (customerName.includes(searchQuery)|| orderId.includes(searchQuery) || phoneNumber.includes(searchQuery)) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
});

//delete order
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('bi-trash-fill')) {
        const row = event.target.closest('tr');
        const orderId = row.querySelector('td:nth-child(1)').textContent;
        const confirmDelete = confirm(`Are you sure you want to delete order ${orderId} ?`);
        if (confirmDelete) {
            row.remove();
            deleteOrder(searchOrderByOrderId(orderId));
            console.log(orderList);
        }
    }
});



