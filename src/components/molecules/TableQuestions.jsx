import React, { useState, useEffect, useMemo } from "react";
import useAuth from "../../hooks/useAuth";

import DataTable from "react-data-table-component";
import { themeEducamas } from "../../Helpers/configTables";
import { FaTrash } from "react-icons/fa";
import ModalWindowOk from "../atoms/molecules/ModalWindowOk";
import ModalFormCreateRoom from "./ModalFormCreateRoom";

import { getDataQuestions, deleteDataQuestions } from "../../services/serviceRooms";


const TableQuestions = () => {

  const [text, setText] =useState("");
  const [isUpDate, setIsUpDate] = useState(false);
  const theme = themeEducamas
  const [questions, setQuestions] = useState([]);
  const {auth, setAuth} = useAuth();

  const filteredQuestions = () => {
    let dataFilter = questions.filter((question) =>
      question.question.toLowerCase().includes(text.toLowerCase())
    );

    return dataFilter;
  };

  useEffect(() => {
    const data = [];
    getDataQuestions(auth.accesToken)
    .then((res) =>{
      for (let i = 0; i < res.data.length; i++) {
        data.push({
          id: res.data[i]._id,
          question: res.data[i].question,
          incorrect_answers1: res.data[i].incorrect_answers[0],
          incorrect_answers2: res.data[i].incorrect_answers[1],
          incorrect_answers3: res.data[i].incorrect_answers[2],
          tips1: res.data[i].tips[0],
          tips2: res.data[i].tips[1],
          correct_answer: res.data[i].correct_answer,
        });
      }
      setQuestions(data);
      console.log(data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [isUpDate]);


  useEffect(() => {
    if (questions) {
      filteredQuestions();
    }
  }, [text]);


  const handleButtonDelete = (id) => {
    deleteDataQuestions(auth.accesToken, id)
    .then((res) =>{
      console.log(res)
      setIsUpDate(!isUpDate);
      ModalWindowOk("Pregunta eliminada");
    })
    .catch((err)=>{
      console.log(err)
      ModalWindowOk("No se pudo eliminar la pregunta");
    })
  };



  const colums = [
    {
      name: "Pregunta",
      selector: (row) => row.question,
      sortable: true,
    },
    {
      name: "Respuesta 1",
      selector: (row) => row.incorrect_answers1,
      sortable: true,
    },
    {
      name: "Respuesta 2",
      selector: (row) => row.incorrect_answers2,
      sortable: true,
    },
    {
      name: "Respuesta 3",
      selector: (row) => row.incorrect_answers3,
      sortable: true,
    },
    {
      name: "Respuesta correcta",
      selector: (row) => row.correct_answer,
      sortable: true,
    },
    {
      name: "Pista",
      selector: (row) => row.tips1,
      sortable: true,
    },
    {
      name: "Editar",
      cell: () => (
        <button>
          {" "}
          <FaTrash />{" "}
        </button>
    ),
    button: true,},
    {
      name: "Eliminar",
      cell: (data) => (
        <button onClick={() => handleButtonDelete(data.id)}>
          {" "}
          <FaTrash />{" "}
        </button>
    ),
    button: true,},

  ];

  const ButtonSearch = useMemo(() => {
    return (
      <input
        type="text"
        className="text-white bg-gray outline-none border-b-2 text-center"
        placeholder="Buscar por nombre"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
    );
  });


  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold pt-2 text-2xl text-yellow">Rooms</h1>
        <div className="pr-10 pt-4">
            <ModalFormCreateRoom 
            isUpDate={isUpDate} 
            setIsUpDate={setIsUpDate}/>
        </div>
      </div>
      <div className="pt-4 z-0">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
          <div className="bg-dark text-white overflow-hidden shadow-xl sm:rounded-lg">
            <div>

            { questions && (
            <DataTable 
            title={"Rooms"}
            data={filteredQuestions()}
            columns={colums}
            pagination
            theme="educamas"
            highlightOnHover
            responsive="true"
            subHeader={true}
            subHeaderComponent={ButtonSearch}
            persistTableHead
            progressPending={false}
            />
            )}

           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableQuestions;
