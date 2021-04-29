/**
 *
 * MobileMenu
 *
 */
import React, { useState } from "react"
import { CSSTransitionGroup } from "react-transition-group"

// InterFaces
import Input from "@Components/Input"
import Button from "@Components/Button"
import { linkitems, dashboardItems } from "@data/common/data"
import Link from "@Components/Link"
import { IMobileMenu } from "./MobileMenu"

// svg
import Search from "./svg/search.svg"
import Arrow from "./svg/down.svg"
import Close from "./svg/close.svg"
import Profile from "./svg/profile.svg"
import Arrowdown from "./svg/arrow.svg"

// styles
import styles from "./styles.module.scss"

const MobileMenu: React.FunctionComponent<IMobileMenu.IProps> = ({ CloseMenu }) => {
  const [profileDrop, setProfileDrop] = useState<boolean>(false)
  const [selected, setSelected] = useState("")
  const [title, setTitle] = useState("Buy")
  return (
    <>
      <div className={styles.hamburgerMenu}>
        <header className="d-flex justify-content-between py-3">
          <div className={`ml-3 ${styles.profile}`}>
            <div className={styles["profile-img"]}>
              <Profile />
            </div>

            <span
              role="button"
              tabIndex={0}
              onKeyDown={() => setProfileDrop(!profileDrop)}
              className={`ml-2 ${styles["profile-name"]}`}
              onClick={() => setProfileDrop(!profileDrop)}>
              Dashboard
              <Arrowdown className="ml-1" />
            </span>
          </div>
          <div className={`${styles["close-btn"]}`}>
            <Close onClick={() => CloseMenu()} />
          </div>
        </header>
        <CSSTransitionGroup transitionName="menu" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {profileDrop && (
            <div className={styles["dashboard-dropdown"]}>
              <ul>
                {dashboardItems.map(item => (
                  <li>
                    <span>{item.item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CSSTransitionGroup>
        <div className={`${styles["search-wrapper"]} py-3`}>
          <div>
            <Input autoFocus hasIcon={<Search />} theme="menuInput" type="text" />
          </div>
        </div>
        <div className="d-flex w-100">
          <div className="w-50">
            <Button
              theme="outline-gray"
              size="md"
              height="42px"
              font="13px"
              borderRadius="0px"
              handleClick={() => setTitle("Rent")}
              active={title === "Rent"}>
              Rent
            </Button>
          </div>
          <div className="w-50">
            <Button
              theme="outline-gray"
              size="md"
              height="42px"
              handleClick={() => setTitle("Buy")}
              active={title === "Buy"}
              font="13px"
              borderRadius="0px">
              Buy
            </Button>
          </div>
        </div>
        <div className={styles["hamburger-links"]}>
          <ul className={`${styles["sub-list"]}`}>
            {linkitems.map(link => (
              <li
                role="button"
                tabIndex={0}
                onKeyDown={() => setSelected(link.sublink)}
                key={link.sublink}
                onClick={() => setSelected(link.sublink)}>
                <span>{link.sublink}</span>

                <Arrow onClick={() => setSelected(link.sublink)} />

                {selected === link.sublink ? (
                  <ul className={`${styles["nested-list"]}`}>
                    {link.links.map((i, index) => (
                      <li key={index}>
                        <Link href={i.path}>{i.link}</Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
