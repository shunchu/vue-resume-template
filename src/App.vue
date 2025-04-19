<template>
  <div id="app" class="p-4 sm:p-8 font-sans text-gray-700 leading-normal">
    <div class="w-full max-w-3xl mx-auto">
      <table class="w-full mb-4 border-collapse text-sm sm:text-base max-w-4xl">
        <tbody>
          <tr class="align-top flex flex-col sm:table-row">
            <td class="w-full sm:w-56 min-w-[10rem] pt-2 pb-4 sm:p-0 border-t-0 flex-shrink-0">&nbsp;</td>
            <td class="pl-0 pt-2 pb-4 border-t-0">
              <my-headline :name="name" :contact="contact" :intro="intro"></my-headline>
            </td>
          </tr>

          <tr data-section-start="experience" class="flex flex-col sm:table-row">
            <td class="pt-4 pb-4 border-t border-gray-300 align-top w-full sm:w-56 min-w-[10rem] pr-2">
              <h5 class="text-lg font-semibold mb-1">Experience</h5>
            </td>
            <td class="pt-4 pb-4 border-t border-gray-300 text-left pl-0 sm:pl-4">
              <ul class="list-none p-0">
                <my-experience class="mb-4 last:mb-0 my-experience" v-for="(experience, index) in experiences" :experience="experience" :key="'exp-' + index"></my-experience>
              </ul>
            </td>
          </tr>

          <tr data-section-start="volunteer" class="flex flex-col sm:table-row">
            <td class="pt-4 pb-4 border-t border-gray-300 align-top w-full sm:w-56 min-w-[10rem] pr-2">
              <h5 class="text-lg font-semibold mb-1">Volunteer</h5>
            </td>
            <td class="pt-4 pb-4 border-t border-gray-300 text-left pl-0 sm:pl-4">
              <ul class="list-none p-0">
                <my-volunteer class="mb-0 last:mb-0 my-volunteer" v-for="(vol, index) in volunteer" :vol="vol" :key="'vol-' + index"></my-volunteer>
              </ul>
            </td>
          </tr>

          <tr data-section-start="education" class="flex flex-col sm:table-row">
            <td class="pt-4 pb-4 border-t border-gray-300 align-top w-full sm:w-56 min-w-[10rem] pr-2">
              <h5 class="text-lg font-semibold mb-1">Education</h5>
            </td>
            <td class="pt-4 pb-4 border-t border-gray-300 text-left pl-0 sm:pl-4">
              <ul class="list-none p-0">
                <my-education class="mb-4 last:mb-0 my-education" v-for="(edu, index) in education" :edu="edu" :key="'edu-' + index"></my-education>
              </ul>
            </td>
          </tr>

          <tr data-section-start="social" class="flex flex-col sm:table-row">
            <td class="pt-4 pb-4 border-t border-gray-300 align-top w-full sm:w-56 min-w-[10rem] pr-2">
              <h5 class="text-lg font-semibold mb-1">Social Media</h5>
            </td>
            <td class="pt-4 pb-4 border-t border-gray-300 text-left pl-0 sm:pl-4">
              <ul class="list-none p-0">
                <my-social-media class="px-2 pb-1 text-base" v-for="(sm, index) in socialMedia" :sm="sm" :key="'sm-' + index"></my-social-media>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import getResumeDataSource from "./data/resumeDataSourceFactory";
import MyEducation from "./components/MyEducation.vue";
import MyExperience from "./components/MyExperience.vue";
import MyHeadline from "./components/MyHeadline.vue";
import MySocialMedia from "./components/MySocialMedia.vue";
import MyVolunteer from "./components/MyVolunteer.vue";
import { ref, onMounted, computed } from "vue";

export default {
  name: "app",
  components: {
    MyHeadline,
    MyExperience,
    MyVolunteer,
    MyEducation,
    MySocialMedia
  },
  setup() {
    const dataSource = getResumeDataSource();
    const resume = ref(null);
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      try {
        resume.value = await dataSource.getResumeData();
      } catch (err) {
        error.value = err;
      } finally {
        loading.value = false;
      }
    });
    return {
      loading,
      error,
      name: computed(() => resume.value?.name || ""),
      contact: computed(() => resume.value?.contact || {}),
      intro: computed(() => resume.value?.intro || ""),
      experiences: computed(() => resume.value?.experiences || []),
      volunteer: computed(() => resume.value?.volunteer || []),
      education: computed(() => resume.value?.education || []),
      socialMedia: computed(() => resume.value?.socialMedia || [])
    };
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
      @apply w-[125px] !important;
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
  @media (max-width: 640px) {
    #app {
      padding-top: 0.25rem;
      padding-bottom: 0.5rem;
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }
    table {
      font-size: 0.95rem;
    }
    td, th {
      display: block;
      width: 100% !important;
      box-sizing: border-box;
    }
    tr {
      display: flex;
      flex-direction: column;
    }
    h5 {
      margin-bottom: 0.5rem;
    }
    /* Remove extra padding from first td of first row on mobile */
    tr:first-child > td:first-child {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      min-height: 0 !important;
    }
  }
  @media (min-width: 641px) {
    tr {
      display: table-row;
    }
    td, th {
      display: table-cell;
      width: auto !important;
    }
  }
</style>
