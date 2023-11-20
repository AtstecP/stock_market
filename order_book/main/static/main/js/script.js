function updateTableOrders() {
    fetch('/get_data_api')  // Replace with the actual URL of your Django view
        .then(response => response.json())
        .then(data => {
            orders = data
            tbodyOrders.innerHTML = ''; // Clear existing data
            data['asks'].reverse().forEach(item => {
                    const row = document.createElement('tr');
                    row.className = 'buy-order';
                    row.innerHTML = `
                        <td>$${ item[0] }</td>
                        <td>${ item[1] }</td>
                    `;
                    tbodyOrders.appendChild(row);

            });
            data['bids'].forEach(item => {
                const row = document.createElement('tr');
                row.className = 'sell-order';
                row.innerHTML = `
                    <td>$${ item[0] }</td>
                    <td>${ item[1] }</td>
                `;
                tbodyOrders.appendChild(row);
            });
        });
}

function updateTableFrames(){
    if (frames.length !== 0){
        tbodyData.innerHTML = ''; // Clear existing data
        frames.forEach(frame => {
            let ordersFramed = {'asks': [], 'bids': []};
            let sum = 0;
            orders['asks'].forEach(order =>{
                if (order[0] <= frame[1] && order[0] >= frame[0]){
                    ordersFramed['asks'].push(order)
                    sum += parseFloat(order[0]);
                }
            })
            orders['bids'].forEach(order =>{
                if (order[0] <= frame[1] && order[0] >= frame[0]){
                    ordersFramed['bids'].push(order)
                    sum += parseFloat(order[0]);
                }
            })
            let ordersAmount = ordersFramed['asks'].length + ordersFramed['bids'].length;
            let row = document.createElement('tr');
            if (ordersAmount === 0){
                row.innerHTML = `
                <td>$${frame[0]} - $${frame[1]}</td>
                <td>${0}</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            `;
            }else{
            row.innerHTML = `
                <td>$${frame[0]} - $${frame[1]}</td>
                <td>${ordersAmount}</td>
                <td>${(ordersFramed['bids'].length/ordersAmount).toFixed(3)}</td>
                <td>${(ordersFramed['asks'].length/ordersAmount).toFixed(3)}</td>
                <td>$${(sum/ordersAmount).toFixed(3)}</td>
            `;
            }
            tbodyData.appendChild(row);
            
        });
    }
}

function set_prices(){
    if (max.value !== '' && min.value !== '' && min.value <= max.value){
        frames.push([min.value, max.value])
    }
}
const tableOrders = document.getElementById('orders');
const tbodyOrders = tableOrders.querySelector('tbody');
const tableData = document.getElementById('data-table');
const tbodyData = tableData.querySelector('tbody');
const btn = document.getElementById('myButton');
const max = document.getElementById('max');
const min = document.getElementById('min');
let orders = {'asks': [], 'bids': []};
let frames = [];
if (btn) {
    btn.addEventListener('click',set_prices);
}
setInterval(function() {
    updateTableOrders(); 
    updateTableFrames()
    }, 
    330);  // Refresh every minute, for example
