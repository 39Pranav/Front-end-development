
document.addEventListener('DOMContentLoaded', function() {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const tbody = document.getElementById('events-tbody');

    events.forEach((event, index) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${event.title}</td>
            <td><img src="${event.image}" alt="${event.title}" width="50" height="50"></td>
            <td>${event.description}</td>
            <td>${event.date}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        `;

        tbody.appendChild(tr);
    });
});
