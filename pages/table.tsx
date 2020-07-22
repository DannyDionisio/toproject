import React, { useEffect, forwardRef } from "react";
import fetch from "isomorphic-unfetch";
import MaterialTable, { Column, Icons } from "material-table";
import Select from "@material-ui/core/Select";
import axios from "axios";

import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  Edit,
  DeleteOutline,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
  Dashboard,
} from "@material-ui/icons";

import Layout from "../components/layout";
import Link from "next/link";
import { MenuItem } from "@material-ui/core";

interface Row {
  languages: string;
  status: string;
  end_date: number;
}

const TITLES = {
  to_learn: "To Learn",
  learning: "Learning",
  learned: "Learned",
  docs_to_read: "Docs to Read",
  archived: "Archived",
};

const columns: Array<Column<Row>> = [
  { title: "Programming Languages", field: "languages" },
  {
    title: "Status",
    field: "status",
    render: (rowData) => <span>{TITLES[rowData.status]}</span>,
    initialEditValue: "to_learn",
    editComponent: (props) => {
      return (
        <Select
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        >
          {Object.entries(TITLES).map(([key, value]) => {
            return (
              <MenuItem key={key} value={key}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      );
    },
  },
  { title: "End Date", field: "end_date", type: "datetime" },
];

function Table() {
  const [state, setState] = React.useState<Row[]>([]);

  const allData = () => {
    fetch("/api/programming_languages")
      .then((r) => r.json())
      .then((data: Row[]) => setState(data));
  };

  useEffect(() => {
    allData();
  }, []);

  const tableIcons: Icons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  const handleAddRow = (newData) => {
    return new Promise((resolve) => {
      console.log("ADD", newData);
      resolve();
      setState((prevState) => {
        const data = [...prevState];
        data.push(newData);
        return data;
      });
    });

    event.preventDefault();
    const languages = this.state.languages;
    const status = this.state.status;
    const datetime = this.state.datetime;
    axios
      .post("/api/programming_languages", { languages, status, datetime })
      .then(() => {
        this.setState({
          languages: "",
          status: "",
          datetime: "",
        });
        this.props.history.push("/table");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Layout>
      <Link href="/kanban-board">
        <a>
          <Dashboard />
        </a>
      </Link>
      <MaterialTable
        icons={tableIcons}
        title="Programming Languages to learn"
        columns={columns}
        data={state}
        editable={{
          onRowAdd: handleAddRow,
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              console.log("UPDATE");
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              console.log("UPDATE");
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    </Layout>
  );
}

export default Table;
