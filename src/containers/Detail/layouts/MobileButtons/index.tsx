/**
 *
 * MobileButtons
 *
 */
import React from "react"

// InterFaces
import Button from "@Components/Button"
import { IMobileButtons } from "./MobileButtons"

import Fav from "./svg/fav.svg"
import Share from "./svg/share.svg"

export const MobileButtons: React.FunctionComponent<IMobileButtons.IProps> = () => (
  <section className="d-flex flex-column justify-content-center align-items-center">
    <div className="d-flex  justify-content-between align-items-center w-100 px-3">
      <div className="w-50 mr-1">
        <Button theme="outline-gray" size="md" height="32px" font="12px" fontFamily="Regular" hasIcon={<Share />}>
          Share link
        </Button>
      </div>
      <div className="w-50 ml-1">
        <Button theme="outline-gray" size="md" height="32px" font="12px" fontFamily="Regular" hasIcon={<Fav />}>
          Add to Favorites
        </Button>
      </div>
    </div>
    <div className="d-flex justify-content-between align-items-center w-100 px-3 mt-4 mb-4">
      <div className="w-50 mr-2">
        <Button theme="primary" font="15px">
          Schedule a Tour
        </Button>
      </div>
      <div className="w-50 ml-2">
        <Button theme="outline" font="15px">
          Send an Offer
        </Button>
      </div>
    </div>
  </section>
)

export default MobileButtons
