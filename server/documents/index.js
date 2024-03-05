module.exports = ({ name, price1, price2, price3, receiptId }) => {
    const today = new Date();
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Receipt PDF</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f0f0f0;
                    }
                    .container {
                        max-width: 800px;
                        margin: 30px auto;
                        padding: 20px;
                        background-color: #fff;
                        border: 1px solid #ddd;
                        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
                    }
                    .header {
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    .header img {
                        max-width: 200px;
                        height: auto;
                    }
                    .date {
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    .info {
                        margin-bottom: 20px;
                    }
                    .info table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    .info table td {
                        padding: 5px;
                        border-bottom: 1px solid #ddd;
                        font-weight: bold;
                        font-size: 15px;
                    }
                    .info table td:first-child {
                        width: 70%;
                    }
                    .items {
                        margin-bottom: 20px;
                    }
                    .items table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    .items th, .items td {
                        padding: 10px;
                        border-bottom: 1px solid #ddd;
                        text-align: left;
                    }
                    .total {
                        text-align: center;
                        font-weight: bold;
                        font-size: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <img src="https://thumbs.dreamstime.com/z/invoice-linear-icon-modern-outline-invoice-logo-concept-whit-invoice-linear-icon-modern-outline-invoice-logo-concept-white-133517211.jpg?w=768" alt="Logo">
                    </div>
                    <div class="date">Date: ${`${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`}</div>
                    <div class="info">
                        <table>
                            <tr>
                                <td>Customer name:</td>
                                <td>${name}</td>
                            </tr>
                            <tr>
                                <td>Receipt number:</td>
                                <td>${receiptId}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="items">
                        <table>
                            <thead>
                                <tr>
                                    <th>Bought items:</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>First item:</td>
                                    <td>${price1} $</td>
                                </tr>
                                <tr>
                                    <td>Second item:</td>
                                    <td>${price2} $</td>
                                </tr>
                                <tr>
                                    <td>Third item:</td>
                                    <td>${price3} $</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="total">Total price: ${parseInt(price1) + parseInt(price2) + parseInt(price3)} $</div>
                </div>
            </body>
        </html>
    `;
};