import { Paper } from "@mui/material";

/**
 * Displays the body(overview) text of the lat and lon data
 *
 * @param {Object} props - The properties passed to the component.
 * @returns {JSX.Element}.
 */
export const DisplayContainer = (props: { body: string; date: string }) => {
  return (
    <Paper
      elevation={3}
      className="w-full bg-gray-900 text-white px-8 py-8 max-h-3xl"
    >
      <div>Weather Overview</div>
      <div className="text-gray-500">{props.date}</div>
      <div className="">{props.body}</div>
    </Paper>
  );
};
