import React from 'react';

import Actions from '../flux/actions';
import ContactDetail from '../components/contact-detail';
import CloseButton from '../elements/close-button';
import {onClickContent} from '../modules/modal';

export default class ContactTray extends React.Component {
  render() {
    const contactData = this.props.contacts;
    return (
      <div className="contact-tray" onClick={onClickContent}>
        <CloseButton onClose={this.onClickClose} className="contact-tray__close" autoAnim={500} />
        <article className="contact-tray__content">
          {contactData.map(contactDetail => <ContactDetail detail={contactDetail}/>)}
        </article>
      </div>
    );
  }
  onClickClose() {
    Actions.closeModal();
  }
}
