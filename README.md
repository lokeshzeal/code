
<!DOCTYPE html>
<html>
<head>
    <title>Lease Abstraction Report</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            padding: 8px;
            border: 1px solid black;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Lease Abstraction Report</h1>

    <table>
        <tr>
            <th>Basic Lease Details</th>
            <td></td>
        </tr>
        <tr>
            <th>Property Name / Building Name</th>
            <td>{{ property_name }}</td>
        </tr>
        <tr>
            <th>Property Address</th>
            <td>{{ property_address }}</td>
        </tr>
        <tr>
            <th>Suite / Floor / Unit</th>
            <td>{{ suite_floor_unit }}</td>
        </tr>
        <tr>
            <th>City</th>
            <td>{{ city }}</td>
        </tr>
        <!-- Add more fields as needed -->
    </table>
</body>
</html>
