// const orders = [
//     {
//       orderNumber: '12345',
//       dateOrdered: '2024-12-01',
//       books: [
//         {
//           picture: 'images/bedtime/bd15.jpg',
//           name: 'Good Day, Good Night',
//           cost: 7.99,
//           quantity: 1
//         },
//         {
//           picture: 'images/novels/n2.jpg',
//           name: 'Overland A Novel',
//           cost: 17.59,
//           quantity: 1
//         }
//       ],
//       totalAmount: 25.58,
//       status: 'Shipped',
//       progressWidth: '50%'
//     },
//     {
//         orderNumber: '112233',
//         dateOrdered: '2024-11-28',
//         books: [
//           {
//             picture: 'images/bedtime/bd18.jpg',
//             name: 'I Am a Big Brother',
//             cost: 5.59,
//             quantity: 1
//           },
//           {
//             picture: 'images/fairytale/ft17.jpg',
//             name: 'A Study in Drowning',
//             cost: 5.59,
//             quantity: 1
//           }
//         ],
//         totalAmount: 11.18,
//         status: 'In-transit',
//         progressWidth: '75%'
//       },
//   ];


  function checkOrderStatus() {

    const orders = [
      {
        orderNumber: '12345',
        dateOrdered: '2024-12-01',
        books: [
          {
            picture: "images/bedtime/bd15.jpg",
            name: 'Good Day, Good Night',
            cost: 'Price: $7.99',
            quantity: 1
          },
          {
            picture: "images/novels/n2.jpg",
            name: 'Overland A Novel',
            cost: 'Price: $17.59',
            quantity: 1
          }
        ],
        totalAmount: 25.58,
        status: 'Shipped',
        progressWidth: '50%'
      },
      {
          orderNumber: '112233',
          dateOrdered: '2024-11-28',
          books: [
            {
              picture: "images/bedtime/bd18.jpg",
              name: 'I Am a Big Brother',
              cost: 'Price: $5.59',
              quantity: 1
            },
            {
              picture: "images/fairytale/ft17.jpg",
              name: 'A Study in Drowning',
              cost: 'Price: $5.59',
              quantity: 1
            }
          ],
          totalAmount: 11.18,
          status: 'In-transit',
          progressWidth: '75%'
        },
    ];
  

    console.log("Inside function");
    const orderNumber = document.getElementById('track_number').value;
    // alert(orderNumber);
    const order = orders.find(o => o.orderNumber === orderNumber);
    // alert(order);
    
    if (!order) {
      alert("Order not found");
        // document.getElementById('order-details').innerHTML = '<p>Order not found.</p>';
        return;
      }

      else{
        alert("Order found");
        document.getElementById('order_date').innerHTML = order.dateOrdered;
        document.getElementById('order_number').innerHTML = order.orderNumber;
        document.getElementById('order_status').innerHTML = order.status;
        document.getElementById('status_progress').style.width = order.progressWidth;
        document.getElementById('order_product1').src = order.books[0].picture;
        document.getElementById('order_product1_Title').innerHTML = order.books[0].name;
        document.getElementById('order_product1_Price').innerHTML = order.books[0].cost;
        document.getElementById('order_product2').src = order.books[1].picture;
        document.getElementById('order_product2_Title').innerHTML = order.books[1].name;
        document.getElementById('order_product2_Price').innerHTML = order.books[1].cost;
        var salesTax = order.totalAmount * 0.13;
        var salesStr = String(salesTax.toFixed(2));
        document.getElementById('sales_tax').innerHTML = '$' + salesStr;
        var str = String(order.totalAmount);
        document.getElementById('subtotal').innerHTML = '$' + str;
        var total = order.totalAmount + salesTax;
        document.getElementById('orderTotal').innerHTML = '$' + total.toFixed(2);
        document.getElementById('order_details').style.display = 'block';
        document.getElementById('delivery_details').style.display = 'block';
        document.getElementById('outer-container').style.display = 'block';
      }
      
      // let orderDetailsHTML = `
      //   <h2>Order Number: ${order.orderNumber}</h2>
      //   <p>Date Ordered: ${order.dateOrdered}</p>
      //   <h3>Books in the Order:</h3>
      // `;
      
      // order.books.forEach(book => {
      //   orderDetailsHTML += `
      //     <div class="book">
      //       <img src="${book.picture}" alt="${book.name}">
      //       <p><strong>Name:</strong> ${book.name}</p>
      //       <p><strong>Cost:</strong> $${book.cost.toFixed(2)}</p>
      //       <p><strong>Quantity:</strong> ${book.quantity}</p>
      //     </div>
      //   `;
      // });
      
      // orderDetailsHTML += `
      //   <p><strong>Total Amount Paid:</strong> $${order.totalAmount.toFixed(2)}</p>
      //   <p><strong>Status:</strong> ${order.status}</p>
      // `;



      
      // document.getElementById('order-details').innerHTML = orderDetailsHTML;
    }
  
    document.addEventListener('DOMContentLoaded', () => {
      var check_button = document.getElementById('track_check');
      check_button.addEventListener('click', checkOrderStatus);

    });