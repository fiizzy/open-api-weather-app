import Paper from "@mui/material/Paper";

/**
 * Component that displays the values of the
 * lines of longitude and latitude
 *
 * @param {Object} props - The properties passed to the component.
 * @returns {JSX.Element}.
 */
export const LocationContainer = (props: { title: string; value: number }) => {
  return (
    <Paper
      elevation={3}
      className="w-full max-w-36  bg-gray-900 text-white px-8 py-8"
    >
      <p>{props.title}</p>
      <p className="text-xl">{props.value}</p>
    </Paper>
  );
};
