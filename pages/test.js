const test = () => {
  return (
    <div>
      {process.env.NODE_ENV}
      {process.env.API_URI}
      {process.env.NEXT_PUBLIC_TEST}
    </div>
  );
};

export default test;
