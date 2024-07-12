export const ErrorContainer = (props: { error: string | null }) => {
  return (
    <>
      {props.error ? (
        <div className="p-2 bg-red-800 text-white w-full text-center">
          {props.error && props.error}
        </div>
      ) : (
        <div />
      )}
    </>
  );
};
