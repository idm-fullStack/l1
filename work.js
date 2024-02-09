 // Оповещение о необходимости ремонта двигателя при остаточном ресурсе менее 40%
        if (parseInt(document.querySelector('td:nth-child(7)').textContent) < 40) {
            alert('Необходимо чинить двигатель!');
        }
document.getElementById('graph-btn').addEventListener('click', function() {
    window.location.href = 'graph.html';
  });