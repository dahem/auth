/* eslint quote-props: ["off"] */

export default {
  noFittingAndCancel: {
    'schedule-ris': {
      'routine': {
        'routine-schedule-time': true,
        'routine-fitting': false,
        'routine-historic': true,
        'routine-show-all-plans': false,
        'routine-schedule-filter': {
          'schedule-filter-health-insurance': true,
          'schedule-filter-health-plan': true,
          'schedule-filter-care-place': true,
        },
        'routine-cancel-schedule-time': false,
        'routine-create-patient': false,
        'routine-edit-patient': {
          'edit-patient-natural-person': false,
          'edit-patient-liable-person': false,
          'edit-patient-address': false,
          'edit-patient-health-plan': false,
          'edit-patient-contact': true,
        },
        'routine-waiting-list': false,
        'routine-transfer-patients': false,
      },
      'registration': {
        'registration-schedule': true,
        'registration-room': true,
        'registration-protocol-cancellation-reason': true,
      },
      'report': {
        'report-general': true,
        'report-no-show': true,
        'report-canceled': true,
        'report-blocked': true,
        'report-transfer': true,
      },
    },
  },
  allAccess: {
    'schedule-ris': {
      'routine': {
        'routine-schedule-time': true,
        'routine-fitting': true,
        'routine-historic': true,
        'routine-show-all-plans': true,
        'routine-schedule-filter': {
          'schedule-filter-health-insurance': true,
          'schedule-filter-health-plan': true,
          'schedule-filter-care-place': true,
        },
        'routine-cancel-schedule-time': true,
        'routine-create-patient': true,
        'routine-edit-patient': {
          'edit-patient-natural-person': true,
          'edit-patient-liable-person': true,
          'edit-patient-address': true,
          'edit-patient-health-plan': true,
          'edit-patient-contact': true,
        },
        'routine-waiting-list': true,
        'routine-transfer-patients': true,
      },
      'registration': {
        'registration-schedule': true,
        'registration-room': true,
        'registration-protocol-cancellation-reason': true,
      },
      'report': {
        'report-general': true,
        'report-no-show': true,
        'report-canceled': true,
        'report-blocked': true,
        'report-transfer': true,
      },
    },
  },
  ameplanAccess: {
    'schedule-ris': {
      'routine': {
        'routine-schedule-time': true,
        'routine-fitting': true,
        'routine-historic': true,
        'routine-show-all-plans': false,
        'routine-schedule-filter': {
          'schedule-filter-health-insurance': false,
          'schedule-filter-health-plan': false,
          'schedule-filter-care-place': false,
        },
        'routine-cancel-schedule-time': true,
        'routine-create-patient': false,
        'routine-edit-patient': {
          'edit-patient-natural-person': false,
          'edit-patient-liable-person': false,
          'edit-patient-address': false,
          'edit-patient-health-plan': false,
          'edit-patient-contact': true,
        },
        'routine-waiting-list': true,
        'routine-transfer-patients': true,
      },
      'registration': {
        'registration-schedule': false,
        'registration-room': false,
        'registration-protocol-cancellation-reason': false,
      },
      'report': {
        'report-general': false,
        'report-no-show': false,
        'report-canceled': false,
        'report-blocked': false,
        'report-transfer': false,
      },
    },
  },
};
