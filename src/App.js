import React from 'react';
import './App.css'
import './Table.css'
import data from './data.json'
import Table from 'responsive-sortable-react-table'
import 'responsive-sortable-react-table/dist/style.css'

const App = () => {
  return (
    <div className="App">
      <h1>Responsive Sortable React Table</h1>
      <h5>by Liomard J Mesa</h5>
      <Table
        headers={data.headers}
        content={data.content}
        pageSize={10}
        className="my-table"
        headerClass="my-header"
        bodyClass="my-body"
        />
    </div>
  );
};

export default App;