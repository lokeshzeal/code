<!DOCTYPE html>
<html>
<head>
    <title>Lease Abstract</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f9f9f9;
        }
        h1 {
            color: #333;
            text-align: center;
            border-bottom: 2px solid #ccc;
            padding-bottom: 10px;
        }
        h2 {
            color: #0056b3;
            border-bottom: 1px solid #ccc;
            padding-bottom: 5px;
        }
        h3 {
            color: #007bff;
        }
        ul {
            list-style-type: none;
            padding-left: 0;
            margin: 10px 0;
        }
        li {
            background: #fff;
            margin: 5px 0;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        p {
            background: #fff;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            margin: 5px 0;
        }
    </style>
</head>
<body>

    <h1>Lease Abstract</h1>

    <h2>Lease Information</h2>
    <ul>
        <li><strong>Lease:</strong> {{ lease_name }}</li>
        <li><strong>Lease Status:</strong> {{ lease_status }}</li>
        <li><strong>Property:</strong> {{ property }}</li>
        <li><strong>Location:</strong> {{ location }}</li>
        <li><strong>Contract Area:</strong> {{ contract_area }}</li>
        <li><strong>Monthly Rent:</strong> {{ monthly_rent }}</li>
        <li><strong>Annual Rent:</strong> {{ annual_rent }}</li>
        <li><strong>Rent Per Area:</strong> {{ rent_per_area }}</li>
        <li><strong>Lease Term:</strong> {{ lease_term }}</li>
    </ul>

    <h2>Space</h2>
    <ul>
        <li><strong>Unit:</strong> {{ unit }}</li>
        <li><strong>Building:</strong> {{ building }}</li>
        <li><strong>Floor:</strong> {{ floor }}</li>
        <li><strong>Area:</strong> {{ space_area }}</li>
        <li><strong>Amendment Type:</strong> {{ amendment_type }}</li>
    </ul>

    <h2>Charge Schedules</h2>
    {% for charge in charge_schedules %}
        <h3>Charge Schedule {{ loop.index }}</h3>
        <ul>
            <li><strong>Charge Code:</strong> {{ charge.charge_code }}</li>
            <li><strong>Charge Description:</strong> {{ charge.charge_desc }}</li>
            <li><strong>Date From:</strong> {{ charge.date_from }}</li>
            <li><strong>Date To:</strong> {{ charge.date_to }}</li>
            <li><strong>Monthly Amount:</strong> {{ charge.monthly_amt }}</li>
            <li><strong>Annual Amount:</strong> {{ charge.annual_amt }}</li>
            <li><strong>Amount Per Area:</strong> {{ charge.amt_per_area }}</li>
            <li><strong>Amendment Type:</strong> {{ charge.amendment_type }}</li>
        </ul>
    {% endfor %}

    <h2>Amendments</h2>
    {% for amendment in amendments %}
        <h3>Amendment {{ loop.index }}</h3>
        <ul>
            <li><strong>Type:</strong> {{ amendment.type }}</li>
            <li><strong>Description:</strong> {{ amendment.description }}</li>
            <li><strong>Status:</strong> {{ amendment.status }}</li>
            <li><strong>Term (Months):</strong> {{ amendment.term }}</li>
            <li><strong>Date From:</strong> {{ amendment.date_from }}</li>
            <li><strong>Date To:</strong> {{ amendment.date_to }}</li>
        </ul>
    {% endfor %}

    <h2>Other Lease Provisions / Clauses</h2>
    {% for clause in other_clauses %}
        <h3>{{ clause.name }}</h3>
        <p>{{ clause.description }}</p>
    {% endfor %}

</body>
</html>
