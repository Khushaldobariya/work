import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Table(props) {
  const [data, setData] = useState([]);
  const [SearchInput, setSearchInput] = useState("");
  const [serchData, setserchData] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/user?&")
      .then((res) => {
        setData(res.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const filterData = data?.data?.filter((filterData) => {
      return (
        filterData?.id == SearchInput ||
        filterData?.name == SearchInput ||
        filterData?.year == SearchInput ||
        filterData?.color == SearchInput ||
        filterData?.pantone_value == SearchInput 
      );
    });

    setserchData(filterData);
  }, [SearchInput]);

  console.log(serchData);

  return (
    <div class="main-content">
      <div class="page-content">
        <div className="container-fluid">
          <h1 className="text-center">Table</h1>
          <form className="app-search d-none d-lg-block p-3">
            <div className="position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                onChange={(e) => setSearchInput(e.target.value)}
               
              />
              <span className="bx bx-search-alt " />
            </div>
          </form>
          <table class="table fs-4  table-bordered table-hover"
          >
            <thead>
              <tr className="text-center table-dark">
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">year</th>
                <th scope="col">color</th>
                <th scope="col">pantone_value</th>
              </tr>
            </thead>
            {data?.data?.map((ApiData) => {
              return (
                <tr className="text-center table-success">
                  <td>{ApiData.id}</td>
                  <td>{ApiData.name}</td>
                  <td>{ApiData.year}</td>
                  <td>{ApiData.color}</td>
                  <td>{ApiData.pantone_value}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
         
    </div>
  );
}

export default Table;
