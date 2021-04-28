declare namespace IErrorPage {
  export interface IProps extends WithTranslation {
    statusCode?: number;
  }

  export interface InitialProps {
    namespacesRequired: string[];
  }
}

export { IErrorPage };
