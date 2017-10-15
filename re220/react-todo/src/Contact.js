import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div id="content">
        
        <h1>Contact Us</h1>
        <p>Below is an example of how a contact form might look with this template:</p>
        <form action="" method="post">
          <div class="form_settings">
            <p><span>Name</span><input class="contact" type="text" name="your_name" value="" /></p>
            <p><span>Email Address</span><input class="contact" type="text" name="your_email" value="" /></p>
            <p><span>Message</span><textarea class="contact textarea" rows="8" cols="50" name="your_enquiry"></textarea></p>
            <p style={{ PaddingTop: "15px"}}><span>&nbsp;</span><input class="submit" type="submit" name="contact_submitted" value="submit" /></p>
          </div>
        </form>
        </div>
    );
  }
}

export default Contact;