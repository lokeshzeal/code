!DOCTYPE html>
<html>
<head>
    <title>Lease Abstraction Report</title>
</head>
<body>
    <h1>Lease Abstraction Report</h1>

    <table class="report">
        <tr>
            <th colspan ="2" class="highlight">Status</th>
            
        </tr>
        <tr>
            <th >Lease Project Name</th></th>
            <td>{{ doc.project_id }}</td>
        </tr>
        <tr>
            <th>Location / Building Name</th>
            <td>{{ doc.property_building_name }}</td>
        </tr>
        <tr>
            <th>Workflow Status</th>
            <td>{{doc.workflow_status}}</td>
        </tr>
        <tr>
            <th>Workflow Sub Status</th></th>
            <td>{{ doc.workflow_sub_status }}</td>
        </tr>
             <th colspan ="2"  class="highlight">Basic Details</th>
            
        </tr>
        <tr>
            <th >Adress</th></th>
            <td>{{ doc.address }}</td>
        </tr>
        <tr>
            <th>Floor Detaills</th>
            <td>{{ doc.floor_detail }}</td>
        </tr>
        <tr>
            <th>Legal Name</th>
            <td>{{doc.legal_name}}</td>
        </tr>
        <tr>
            <th>Lease Status</th></th>
            <td>{{ doc.lease_status }}</td>
        </tr>
             <th >Lease Currency</th></th>
            <td>{{ doc.lease_currency }}</td>
        </tr>
        <tr>
            <th>City</th>
            <td>{{ doc.city }}</td>
        </tr>
        <tr>
            <th>State</th>
            <td>{{doc.state}}</td>
        </tr>
        <tr>
            <th>Zip Code</th></th>
            <td>{{ doc.zip_code}}</td>
        </tr>
        <tr>
            <th>Country</th>
            <td>{{doc.country}}</td>
        </tr>
        <tr>
            <th>Lease Type</th></th>
            <td>{{ doc.lease_type }}</td>
        </tr> 
        <tr>
             <th colspan ="2" class="highlight">Lease Daates</th>
            
        </tr>
        <tr>
            <th >Original Commencement Date</th>
            <td>{{ doc.original_commencement_date }}</td>
        </tr>
        <tr>
            <th>Original Expiration Date</th>
            <td>{{ doc.original_expiration_date}}</td>
        </tr>
        <tr>
            <th>Rent Start Date</th>
            <td>{{doc.rent_start_date}}</td>
        </tr>
        <tr>
            <th>Term Duration(in months)</th>
            <td>{{ doc.term_duration_in_months }}</td>
        </tr>
             <th >Current Commencement Date</th>
            <td>{{ doc.current_commencement_date }}</td>
        </tr>
        <tr>
            <th>Current Expiration Date</th>
            <td>{{ doc.current_expiration_date }}</td>
        </tr>
        <tr>
            <th>Lease Execution Date</th>
            <td>{{doc.lease_execution_date}}</td>
        </tr>
        <tr>
            <th>Comments</th>
            <td>{{ doc.comments}}</td>
        </tr>
         <tr>
             <th colspan ="2"  class="highlight">Area</th>
           
        </tr>
        <tr>
            <th >Area Type</th>
            <td>{{ doc.area_type }}</td>
        </tr>
        <tr>
            <th>Useable Area</th>
            <td>{{ doc.useable_area}}</td>
        </tr>
        <tr>
            <th>PRS</th>
            <td>{{doc.prs}}</td>
        </tr>
        <tr>
            <th>Rentable Area</th>
            <td>{{ doc.rentable_area }}</td>
        </tr>
             <th >Building Area</th>
            <td>{{ doc.building_area }}</td>
        </tr>
        <tr>
            <th>Area Comments</th>
            <td>{{ doc.area_comments }}</td>
        </tr>
        <table>
            <tr>
             <th colspan ="2"  class="highlight">Rent Schedule</th>
           </tr>
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
{%- if doc.get("Rent_Schedule_Child") -%}
    {%- for row in doc.get("Rent_Schedule_Child") -%}
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
    {%- else -%}
        <tr>
             <th colspan ="2"  class="highlight">No Schedule</th>
           </tr>
    {%- endif -%}
  </tbody>
  </table>
    
    </table>

</body>
</html>
