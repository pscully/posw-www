import React from "react";
require("es6-promise").polyfill();
require("isomorphic-fetch");

class Schema extends React.Component {
  addJSON() {
    if (this.props.page === "contact") {
      return {
        __html: `
            {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I contact Possible Web sales team?","acceptedAnswer":[{"@type":"Answer","text":"Send an email to hello@possibleweb.com or fill out our contact form on our website."}]},{"@type":"Question","name":"How do I contact Possible Web customer support?","acceptedAnswer":[{"@type":"Answer","text":"Send an email to help@possibleweb.com or submit a support ticket via your client portal."}]},{"@type":"Question","name":"What is the phone number for Possible Web?","acceptedAnswer":[{"@type":"Answer","text":"The phone number is +1 (704) 594-5796"}]}]} 
          `
      };
    }

    if (this.props.page === "index") {
      return {
        __html: `
        {"@context":"http://www.schema.org","@type":"Corporation","name":"Possible Web","url":"https://possibleweb.com","sameAs":["https://facebook.com/possibleweb","https://twitter.com/possibleweb","https://linkedin.com/company/possible-web","https://youtube.com/user/possibleweb","https://instagram.com/possibleweb","https://pinterest.com/possibleweb"],"logo":"https://files.possibleweb.com/file/w_30,h_30/01brands/cyclone-copy.png","image":"https://files.possibleweb.com/file/w_600,h_400/possibleweb/fast-affordable-websites.png","description":"Possible Web is a US based agency focused on providing expert WordPress services to business owners across the country. From web development to SEO, hosting, support and more our team has you covered. Our team is based in Charlotte, NC.","address":{"@type":"PostalAddress","streetAddress":"13850 Ballantyne Corporate Pl Ste. 500","addressLocality":"Charlotte","addressRegion":"NC","postalCode":"28277","addressCountry":"United States"},"geo":{"@type":"GeoCoordinates","latitude":"35.0630033","longitude":"-80.8558365"},"hasMap":"https://www.google.com/maps?cid=731395392752817573","openingHours":"Mo 09:00-17:00 Tu 09:00-17:00 Th 09:00-17:00 Fr 09:00-17:00"}
        `
      };
    }
  }

  render() {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={this.addJSON()}
      />
    );
  }
}

export default Schema;
