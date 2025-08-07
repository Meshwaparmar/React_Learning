import React from "react";

class ClassRegistration extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: {
        name: "",
        email: "",
        password: "",
        phone: "",
        age: "",
        gender: "",
        dob: ""
      },
      errors: {},
      msg: ""
    };
  }

  handleChange = (e) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;

    let newFormData = Object.assign({}, this.state.formData);
    newFormData[fieldName] = fieldValue;

    this.setState({ formData: newFormData });
  };

  validate = () => {
    let err = {};
    let isValid = true;
    let data = this.state.formData;

    if (!data.name) {
      err.name = "Name is required";
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(data.name)) {
      err.name = "Name must contain only letters";
      isValid = false;
    }

    if (!data.email) {
      err.email = "Email is required";
      isValid = false;
    } else if (!data.email.includes("@")) {
      err.email = "Email is invalid";
      isValid = false;
    }

    if (!data.password) {
      err.password = "Password is required";
      isValid = false;
    } else if (data.password.length < 6) {
      err.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!data.phone) {
      err.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(data.phone)) {
      err.phone = "Phone must be 10 digits";
      isValid = false;
    }

    if (!data.age) {
      err.age = "Age is required";
      isValid = false;
    } else if (isNaN(data.age) || data.age <= 0) {
      err.age = "Age must be a valid number";
      isValid = false;
    }

    if (!data.gender) {
      err.gender = "Gender is required";
      isValid = false;
    }

    if (!data.dob) {
      err.dob = "Date of Birth is required";
      isValid = false;
    }

    this.setState({ errors: err });
    return isValid;
  };

  handleSubmit = () => {
    if (this.validate()) {
      this.setState({
        msg: "Registration Successful!",
        errors: {}
      });
    } else {
      this.setState({ msg: "" });
    }
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ textAlign: "left", width: "300px" }}>
          <h2 style={{ textAlign: "center" }}>Registration Form</h2>

          Name:{" "}
          <input type="text" name="name" onChange={this.handleChange} />
          <br />
          <p style={{ color: "red" }}>{this.state.errors.name}</p>

          Email:{" "}
          <input type="text" name="email" onChange={this.handleChange} />
          <br />
          <p style={{ color: "red" }}>{this.state.errors.email}</p>

          Password:{" "}
          <input type="password" name="password" onChange={this.handleChange} />
          <br />
          <p style={{ color: "red" }}>{this.state.errors.password}</p>

          Phone:{" "}
          <input type="text" name="phone" onChange={this.handleChange} />
          <br />
          <p style={{ color: "red" }}>{this.state.errors.phone}</p>

          Age:{" "}
          <input type="text" name="age" onChange={this.handleChange} />
          <br />
          <p style={{ color: "red" }}>{this.state.errors.age}</p>

          Gender: <br />
          <input type="radio" name="gender" value="Male" onChange={this.handleChange} /> Male <br />
          <input type="radio" name="gender" value="Female" onChange={this.handleChange} /> Female <br />
          <input type="radio" name="gender" value="Other" onChange={this.handleChange} /> Other <br />
          <p style={{ color: "red" }}>{this.state.errors.gender}</p>

          Date of Birth:{" "}
          <input type="date" name="dob" onChange={this.handleChange} />
          <br />
          <p style={{ color: "red" }}>{this.state.errors.dob}</p>

          <input
            type="button"
            value="Register"
            onClick={this.handleSubmit}
            style={{ marginTop: "10px" }}
          />
          <br />
          <p style={{ color: "green" }}>{this.state.msg}</p>
        </div>
      </div>
    );
  }
}

export default ClassRegistration;