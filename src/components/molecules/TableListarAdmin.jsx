import React, { useState, useEffect, useMemo } from "react";
import axios from "../../services/axios";
import ModalFormAdmin from "../organisms/ModalFormAdmin";
import useAuth from "../../hooks/useAuth";
import DataTable, { createTheme } from "react-data-table-component";
import "styled-components";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import ModalWindowOk from "../atoms/molecules/ModalWindowOk";

const DELETE_ADMIN = "users/";

const TableListarAdmin = () => {
  const { auth } = useAuth();
  console.log(auth.accesToken);

  const [admins, setAdmins] = useState();
  const [isUpdate, setIsUpdate] = useState(false);
  const [text, setText] = useState("");

  // const endpoint = "users/allusers";
  const endpoint = "users/alladmins";

  const filteredUsers = () => {
    let dataFilter = admins.filter((admin) =>
      admin.name.toLowerCase().includes(text.toLowerCase())
    );

    return dataFilter;
  };

  const getData = async () => {
    try {
      const response = await axios.get(endpoint, {
        headers: { "x-access-token": auth.accesToken },
      });
      if (Array.isArray(response.data)) {
        setAdmins(response.data);
      } else {
        setAdmins([response.data]);
      }
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleButtonDelete = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(`${DELETE_ADMIN}${id}`, {
        headers: { "x-access-token": auth.accesToken },
      });

      console.log(response);
      setIsUpdate(!isUpdate);
      ModalWindowOk("Administrador Borrado Correctamente");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [isUpdate]);

  useEffect(() => {
    if (admins) {
      filteredUsers();
    }
  }, [text]);

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
        <button onClick={() => handleButtonDelete(data._id)}>
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
      <div className="flex pt-4 gap-4 justify-end pr-10">
        <ModalFormAdmin opctions="create" />
      </div>

      <div className="pt-4 z-0">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
          <div className="bg-dark text-white overflow-hidden shadow-xl sm:rounded-lg">
            {admins && (
              <div>
                <DataTable
                  title="Administrador"
                  data={filteredUsers()}
                  columns={colums}
                  pagination
                  theme="educamas"
                  highlightOnHover
                  responsive={true}
                  subHeader={true}
                  subHeaderComponent={ButtonSearch}
                  persistTableHead
                  progressPending={false}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableListarAdmin;
