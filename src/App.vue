<template>
  <div id="app" class="p-8 font-sans text-gray-700 leading-normal">
    <div class="w-full">
      <table class="w-full mb-4 border-collapse">
        <tbody>
          <tr>
            <td class="w-[200px] pt-4 pb-4 border-t-0">&nbsp;</td>
            <td class="pl-0 pt-4 pb-4 border-t-0">
              <my-headline v-bind:name="name" v-bind:contact="contact" v-bind:intro="intro"></my-headline>
            </td>
          </tr>

          <tr>
            <td class="pt-4 pb-4 border-t border-gray-300 align-top">
              <h5 class="text-2xl font-semibold mb-2">Experience</h5>
            </td>
            <td class="pt-4 pb-4 border-t border-gray-300 text-left">
              <ul class="list-none p-0">
                <my-experience class="mb-4 last:mb-0" v-for="(experience, index) in experiences" v-bind:experience="experience"
                  v-bind:key="'exp-' + index"></my-experience>
              </ul>
            </td>
          </tr>

          <tr>
            <td class="pt-4 pb-4 border-t border-gray-300 align-top">
              <h5 class="text-2xl font-semibold mb-2">Volunteer</h5>
            </td>
            <td class="pt-4 pb-4 border-t border-gray-300 text-left">
              <ul class="list-none p-0">
                <my-volunteer class="mb-0 last:mb-0" v-for="(vol, index) in volunteer" v-bind:vol="vol" v-bind:key="'vol-' + index"></my-volunteer>
              </ul>
            </td>
          </tr>

          <tr>
            <td class="pt-4 pb-4 border-t border-gray-300 align-top">
              <h5 class="text-2xl font-semibold mb-2">Education</h5>
            </td>
            <td class="pt-4 pb-4 border-t border-gray-300 text-left">
              <ul class="list-none p-0">
                <my-education class="mb-4 last:mb-0" v-for="(edu, index) in education" v-bind:edu="edu" v-bind:key="'edu-' + index"></my-education>
              </ul>
            </td>
          </tr>

          <tr>
            <td class="pt-4 pb-4 border-t border-gray-300 align-top">
              <h5 class="text-2xl font-semibold mb-2">Social Media</h5>
            </td>
            <td class="pt-4 pb-4 border-t border-gray-300 text-left">
              <ul class="list-none p-0">
                <my-social-media class="mb-2 last:mb-0 px-2 pb-1 text-base" v-for="(sm, index) in socialMedia" v-bind:sm="sm" v-bind:key="'sm-' + index"></my-social-media>
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
    @page {
      size: A4;
      margin: 0;
    }

    body {
      @apply p-10 text-xs;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    #app {
      @apply p-0 !important;
    }

    table {
      @apply border-collapse w-full;
      page-break-inside: auto;
    }

    tr {
      @apply break-inside-avoid;
      page-break-after: auto;
    }

    td {
      @apply p-2 align-top border-t border-gray-300 break-inside-avoid;
    }

    td:first-child {
      @apply w-[100px] !important;
    }

    h5 {
      @apply text-lg break-after-avoid;
    }

    ul, img {
      @apply break-inside-avoid;
    }

    /* Hide elements not needed for print if necessary */
  }
</style>
