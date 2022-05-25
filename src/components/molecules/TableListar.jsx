import React, { useState, useEffect } from "react";
// import MUIDataTable from "mui-datatables";
import axios from "../../services/axios";
import ModalFormUser from "../organisms/ModalFormUser";
import useAuth from "../../hooks/useAuth";
import ModalLoadDataExcel from "../molecules/ModalLoadDataExcel";
import DataTable, { createTheme } from "react-data-table-component";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import "styled-components";


const TableListar = () => {
  const { auth } = useAuth();
  console.log(auth.accesToken);

  const [users, setUsers] = useState();
  const [isExcel, setIsExcel] = useState(false);

  const endpoint = "users/allusers";

  const getData = async () => {
    try {
      const response = await axios.get(endpoint, {
        headers: { "x-access-token": auth.accesToken },
      });
      if (Array.isArray(response.data)) {
        setUsers(response.data);
      } else {
        setUsers([response.data]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleButtonEdit = (data) => {
    console.log(data);
  };

  const handleButtonDelete = (data) => {
    alert(data._id + " " + data.username);
  };

  useEffect(() => {
    getData();
  }, [isExcel]);

  const colums = [
    {
      name: "Nombre",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Usuario",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Correo",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Editar",
      cell: (data) => (
        <button onClick={() => handleButtonEdit(data)}>
          <FaPencilAlt />{" "}
        </button>
      ),
      button: true,
    },
    {
      name: "Eliminar",
      cell: (data) => (
        <button onClick={() => handleButtonDelete(data)}>
          {" "}
          <FaTrash />{" "}
        </button>
      ),
      button: true,
    },

  ];

  createTheme(
    "educamas",
    {
      text: {
        primary: "#fff",
        secondary: "#fff",
      },
      background: {
        default: "#242424",
      },
      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "#717171",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );

  return (
    <div>
      <div className="flex gap-4 justify-end pr-10">
        <ModalFormUser />
        {/* <button className="btn-yellow gap-20" type="button">
          {" "}
          Cargar usuarios{" "}
        </button> */}
        <ModalLoadDataExcel
          handleUpdateTable={setIsExcel}
          handleUpdateListar={isExcel}
        />
      </div>

      <div className="pt-4 z-0">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
          <div className="bg-dark text-white overflow-hidden shadow-xl sm:rounded-lg">
            {users && (
              <div>
                <DataTable
                  title={"Usuarios"}
                  data={users}
                  columns={colums}
                  pagination
                  theme="educamas"
                  highlightOnHover
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableListar;
