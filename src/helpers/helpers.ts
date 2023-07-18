export const messageWrapper = {
  successMessageResponse: ( statusCode: number, messageResponse: string, data: any, count?: number ) => {
    return { statusCode ,  messageResponse , count, data  };
  },
  errorMessageResponse: ( statusCode: number, error: any ) => {
    return { statusCode , error };
  },
};
