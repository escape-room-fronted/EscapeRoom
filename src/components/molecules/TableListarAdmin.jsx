import React, { useState, useEffect, useMemo } from "react";
import axios from "../../services/axios";
import ModalFormAdmin from "../organisms/ModalFormAdmin";
import useAuth from "../../hooks/useAuth";
import DataTable from "react-data-table-component";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import ModalWindowOk from "../atoms/molecules/ModalWindowOk";
import { themeEducamas } from "../../Helpers/configTables";
import ModalFormAdminEdit from "../organisms/ModalFormAdminEdit";

const DELETE_ADMIN = "users/";
const GET_ADMINS = "users/alladmins";

const TableListarAdmin = () => {
  const { auth } = useAuth();
  const theme = themeEducamas;
  const [admins, setAdmins] = useState();
  const [isUpdate, setIsUpdate] = useState(false);
  const [text, setText] = useState("");

  const filteredUsers = () => {
    let dataFilter = admins.filter((admin) =>
      admin.name.toLowerCase().includes(text.toLowerCase())
    );

    return dataFilter;
  };

  const getData = async () => {
    try {
      const response = await axios.get(GET_ADMINS, {
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
      cell: (data) => <ModalFormAdminEdit data={data} />,
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
        <ModalFormAdmin setIsUpdate={setIsUpdate} isUpdate={isUpdate} />
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
