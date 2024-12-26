import { TDocumentDefinitions } from 'pdfmake/interfaces';

interface reportOptions {
  name: string;
}

export const getHelloReport = (options: reportOptions) => {
  const { name } = options;
  const docDefinition: TDocumentDefinitions = {
    content: [`Hola ${name}`],
  };

  return docDefinition;
};
