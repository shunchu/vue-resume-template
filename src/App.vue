<template>
  <div id="app">
    <div class="col-md-12">
      <table class="table">
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td class="left-padding">
              <my-headline v-bind:name="name" v-bind:contact="contact" v-bind:intro="intro"></my-headline>
            </td>
          </tr>

          <tr>
            <td>
              <h5>Experience</h5>
            </td>
            <td class="text-left">
              <ul>
                <my-experience v-for="(experience, index) in experiences" v-bind:experience="experience"
                  v-bind:key="index"></my-experience>
              </ul>
            </td>
          </tr>

          <tr>
            <td>
              <h5>Education</h5>
            </td>
            <td class="text-left">
              <ul>
                <my-education v-for="(edu, index) in education" v-bind:edu="edu" v-bind:key="index"></my-education>
              </ul>
            </td>
          </tr>

          <tr>
            <td>
              <h5>Volunteer</h5>
            </td>
            <td class="text-left">
              <ul>
                <my-volunteer v-for="(vol, index) in volunteer" v-bind:vol="vol" v-bind:key="index"></my-volunteer>
              </ul>
            </td>
          </tr>

          <tr>
            <td>
              <h5>Social Media</h5>
            </td>
            <td class="text-left">
              <ul>
                <my-social-media v-for="(medium, index) in social_media" v-bind:medium="medium"
                  v-bind:key="index"></my-social-media>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ResumeData from "./resume_data";
import MyEducation from "./components/MyEducation";
import MyExperience from "./components/MyExperience";
import MyHeadline from "./components/MyHeadline";
import MySocialMedia from "./components/MySocialMedia";
import MyVolunteer from "./components/MyVolunteer";

export default {
  name: "app",
  components: {
    MyEducation,
    MyExperience,
    MyHeadline,
    MySocialMedia,
    MyVolunteer
  },
  data() {
    return ResumeData();
  }
};
</script>

<style>
@media print {
  body {
    height: 100%;
    margin: 0;
    font-size: 0.65rem;
  }

  h5 {
    font-size: 0.9rem;
  }

  h6 {
    font-size: 0.75rem;
    font-weight: bolder;
    text-decoration: underline;
    text-underline-position: under;
  }

  table {
    page-break-inside: auto;
  }

  tr {
    page-break-inside: auto;
    page-break-after: auto;
  }

  td:first-child {
    text-align: left;
    width: 100px;
  }
}

@media screen {
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #747474;
    margin: 40px 30px;
    font-size: 15px;
  }

  td:first-child {
    text-align: left;
    width: 200px;
  }
}

body {
  font-family: "Optima-Regular", "Optima", "Avenir", Helvetica, Arial,
    sans-serif;
}

table tr:first-child td {
  border-top: none;
}

td>ul>li:first-child {
  padding: 0;
}

td>ul>li {
  list-style-type: none;
  padding: 15px 0 0 0;
}

td.left-padding {
  clear: both;
  padding-left: 50px;
}

h6 {
  font-weight: bolder;
}
</style>
