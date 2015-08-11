'use strict';

import React from 'react';
import classnames from 'classnames';

import Router from '../flux/router';

export default class NavigationOverlayLink extends React.Component {
  render() {
    const classes = classnames('nav__overlay__menu__item', {
      selected: this.props.selected
    });
    return (
      <li className={classes}>
          <a href={this.props.url} className="nav__overlay__menu__item__link" onClick={this.onClick}>{this.props.children}</a>
      </li>
    );
  }
  onClick = (e) => {
    e.preventDefault();
    this.props.onClick();
    if(this.props.external) {
      ga('send', {
        'hitType': 'event',          // Required.
        'eventCategory': 'nav',   // Required.
        'eventAction': 'click_nav_link',     // Required.
        'eventLabel': this.props.gaId, // TODO: Remove once GA has been hooked into router
        'hitCallback' : () => {
          window.location = this.props.url;
        }
      });
    } else {
      ga('send', {
        'hitType': 'event',          // Required.
        'eventCategory': 'nav',   // Required.
        'eventAction': 'click_nav_link',     // Required.
        'eventLabel': this.props.gaId, // TODO: Remove once GA has been hooked into router
      });
      Router.navigate(this.props.url);
    }
  }
}
