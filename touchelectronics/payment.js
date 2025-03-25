function showCODForm() {
    document.getElementById('cod-form').style.display = 'block';
}

function submitCODForm() {
    let name = document.getElementById('name').value;
    let mobile = document.getElementById('mobile').value;
    let altMobile = document.getElementById('alt-mobile').value;
    let pincode = document.getElementById('pincode').value;
    let flatNo = document.getElementById('flat-no').value;
    let locality = document.getElementById('locality').value;
    let fullAddress = document.getElementById('full-address').value;
    let brand = document.getElementById('brand').value;
    let problem = document.getElementById('problem').value;
    let locationURL = document.getElementById('location-url').value;

    // Validation: Ensure all required fields are filled
    if (!name || !mobile || !pincode || !flatNo || !locality || !fullAddress || !brand || !problem) {
        alert('All fields are mandatory except location URL!');
        return;
    }

    // Store order details in Local Storage (For Order Tracking)
    let orderDetails = {
        name, mobile, altMobile, pincode, flatNo, locality, fullAddress, brand, problem, locationURL
    };
    localStorage.setItem('lastOrder', JSON.stringify(orderDetails));

    // ✅ Correct WhatsApp API URL format
    let message = `New Order Request:
Name: ${name}
Mobile: ${mobile}
Alternate: ${altMobile}
Pincode: ${pincode}
Flat No: ${flatNo}
Locality: ${locality}
Full Address: ${fullAddress}
Brand: ${brand}
Problem of Product: ${problem}`;

    if (locationURL) {
        message += `\nLocation: ${locationURL}`;
    }

    let whatsappURL = `https://api.whatsapp.com/send?phone=917396340266&text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');

    // ✅ Show Order Success Animation
    document.getElementById('order-success').style.display = 'flex';
    
    // ✅ Redirect to Orders Page after 3 seconds
    setTimeout(() => {
        window.location.href = "home.html"; // Redirect to Home or Order Tracking Page
    }, 3000);
} 
