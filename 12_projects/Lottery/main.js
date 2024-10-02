let siteBody = document.getElementById('siteBody')
let generateSite = () => {
  return siteBody.innerHTML = `
    <div class="navbar">
        <h1>Expense tracker</h1>
    </div>
    <div class="expenseInfo">
        <label for="item">Item:</label>
        <input type="text" id="item"><br>
        <label for="type">Category:</label>
        <select name="categoryoptions" id="categoryOptions">
            <option>Select category</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Clothing</option>
            <option>Health & Fitness</option>
            <option>Bills</option>
            <option>Grocery</option>
            <option>Miscellaneous</option>
        </select>
    </div>
    <label for="Date">Date:</label>
    <input type="date" id="date"><br>
    <label for="time">Time:</label>
    <input type="time" id="time"><br>
    <label for="paymentMethod">Payment Method:</label>
    <select name="paymentmethods" id="PaymentMethod">
        <option>Cash</option>
        <option>Card</option>
        <option>UPI</option>
        <option>NetBanking</option>
    </select>
    <br>
    <button id="submitButton">Submit</button>
    <button id="clearButton">Clear</button>
    `;
}
generateSite()

document.getElementById('submitButton').addEventListener('click', () => {
    alert('Expense Saved')
})

document.getElementById('clearButton').addEventListener('click', () => {
    generateSite()
    alert('Expense details cleared')
})