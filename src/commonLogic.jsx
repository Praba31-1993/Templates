export const handleCSVExport = (headers, data) => {
    // Combine headers and rows into a CSV string
    const csvContent = [
      headers.join(","),
      ...data.map(item => headers.map(header => item[header] || "").join(","))
    ].join("\n");
  
    // Create a Blob and trigger a download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "data.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  
  export const handlePrint = () => {
    const printContent = document.getElementById("printSection");
  
    if (printContent) {
      const printWindow = window.open("", "_blank", "width=800,height=600");
      if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(`
          <html>
            <head>
              <title>Print</title>
              <style>
                /* Optional: Add styles for printing */
                body {
                  font-family: Arial, sans-serif;
                  margin: 20px;
                }
                table {
                  border-collapse: collapse;
                  width: 100%;
                }
                th, td {
                  border: 1px solid black;
                  padding: 8px;
                  text-align: left;
                }
                th {
                  background-color: #f2f2f2;
                }
                h1, h2, h3 {
                  margin-bottom: 10px;
                }
              </style>
            </head>
            <body>
              ${printContent.outerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
      } else {
        console.error("Failed to open print window.");
      }
    } else {
      console.error("Element with ID 'printSection' not found.");
    }
  };
  