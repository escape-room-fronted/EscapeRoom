import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "../../services/axios";
import ModalFormUser from "../organisms/ModalFormUser";
import useAuth from "../../hooks/useAuth";
import ModalLoadDataExcel from "../molecules/ModalLoadDataExcel";

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

  useEffect(() => {
    getData();
  }, [isExcel]);

  const colums = [
    {
      name: "_id",
      label: "ID",
    },
    {
      name: "name",
      label: "Name",
    },
    {
      name: "username",
      label: "USER NAME",
    },
    {
      name: "email",
      label: "EMAIL",
    },
  ];

  const options = {
    fixedHeader: false,
    responsive: "scrollMaxHeight",
  };

  return (
    <div>
      <h1 className="font-bold pt-2 text-2xl text-yellow">Usuarios</h1>
      <div className="flex gap-4 justify-end pr-10">
        <ModalFormUser />
        {/* <button className="btn-yellow gap-20" type="button">
          {" "}
          Cargar usuarios{" "}
        </button> */}
        <ModalLoadDataExcel 
        handleUpdateTable={setIsExcel} 
        handleUpdateListar={isExcel}/>
      </div>

      <div className="pt-4 z-0">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
          <div className="bg-dark text-white overflow-hidden shadow-xl sm:rounded-lg">
            {users && (
              <div>
                <MUIDataTable
                  title={"Usuarios"}
                  data={users}
                  columns={colums}
                  options={options}
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
