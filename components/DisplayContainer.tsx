import { Paper } from "@mui/material";

export const DisplayContainer = (props: { body: string; date: string }) => {
  return (
    <Paper elevation={3} className="w-full bg-gray-900 text-white px-8 py-8">
      <div>Weather Overview</div>
      <div className="text-gray-500">{props.date}</div>
      <div className="">{props.body}</div>
    </Paper>
  );
};
