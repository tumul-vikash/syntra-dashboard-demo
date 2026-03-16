import { Box } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

import Header from "../../components/Header";
import KPICard from "../../components/KPICard";
import Table from "../../components/Table";
import SectionTitle from "../../components/SectionTitle";

import FinanceData from "../../data/finance-data.json";

function Home() {
  return (
    <div>
      <Header />
      <SectionTitle title="Key Performance Indicators" />
      <Box
        sx={{
          width: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            gap: 2,
            minWidth: "max-content",
          }}
        >
          {Object.values(FinanceData.summary).map((kpi, index) => (
            <KPICard key={kpi.index} title={kpi.title} value={kpi.value} />
          ))}
        </Box>
      </Box>
      <SectionTitle title="All Invoices" />
      <Box>
        <Table />
      </Box>
      <SectionTitle title="Analytics" />
      <Box>
        <BarChart width={1200} height={300} data={FinanceData.projects}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="projectName" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="invoiceAmount" fill="#8884d8" />
          <Bar dataKey="receivedAmount" fill="#82ca9d" />
        </BarChart>
      </Box>
    </div>
  );
}

export default Home;
