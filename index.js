function showDetails(vehicle) {
    if (vehicle === 'Sedan') {
        var sedanDetails = `<div>
                                <h2>SEDAN (DZIRE, ETIOS)</h2>
                                <h3>Package (Day Rent Basis / Kilometer Basis)</h3>
                                <h4>Day Rent Basis</h4>
                                <p>Day Rent: Rs. 1500</p>
                                <p>Fuel: Rs. 10</p>
                                <p>Driver Batta: Rs. 400</p>
                                <h4>Kilometer Basis</h4>
                                <p>Fuel: Rs. 13</p>
                                <p>Driver Batta: Rs. 400</p>
                            </div>`;
        document.getElementById('sedanDetails').innerHTML = sedanDetails;
        document.getElementById('sedanDetails').style.display = 'block';
    }
    else if (vehicle === 'Innova') {
        var innovaDetails = `<div>
                                <h2>INNOVA</h2>
                                <h3>Package (Day Rent Basis / Kilometer Basis)</h3>
                                <h4>Day Rent Basis</h4>
                                <p>Day Rent: Rs. 2000</p>
                                <p>Fuel: Rs. 14</p>
                                <p>Driver Batta: Rs. 400</p>
                                <h4>Kilometer Basis</h4>
                                <p>Fuel: Rs. 18</p>
                                <p>Driver Batta: Rs. 400</p>
                            </div>`;
        document.getElementById('innovaDetails').innerHTML = innovaDetails;
        document.getElementById('innovaDetails').style.display = 'block';
    }
    else if (vehicle === 'Crysta') {
        var crystaDetails = `<div>
                                <h2>CRYSTA</h2>
                                <h3>Package (Day Rent Basis / Kilometer Basis)</h3>
                                <h4>Day Rent Basis</h4>
                                <p>Day Rent: Rs. 2500</p>
                                <p>Fuel: Rs. 16</p>
                                <p>Driver Batta: Rs. 500</p>
                                <h4>Kilometer Basis</h4>
                                <p>Fuel: Rs. 20</p>
                                <p>Driver Batta: Rs. 500</p>
                            </div>`;
        document.getElementById('crystaDetails').innerHTML = crystaDetails;
        document.getElementById('crystaDetails').style.display = 'block';
    }
}
