<template>
  <div id="app" class="p-8 font-sans text-gray-700 leading-normal">
    <div class="w-full">
      <table class="w-full mb-4 border-collapse">
        <tbody>
          <tr>
            <td class="w-[200px] pt-2 pb-4 border-t-0">&nbsp;</td>
            <td class="pl-0 pt-2 pb-4 border-t-0">
              <my-headline v-bind:name="name" v-bind:contact="contact" v-bind:intro="intro"></my-headline>
            </td>
          </tr>

          <tr data-section-start="experience">
            <td class="pt-4 pb-4 border-t border-gray-300 align-top">
              <h5 class="text-lg font-semibold mb-1">Experience</h5>
            </td>
            <td class="pt-4 pb-4 border-t border-gray-300 text-left">
              <ul class="list-none p-0">
                <my-experience class="mb-4 last:mb-0 my-experience" v-for="(experience, index) in experiences" v-bind:experience="experience"
                  v-bind:key="'exp-' + index"></my-experience>
              </ul>
            </td>
          </tr>

          <tr data-section-start="volunteer">
            <td class="pt-4 pb-4 border-t border-gray-300 align-top">
              <h5 class="text-lg font-semibold mb-1">Volunteer</h5>
            </td>
            <td class="pt-4 pb-4 border-t border-gray-300 text-left">
              <ul class="list-none p-0">
                <my-volunteer class="mb-0 last:mb-0 my-volunteer" v-for="(vol, index) in volunteer" v-bind:vol="vol" v-bind:key="'vol-' + index"></my-volunteer>
              </ul>
            </td>
          </tr>

          <tr data-section-start="education">
            <td class="pt-4 pb-4 border-t border-gray-300 align-top">
              <h5 class="text-lg font-semibold mb-1">Education</h5>
            </td>
            <td class="pt-4 pb-4 border-t border-gray-300 text-left">
              <ul class="list-none p-0">
                <my-education class="mb-4 last:mb-0 my-education" v-for="(edu, index) in education" v-bind:edu="edu" v-bind:key="'edu-' + index"></my-education>
              </ul>
            </td>
          </tr>

          <tr data-section-start="social">
            <td class="pt-4 pb-4 border-t border-gray-300 align-top">
              <h5 class="text-lg font-semibold mb-1">Social Media</h5>
            </td>
            <td class="pt-4 pb-4 border-t border-gray-300 text-left">
              <ul class="list-none p-0">
                <my-social-media class="px-2 pb-1 text-base" v-for="(sm, index) in socialMedia" v-bind:sm="sm" v-bind:key="'sm-' + index"></my-social-media>
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
    MyHeadline,
    MyExperience,
    MyVolunteer,
    MyEducation,
    MySocialMedia
  },
  data() {
    return ResumeData();
  }
};
</script>

<style>
  @media print {
    /* Page setup */
    @page {
      size: A4;
      margin: 1.25cm 0.75cm 0.75cm;
    }

    /* Global print styles */
    body {
      @apply text-xs;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    #app {
      @apply !p-0;
    }

    /* Typography */
    * {
      line-height: 1.2;
    }

    h5 {
      @apply text-lg break-after-avoid mb-0 font-semibold;
    }

    /* Table structure */
    table {
      @apply border-collapse w-full table-auto;
      border-spacing: 0;
      margin: 0;
      page-break-inside: auto !important;
    }

    tr {
      page-break-inside: auto;
      page-break-after: auto;
      @apply p-0 m-0;
    }

    td {
      @apply py-0 px-2 align-top border-t border-gray-300;
      page-break-inside: auto;
      vertical-align: top;
    }

    td:first-child {
      @apply w-[100px] !important;
    }

    /* First row special handling */
    tr:first-child td {
      @apply pt-0 pb-0 pl-2;
    }

    /* Section headers */
    tr[data-section-start] td {
      @apply pt-1;
    }

    /* Experience section - avoid page break */
    tr[data-section-start="experience"] {
      page-break-before: avoid !important;
      break-before: avoid !important;
    }

    /* Lists */
    ul, img {
      @apply p-0 m-0;
      page-break-inside: auto;
    }

    li {
      @apply m-0 p-0;
      page-break-inside: auto;
    }

    /* Component spacing */
    .mb-4 {
      @apply mb-0;
    }

    .mb-2 {
      @apply mb-0;
    }

    .mb-1 {
      @apply mb-0;
    }

    /* Table cell padding */
    tr td {
      @apply pt-0 pb-0;
    }

    /* Component spacing */
    .date, .details, .tools, .services {
      @apply mb-0;
    }

    /* List spacing */
    ul.resp, ul.distinctions {
      @apply mb-0;
    }

    /* Last row spacing */
    tr:last-child {
      @apply pb-2;
    }

    /* Component specific styles */
    .my-experience, .my-education, .my-volunteer {
      @apply pb-0 mb-0;
      page-break-inside: auto;
    }

    .my-experience > div,
    .my-education > div,
    .my-volunteer > div {
      @apply mb-0 pb-0;
    }

    /* Print-specific overrides for components */
    .bg-gray-100 {
      @apply py-0;
    }

    /* Link styling for print */
    a {
      @apply text-black no-underline;
    }
  }
</style>
