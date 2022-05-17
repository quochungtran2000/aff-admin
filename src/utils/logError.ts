const logError = (title: string, error: any): void => {
  console.log(
    '=========== ' + title.toUpperCase() + ' error:',
    error.response?.data || error
  );
};

export default logError;
