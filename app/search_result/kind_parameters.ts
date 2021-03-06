export let KIND_PARAMETERS = [
  {
    docType: 'org/company',
    label: 'חברה',
    labelField: 'details.type',
    mainNameField: 'name',
    secondaryNameField: 'id',
    amountField: 'received_amount',
    firstItemField: 'details.goal',
    firstItemLabel: 'מטרה',
    secondItemField: 'details.city',
    secondItemLabel: 'כתובת',
    minYearField: 'min_year',
    maxYearField: 'max_year',
  },
  {
    docType: 'org/association',
    label: 'עמותה',
    labelField: 'kind_he',
    mainNameField: 'name',
    secondaryNameField: 'id',
    amountField: 'received_amount',
    firstItemField: 'details.objective',
    firstItemLabel: 'מטרה',
    secondItemField: 'details.address',
    secondItemLabel: 'כתובת',
    minYearField: 'min_year',
    maxYearField: 'max_year',
  },
  {
    docType: 'org/municipality',
    label: 'רשות מקומית',
    labelField: 'kind_he',
    mainNameField: 'name',
    secondaryNameField: 'id',
    amountField: 'received_amount',
    firstItemField: 'details.district_2015',
    firstItemLabel: 'מחוז',
    secondItemField: 'details.total_population_end_2015_1000s',
    secondItemLabel: 'אוכלוסיה (באלפים)',
    minYearField: 'min_year',
    maxYearField: 'max_year',
  },
  {
    docType: 'org',
    label: 'ארגון',
    labelField: 'kind_he',
    mainNameField: 'name',
    secondaryNameField: 'id',
    amountField: 'received_amount',
    minYearField: 'min_year',
    maxYearField: 'max_year',
  },
  {
    docType: 'budget',
    label: 'סעיף תקציבי',
    breadcrumbsField: 'nice-breadcrumbs',
    categoryField: 'nice-category',
    mainNameField: 'title',
    secondaryNameField: 'nice-code',
    amountField: 'net_allocated',
    firstItemField: 'econ_cls_title_1.0',
    firstItemLabel: 'מיון כלכלי'
  },
  {
    docType: 'supports',
    label: 'תמיכה ממשלתית',
    mainNameField: 'payments.0.support_title',
    fromField: 'payments.0.supporting_ministry',
    toField: 'recipient',
    amountField: 'amount_total',
    firstItemField: 'year_requested',
    firstItemLabel: 'שנת בקשה'
  },
  {
    docType: 'contract-spending',
    label: 'התקשרות',
    mainNameField: 'purpose',
    fromField: 'publisher.0',
    toField: 'supplier_name.0',
    amountField: 'volume',
    firstItemField: 'budget_title',
    firstItemLabel: 'מסעיף תקציבי'
  },
  {
    docType: 'tenders/exemptions',
    label: 'בקשת פטור ממכרז',
    mainNameField: 'regulation',
    secondaryNameField: 'decision',
    fromField: 'publisher',
    toField: 'supplier',
    amountField: 'volume',
    firstItemField: 'description',
    firstItemLabel: 'תאור'
  },
  {
    docType: 'tenders/office',
    label: 'מכרז משרדי',
    mainNameField: 'subjects',
    secondaryNameField: 'decision',
    fromField: 'publisher',
    toField: 'supplier',
    amountField: 'volume',
    firstItemField: 'description',
    firstItemLabel: 'תאור'
  },
  {
    docType: 'tenders/central',
    label: 'מכרז מרכזי',
    mainNameField: 'page_title',
    secondaryNameField: 'decision',
    amountField: 'volume',
    firstItemField: 'subjects',
    firstItemLabel: 'נושאים'
  },
  {
    docType: 'national-budget-changes',
    label: 'העברה תקציבית',
    mainNameField: 'req_title.0',
    fromField: 'fromMinistry',
    toField: 'toMinistry',
    amountField: 'net_expense_diff',
    firstItemField: 'change_title.0',
    firstItemLabel: 'סוג העברה'
  },
  {
    docType: '',
    label: 'אחר?',
    mainNameField: 'doc_id',
  }
];
