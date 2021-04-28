/**
 *
 * Paginator
 *
 */
import React from "react"

// InterFaces
import Pagination from "react-bootstrap/Pagination"
import { IPaginator } from "./Paginator"

// styles
import styles from "./styles/Paginator.module.scss"

// svg
import Back from "./svg/back.svg"
import Next from "./svg/next.svg"

export const Paginator: React.FunctionComponent<IPaginator.IProps> = ({
  count,
  current,
  nextHandler,
  backHandler,
  handler,
}) => (
  <>
    <h4 className={styles["pagination-title"]}>{`Viewing page 1 of ${count}`}</h4>
    <Pagination bsPrefix={styles["custom-paginator"]} className="mx-auto">
      <li>
        <span onClick={() => backHandler()} className={styles.back}>
          <Back />
        </span>
      </li>
      {count.map(page => (
        <Pagination.Item key={page} onClick={() => handler(page)} className={page === current ? styles.active : null}>
          {page}
        </Pagination.Item>
      ))}

      {/* <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Item>{6}</Pagination.Item> */}

      <li>
        <span onClick={() => nextHandler()} className={styles.next}>
          <Next />
        </span>
      </li>
    </Pagination>
  </>
)

export default Paginator
