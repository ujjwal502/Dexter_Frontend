import React, { Component } from "react";
import Layout from "../../core/Layout";

class CoursePage extends Component {
  render() {
    return (
      <div>
        <Layout title={this.props.match.params.courseName} description='Course Description'>
    <p>......</p>
        </Layout>
      </div>
    );
  }
}

export default CoursePage;