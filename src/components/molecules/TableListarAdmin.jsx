import React, { useState, useEffect, useMemo } from "react";
import useAuth from "../../hooks/useAuth";

import DataTable from "react-data-table-component";
import { FaTrash } from "react-icons/fa";
import { themeEducamas } from "../../Helpers/configTables";

import ModalFormEdit from "../organisms/ModalFormEdit";
import ModalFormCreateUser from "../organisms/ModalFormCreateUser";
import ModalWindowOk from "../atoms/molecules/ModalWindowOk";
import { deleteDataUsers, getDataAdmins } from "../../services/serviceUsers";

const TableListarAdmin = () => {
  const { auth } = useAuth();
  const theme = themeEducamas;
  const [admins, setAdmins] = useState();
  const [isUpDate, setIsUpDate] = useState(false);
  const [text, setText] = useState("");

  const filteredUsers = () => {
    let dataFilter = admins.filter((admin) =>
      admin.name.toLowerCase().includes(text.toLowerCase())
    );

    return dataFilter;
  };

  const getData = async () => {
    getDataAdmins(auth.accesToken)
      .then((res) => {
        console.log(res.data);
        if (Array.isArray(res.data)) {
          setAdmins(res.data);
        } else {
          setAdmins([res.data]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleButtonDelete = async (id) => {
    deleteDataUsers(auth.accesToken, id)
      .then((res) => {
        console.log(res);
        setIsUpDate(!isUpDate);
        ModalWindowOk("Administrador Borrado Correctamente");
      })
      .catch((err) => {
        console.log(err);
        ModalWindowOk("No se pudo eliminar el Administrador");
      });
  };

  useEffect(() => {
    getData();
  }, [isUpDate]);

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
        <ModalFormEdit
          data={data}
          setIsUpDate={setIsUpDate}
          isUpDate={isUpDate}
        />
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
        <ModalFormCreateUser
          setIsUpDate={setIsUpDate}
          isUpDate={isUpDate}
          rol="admin"
        />
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
