'use strict';

import React from 'react';
import find from 'lodash/collection/find';
import get from 'lodash/object/get';

export default class PagePrivacy extends React.Component {
  render() {
    const pageData = this.props.page;
    return (
      <article className="page-privacy">

        <div className="hero-image" style={{backgroundImage: "url(/images/photo.jpg)"}}>
          <img className="image" src="/images/photo.jpg" />
        </div>

        <div className="content-container">

          <h2>What is this Privacy Policy for?</h2>
          <p>This privacy policy is for ustwo.com and served by ustwo studios ltd and governs the privacy of its users who choose to use it.</p>
          <p>The policy sets out the different areas where user privacy is concerned and outlines the obligations & requirements of the users, the website and website owners. Furthermore the way this website processes, stores and protects user data and information will also be detailed within this policy.</p>
          <h2>The Website</h2>
          <p>This website and its owners take a proactive approach to user privacy and ensure the necessary steps are taken to protect the privacy of its users throughout their visiting experience. This website complies to all UK national laws and requirements for user privacy.</p>
          <h3>Use of Cookies</h3>
          <p>This website uses cookies to improve the user’s experience while visiting the website.</p>
          <p>Cookies are small files saved to the user's computer’s hard drive that track, save and store information about the user's interactions and usage of the website. This allows the website, through its server to provide the users with a tailored experience within this website.</p>
          <p>Users are advised that if they wish to deny the use and saving of cookies from this website on to their computers hard drive they should take necessary steps within their web browsers security settings to block all cookies from this website and its external serving vendors.</p>

          <h2>Third-party cookies</h2>

          <p>We use third-party cookies to collect statistics in aggregate form in analysis tools such as Google Analytics. This website uses such software to monitor its visitors to better understand how they use it. This software is provided by Google Analytics which uses cookies to track visitor usage. The software will save a cookie to your computer’s hard drive in order to track and monitor your engagement and usage of the website, but will not store, save or collect personal information. You can read Google's privacy policy here for further information [ http://www.google.com/privacy.html ].</p>

          <p>You can easily erase cookies from your computer or mobile device using your browser. For instructions on how to delete cookies look under Preferences, or Help in your browser. You will be able to disable cookies, or to receive a notification each time a new cookie is sent to your computer or device. Please note that if you choose to disable cookies, you will not be able to take advantage of all our features.</p>

          <h2>Contact &amp; Communication</h2>
          <p>Users contacting this website and/or its owners do so at their own discretion and provide any such personal details requested at their own risk. Your personal information is kept private and stored securely until a time it is no longer required or has no use, as detailed in the Data Protection Act 1998. Every effort has been made to ensure a safe and secure form to email submission process but advise users using such form to email processes that they do so at their own risk.</p>
          <p>This website and its owners use any information submitted to provide you with further information about the products / services they offer or to assist you in answering any questions or queries you may have submitted. This includes using your details to subscribe you to any email newsletter program the website operates but only if this was made clear to you and your express permission was granted when submitting any form to email process. Or whereby you the consumer have previously purchased from or enquired about purchasing from the company a product or service that the email newsletter relates to. This is by no means an entire list of your user rights in regard to receiving email marketing material. Your details are not passed on to any third parties.</p>

          <h2>Email Newsletter</h2>
          <p>This website operates an email newsletter program, used to inform subscribers about products and services supplied by this website. Users can subscribe through an online automated process should they wish to do so but do so at their own discretion. Some subscriptions may be manually processed through prior written agreement with the user.</p>
          <p>Subscriptions are taken in compliance with UK Spam Laws detailed in the Privacy and Electronic Communications Regulations 2003. All personal details relating to subscriptions are held securely and in accordance with the Data Protection Act 1998. No personal details are passed on to third parties nor shared with companies / people outside of the company that operates this website. Under the Data Protection Act 1998 you may request a copy of personal information held about you by this website's email newsletter program. A small fee may be payable. If you would like a copy of the information held on you please write to the business address at the bottom of this policy.</p>
          <p>Email marketing campaigns published by this website or its owners may contain tracking facilities within the actual email. Subscriber activity is tracked and stored in a database for future analysis and evaluation. Such tracked activity may include; the opening of emails, forwarding of emails, the clicking of links within the email content, times, dates and frequency of activity [this is by no far a comprehensive list].</p>
          <p>This information is used to refine future email campaigns and supply the user with more relevant content based around their activity.</p>
          <p>In compliance with UK Spam Laws and the Privacy and Electronic Communications Regulations 2003 subscribers are given the opportunity to un-subscribe at any time through an automated system. This process is detailed at the footer of each email campaign. If an automated un-subscription system is unavailable clear instructions on how to un-subscribe will by detailed instead.</p>

          <h2>External Links</h2>
          <p>Although this website only looks to include quality, safe and relevant external links, users are advised adopt a policy of caution before clicking any external web links mentioned throughout this website. (External links are clickable text/ banner/image links to other websites, similar to; www.websitename.co.uk).</p>
          <p>The owners of this website cannot guarantee or verify the contents of any externally linked website despite their best efforts. Users should therefore note they click on external links at their own risk and this website and its owners cannot be held liable for any damages or implications caused by visiting any external links mentioned.</p>
          <h2>Adverts and Sponsored Links</h2>
          <p>This website may contain sponsored links and adverts. These will typically be served through our advertising partners, who may have detailed privacy policies relating directly to the adverts they serve.</p>
          <p>Clicking on any such adverts will send you to the advertisers website through a referral program which may use cookies and will track the number of referrals sent from this website. This may include the use of cookies which may in turn be saved on your computer’s hard drive. Users should therefore note they click on sponsored external links at their own risk and this website and its owners cannot be held liable for any damages or implications caused by visiting any external links mentioned.</p>
          <h2>Social Media Platforms</h2>
          <p>Communication, engagement and actions taken through external social media platforms that this website and its owners participate on are custom to the terms and conditions as well as the privacy policies held with each social media platform respectively.</p>
          <p>Users are advised to use social media platforms wisely and communicate / engage upon them with due care and caution in regard to their own privacy and personal details. This website nor its owners will ever ask for personal or sensitive information through social media platforms and encourage users wishing to discuss sensitive details to contact them through primary communication channels such as by telephone or email.</p>
          <p>This website may use social sharing buttons which help share web content directly from web pages to the social media platform in question. Users are advised before using such social sharing buttons that they do so at their own discretion and note that the social media platform may track and save your request to share a web page respectively through your social media platform account.</p>
          <h2>Shortened Links in Social Media</h2>
          <p>This website and its owners through their social media platform accounts may share web links to relevant web pages. By default some social media platforms shorten lengthy urls (web addresses ((this is an example: http://us2.co/1kieKF5)).</p>
          <p>Users are advised to take caution and good judgement before clicking any shortened urls published on social media platforms by this website and its owners. Despite the best efforts to ensure only genuine urls are published many social media platforms are prone to spam and hacking and therefore this website and its owners cannot be held liable for any damages or implications caused by visiting any shortened links.</p>
          <h3>Resources & Further Information</h3>
          <ul>
            <li><a href="http://www.legislation.gov.uk/ukpga/1998/29/contents">Data Protection Act 1998</a></li>
            <li><a href="http://www.legislation.gov.uk/uksi/2003/2426/contents/made">Privacy and Electronic Communications Regulations 2003</a></li>
            <li><a href="https://ico.org.uk/for-organisations/guide-to-pecr/">Privacy and Electronic Communications Regulations 2003 - The Guide</a></li>
            <li><a href="https://twitter.com/privacy?lang=en">Twitter Privacy Policy</a></li>
            <li><a href="https://www.facebook.com/about/privacy/">Facebook Privacy Policy</a></li>
            <li><a href="http://www.google.com/policies/privacy/">Google Privacy Policy</a></li>
            <li><a href="https://www.linkedin.com/legal/privacy-policy">Linkedin Privacy Policy</a></li>
            <li><a href="http://mailchimp.com/legal/privacy/">Mailchimp Privacy Policy</a></li>
          </ul>

          <p>Edited &amp; customised by: ustwo studio ltd. Registered No. 05286528. Registered in England & Wales.</p>
          <p>Registered office:<br />
          2 AC Court, High Street Thames Ditton, Surrey, KT7 0SR<br />
          VAT number: 853 3847 04</p>
          <p>We hope you found this policy useful. End of Privacy Policy.</p>

        </div>

      </article>
    );
  }
}
