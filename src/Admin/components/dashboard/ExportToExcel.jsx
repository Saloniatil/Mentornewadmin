import React from 'react';
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import moment from 'moment';

export const ExportToExcel = ({ apiData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  // Format the date fields using moment
  const formatDataWithDate = (data) => {
    return data.map(item => ({
      ...item,
      Date: item.Date ? moment(item.Date).format("DD/MM/YYYY") : "", // Format the 'Date' field
    }));
  };

  const exportToCSV = (apiData, fileName) => {
    const formattedData = formatDataWithDate(apiData); // Format dates before exporting
    const ws = XLSX.utils.json_to_sheet(formattedData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <button onClick={(e) => exportToCSV(apiData, fileName)} className="btn btn-primary">
      <i className="fa fa-file"></i> Download Early Accesses Sheet
    </button>
  );
};
