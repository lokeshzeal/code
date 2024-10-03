
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
    <table class="table table-bordered">
  <thead>
    <tr>
      <th>No.</th>
      <th>Expense Type</th>
      <th>Due Date</th>
      <th>Rent From</th>
      <th>Rent To</th>
      <th>Amount</th>
      <th>Frequency</th>
      <th>Comments</th>
    </tr>
  </thead>
  <tbody>
    {%- for row in doc.rent_schedule_tab -%}
    <tr>
      <td>{{ loop.index }}</td>
      <td>{{ row.expense_type }}</td>
      <td>{{ row.due_date }}</td>
      <td>{{ row.rent_from }}</td>
      <td>{{ row.rent_to }}</td>
      <td>{{ row.amount }}</td>
      <td>{{ row.frequency }}</td>
      <td>{{ row.comments }}</td>
    </tr>
    {%- endfor -%}
  </tbody>
</table>

</body>
</html>
