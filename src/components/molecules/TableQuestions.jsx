import axios from "axios";
import React, { useState, useEffect } from "react";
// import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";

const TableQuestions = () => {
  const [questions, setQuestions] = useState([]);

  const endpoint = "https://fakestoreapi.com/products";

  const getData = async () => {
    await axios.get(endpoint).then((response) => {
      const data = response.data;
      console.log(data);
      setQuestions(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const colums = [
    {
      name: "id",
      label: "ID",
    },
    {
      name: "title",
      label: "TITLE",
    },
    {
      name: "price",
      label: "PRICE",
    },
    {
      name: "description",
      label: "DESCRIPTION",
    },
    {
      name: "category",
      label: "CATEGORY",
    },
  ];

  const options = {
    fixedHeader: false,
    responsive: "scrollMaxHeight",
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold pt-2 text-2xl text-yellow">Rooms</h1>
        <div className="pr-10 pt-4">
          <Link to="/create-room">
            <button className="btn-yellow">Crear room</button>
          </Link>
        </div>
      </div>
      <div className="pt-4 z-0">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
          <div className="bg-dark text-white overflow-hidden shadow-xl sm:rounded-lg">
            <div>
              {/* <MUIDataTable 
      title={"Rooms"}
      data={questions}
      columns={colums}
      options={options}
    /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableQuestions;
