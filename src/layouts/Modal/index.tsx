/* eslint-disable import/no-named-as-default-member */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/**
 *
 * Modal
 *
 */
import React, { useState } from "react"
import { Modal as Comp } from "react-bootstrap"

import useWindowSize from "@Services/hooks/useWindowSize"

// components
import Button from "@Components/Button"
import { IModal } from "./Modal"

// Styles
import styles from "./styles/modal.module.scss"

// components

// svg
import CloseBtn from "./svg/close.svg"

// eslint-disable-next-line object-curly-newline
export const Modal: React.FunctionComponent<IModal.IProps> = ({ children, tabs, status, changeStatus }) => {
  // const [isOpen, setIsOpen] = useState<boolean>(true);

  const [tabKey, setTabKey] = useState<string>(tabs[0] ? tabs[0].title : "")
  // const [stateModal, setStateModal] = useState(status);
  const size = useWindowSize()

  // useEffect(() => {
  //   setStateModal(status);
  // });

  const isTabular = React.Children.count(children)

  const Tabs = (
    <>
      {/* Tabs Section */}
      <div className={styles.tabs}>
        {tabs.map(tab => (
          <h5
            role="button"
            tabIndex={-1}
            onKeyUp={() => setTabKey(tab.title)}
            className={tab.title === tabKey ? styles.hover : ""}
            onClick={() => setTabKey(tab.title)}
            key={tab.title}>
            {tab.title}
          </h5>
        ))}
      </div>

      {/* Tabs Container */}
      <div className={styles.tabsContainer}>
        {tabs.map(tab => (
          <div className={styles.innertab} key={tab.title}>
            {tab.title === tabKey ? <tab.component /> : null}
          </div>
        ))}
      </div>
    </>
  )

  const MobileTabs = (
    <>
      {/* Tabs Section */}
      <div className={styles.Mobiletabs}>
        {tabs.map(tab => (
          <div key={tab.title} className={`${styles.groupbtn} ${tab.title === tabKey ? styles.hoverbtn : ""}`}>
            <Button
              theme="outline-gray"
              borderRadius="0px"
              fontFamily="SemiBoldFont"
              handleClick={() => setTabKey(tab.title)}
              key={tab.title}>
              {tab.title}
            </Button>
          </div>
        ))}
      </div>

      {/* Tabs Container */}
      <div className={styles.tabsContainer}>
        {tabs.map(tab => (
          <div className="w-100" key={tab.title}>
            {tab.title === tabKey ? <tab.component /> : null}
          </div>
        ))}
      </div>
    </>
  )

  return (
    <Comp keyboard onHide={() => changeStatus(false)} show={status} backdrop dialogClassName={styles["modal-80w"]}>
      <Comp.Body bsPrefix={styles.body}>
        {size > 700 ? (
          <>
            <CloseBtn onClick={() => changeStatus(false)} className={styles["close-btn"]} />
            {isTabular === 1 ? children : Tabs}
          </>
        ) : (
          <>{isTabular === 1 ? children : MobileTabs}</>
        )}
      </Comp.Body>
    </Comp>
  )
}

export default Modal
