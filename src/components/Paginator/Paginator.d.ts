declare namespace IPaginator {
  export interface IProps {
    current: number;
    nextHandler: Function;
    backHandler: Function;
    handler: Function;
    count: number;
  }
}

export { IPaginator };
