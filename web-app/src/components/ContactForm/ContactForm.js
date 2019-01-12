import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component {
  render() {
    const input_elements = [
      {
        "id": "name",
      },
      {
        "id": "email",
      },
      {
        "id": "subject",
      },
    ];

    const items = input_elements.map((item, index) => {
      return (
        <div className="form-group" key={index + "i"}>
          <input type="text" className="form-control" id={item.id} placeholder={item.id.substring(0,1).toUpperCase() + item.id.substring(1,item.id.lenght)} />
        </div>
      );
    });

    return (
      <div className="ContactForm">
        <form action="mailto:developerjoint@gmail.com" method="post" encType="text/plain">
          {items}
          <div className="form-group">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary mb-2 bg-smoke" id="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
