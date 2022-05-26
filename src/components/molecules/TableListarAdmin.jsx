import React, { useState, useEffect } from "react";
// import MUIDataTable from "mui-datatables";
import axios from "../../services/axios";
import ModalFormAdmin from "../organisms/ModalFormAdmin";
import useAuth from "../../hooks/useAuth";
import DataTable, { createTheme } from "react-data-table-component";
import "styled-components";

const TableListarAdmin = () => {
  const { auth } = useAuth();
  console.log(auth.accesToken);

  const [admins, setAdmins] = useState();

  const [isExcel, setIsExcel] = useState(false);

  const endpoint = "users/alladmins";

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
      // setIsExcel(!isExcel);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [isExcel]);

  const colums = [
    {
      name: "ID",
      selector: (row) => row._id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "User Name",
      selector: (row) => row.username,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Editar",
      selector: (row) => row.email,
    },
    {
      name: "Eliminar",
      selector: (row) => row.email,
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
      <div className="flex pt-4 gap-4 justify-end pr-10">
        <ModalFormAdmin />
      </div>

      <div className="pt-4 z-0">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
          <div className="bg-dark text-white overflow-hidden shadow-xl sm:rounded-lg">
            {admins && (
              <div>
                <DataTable
                  data={admins}
                  columns={colums}
                  pagination
                  theme="educamas"
                  highlightOnHover
                  responsive="true"
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
