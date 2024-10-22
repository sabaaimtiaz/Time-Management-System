
import React from 'react';
import { Table } from "antd";
import './Table.css';
import { Input } from 'antd';

export const DataTable = () => {
    const { Search } = Input;
    const onSearch = (value, _e, info) => console.log(info?.source, value);
  const dataSource  = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '3',
      name: 'Saba',
      age: 44,
      address: '10 Downing Street',
    },
    {
      key: '4',
      name: 'Anna',
      age: 30,
      address: '10 Downing Street',
    },
    {
      key: '5',
      name: 'David',
      age: 45,
      address: '10 Downing Street',
    },
    
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <span className="column-highlight">{text}</span>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const rowClassName = (record,index) => {
    if (index === 0 || index === 2 || index === 4) { 
      return 'highlight-row'; 
    }
    return ''; 
  };

  return (
    <div>
        
    <div className="theader">
      <h2>Time Sheet</h2>

    <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    /> 
    </div>

      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
        rowClassName={rowClassName}
      />
    </div>
  );
};

export default DataTable;
