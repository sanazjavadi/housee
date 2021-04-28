/**
 *
 * Privacy
 *
 */
import React from 'react';

// styles
import Styles from './styles/Privacy.module.scss';

// components
import Button from '../../../components/Button';

export const Privacy: React.FunctionComponent = () => (
  <div>
    <div className={Styles.privacy}>
      <h4> Privacy policy</h4>
      <h5>Automatic collection of information</h5>
      <p>
        When you visit the Website our servers automatically record information that your browser sends. This data may
        include information such as your device's IP address, browser type and version, operating system type and
        version, language preferences or the webpage you were visiting before you came to our Website, pages of our
        Website that you visit, the time spent on those pages, information you search for on our Website, access times
        and dates, and other statistics.
      </p>

      <p>
        Information collected automatically is used only to identify potential cases of abuse and establish statistical
        information regarding Website usage. This statistical information is not otherwise aggregated in such a way that
        would identify any particular user of the system.
      </p>

      <h5>Collection of personal information</h5>
      <p>
        You can visit the Website without telling us who you are or revealing any information by which someone could
        identify you as a specific, identifiable individual. If, however, you wish to use some of the Website's
        features, you may be asked to provide certain Personal Information (for example, your name and e-mail address).
        We receive and store any information you knowingly provide to us when you create an account, publish content,
        make a purchase, or fill any online forms on the Website. When required, this information may include the
        following: Personal details such as name, country of residence, etc. Contact information such as email address,
        address, etc. Account details such as user name, unique user ID, password, etc. Proof of identity such as
        photocopy of a government ID. Payment information such as credit card details, bank details, etc. Information
        about other individuals such as your family members, friends, etc. Any other materials you willingly submit to
        us such as articles, images, feedback, etc. You can choose not to provide us with your Personal Information, but
        then you may not be able to take advantage of some of the Website's features. Users who are uncertain about what
        information is mandatory are welcome to contact us.
      </p>
    </div>

    <div className={`w-100  d-flex align-items-between ${Styles.bottomSection}`}>
      <div className={Styles.selectInput}>
        <input type="checkbox" />
        <p>Accept terms and conditions</p>
      </div>
      <div className={Styles.groupBtn}>
        <div className={Styles.declineBtn}>
          <Button theme="outline">Decline</Button>
        </div>
        <div className={Styles.acceptBtn}>
          <Button theme="primary">Accept</Button>
        </div>
      </div>
    </div>
  </div>
);
export default Privacy;
