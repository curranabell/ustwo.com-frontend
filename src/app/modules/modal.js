import React from 'react';
import classnames from 'classnames';

import Actions from '../flux/actions';

class Modal extends React.Component {
  render() {
    return (
      <div className={classnames('modal', this.props.className, {
          "below-header": this.props.belowHeader
        })} onClick={this.onClick}>
        {this.props.children}
      </div>
    );
  }
  onClick() {
    Actions.closeModal();
  }
};
Modal.onClickContent = (e) => {
  e.stopPropagation();
};

export default Modal;
