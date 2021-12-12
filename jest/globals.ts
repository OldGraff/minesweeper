jest.mock('mobx-react-lite', () => ({ observer: (comp: unknown) => comp }));
jest.mock('mobx', () => ({ makeAutoObservable: jest.fn() }));

export const mockGoBack = jest.fn();
export const mockPush = jest.fn();
export const mockListen = jest.fn();

jest.mock('axios');
jest.mock('lodash-es/debounce', () => jest.fn((fn: () => void) => fn));
jest.mock('react-router-dom', () => {
  const moduleMock = jest.requireActual('react-router-dom');

  return {
    ...moduleMock,
    BrowserRouter: 'BrowserRouter',
    Route: 'Route',
    Link: 'Link',
    Switch: 'Switch',
    NavLink: 'NavLink',
    Redirect: 'Redirect',
    useParams: jest.fn(),
    useHistory: jest.fn(() => ({
      push: mockPush,
      listen: mockListen,
      goBack: mockGoBack,
    })),
  };
});

const pagination = {
  page: 1,
  setPage: jest.fn(),
  setPages: jest.fn(),
  resetPage: jest.fn(),
};

jest.mock('store/utilityClasses/Pagination', () => ({
  Pagination: jest.fn().mockImplementation(() => pagination),
}));

jest.mock('@material-ui/lab', () => {
  const moduleMock = jest.requireActual('@material-ui/lab');

  return {
    ...moduleMock,
    Autocomplete: 'Autocomplete',
    Pagination: 'Pagination',
  };
});

jest.mock('@material-ui/core', () => ({
  SvgIcon: 'SvgIcon',
  InputAdornment: 'InputAdornment',
  Fade: 'Fade',
  Backdrop: 'Backdrop',
  Modal: 'Modal',
  InputBase: 'InputBase',
  Card: 'Card',
  Grid: 'Grid',
  Step: 'Step',
  Avatar: 'Avatar',
  Button: 'Button',
  ButtonBase: 'ButtonBase',
  Container: 'Container',
  IconButton: 'IconButton',
  AppBar: 'AppBar',
  Select: 'Select',
  Divider: 'Divider',
  Stepper: 'Stepper',
  Switch: 'Switch',
  Typography: 'Typography',
  InputLabel: 'InputLabel',
  FormControl: 'FormControl',
  TextField: 'TextField',
  TextareaAutosize: 'TextareaAutosize',
  RadioGroup: 'RadioGroup',
  Radio: 'Radio',
  FormControlLabel: 'FormControlLabel',
  FormGroup: 'FormGroup',
  FormLabel: 'FormLabel',
  Dialog: 'Dialog',
  DialogActions: 'DialogActions',
  DialogTitle: 'DialogTitle',
  DialogContent: 'DialogContent',
  TableRow: 'TableRow',
  TableHead: 'TableHead',
  TableBody: 'TableBody',
  Table: 'Table',
  TableContainer: 'TableContainer',
  Link: 'Link',
  Checkbox: 'Checkbox',
  Paper: 'Paper',
  TableCell: 'TableCell',
  Tooltip: 'Tooltip',
  Chip: 'Chip',
  MenuItem: 'MenuItem',
  Menu: 'Menu',
  Popper: 'Popper',
  Popover: 'Popover',
}));

jest.mock('@material-ui/icons', () => ({
  Cached: 'Cached',
  MoreHoriz: 'MoreHoriz',
  Publish: 'Publish',
  Edit: 'Edit',
  Delete: 'Delete',
  Add: 'Add',
  Close: 'Close',
  Create: 'Create',
  Clear: 'Clear',
  ArrowBack: 'ArrowBack',
  CloudUpload: 'CloudUpload',
  ArrowForward: 'ArrowForward',
  AccountCircle: 'AccountCircle',
  Notifications: 'Notifications',
  InsertLink: 'InsertLink',
  ExpandLess: 'ExpandLess',
  ExpandMore: 'ExpandMore',
  DateRange: 'DateRange',
  ChevronLeft: 'ChevronLeft',
  PeopleAltOutlined: 'PeopleAltOutlined',
  Alarm: 'Alarm',
  ArrowDropUp: 'ArrowDropUp',
  ArrowDropDown: 'ArrowDropDown',
  ExitToApp: 'ExitToApp',
  LockOpen: 'LockOpen',
  Lock: 'Lock',
  GetApp: 'GetApp',
  AttachmentSharp: 'AttachmentSharp',
  AttachFile: 'AttachFile',
  CheckCircleOutlineOutlined: 'CheckCircleOutlineOutlined',
}));

jest.mock('@material-ui/pickers', () => ({
  TimePicker: 'TimePicker',
  DatePicker: 'DatePicker',
  MuiPickersUtilsProvider: 'MuiPickersUtilsProvider',
  KeyboardDatePicker: 'KeyboardDatePicker',
  KeyboardTimePicker: 'KeyboardTimePicker',
}));

jest.mock('@sentry/react', () => ({ ErrorBoundary: 'Sentry.ErrorBoundary' }));

jest.mock('react-date-range', () => ({
  Calendar: 'Calendar',
  DateRange: 'DateRange',
}));


// --- elements ---
jest.mock('components/elements/Buttons/ButtonRegistration', () => ({ ButtonRegistration: 'ButtonRegistration' }));
jest.mock('components/elements/Buttons/AddButton', () => ({ AddButton: 'AddButton' }));
jest.mock('components/elements/Buttons/ButtonSave', () => ({ ButtonSave: 'ButtonSave' }));
jest.mock('components/elements/Buttons/ButtonExport', () => ({ ButtonExport: 'ButtonExport' }));
jest.mock('components/elements/Buttons/ButtonEdit', () => ({ ButtonEdit: 'ButtonEdit' }));

jest.mock('components/elements/Selects/SelectCity', () => ({ SelectCity: 'SelectCity' }));
jest.mock('components/elements/Selects/SelectTags', () => ({ SelectTags: 'SelectTags' }));
jest.mock('components/elements/Selects/SelectField', () => ({ SelectField: 'SelectField' }));
jest.mock('components/elements/Selects/SelectTrend', () => ({ SelectTrend: 'SelectTrend' }));
jest.mock('components/elements/Selects/SelectMoscow', () => ({ SelectMoscow: 'SelectMoscow' }));
jest.mock('components/elements/Selects/SelectRegion', () => ({ SelectRegion: 'SelectRegion' }));
jest.mock('components/elements/Selects/SelectDirection', () => ({ SelectDirection: 'SelectDirection' }));
jest.mock('components/elements/Selects/SelectDepartment', () => ({ SelectDepartment: 'SelectDepartment' }));
jest.mock('components/elements/Selects/SelectDirectionType', () => ({ SelectDirectionType: 'SelectDirectionType' }));
jest.mock('components/elements/Selects/SelectGrade', () => ({ SelectGrade: 'SelectGrade' }));
jest.mock('components/elements/Selects/SelectSchool', () => ({ SelectSchool: 'SelectSchool' }));
jest.mock('components/elements/Selects/SelectWithCheckAll', () => ({ SelectWithCheckAll: 'SelectWithCheckAll' }));
jest.mock('components/elements/Selects/SelectFromRecord', () => ({ SelectFromRecord: 'SelectFromRecord' }));
jest.mock('components/elements/Selects/SelectLocationByEvent', () => ({
  SelectLocationByEvent: 'SelectLocationByEvent',
}));

jest.mock('components/elements/Utilities/Flex', () => ({ Flex: 'Flex' }));
jest.mock('components/elements/StepperDots', () => ({ StepperDots: 'StepperDots' }));
jest.mock('components/elements/Loader', () => ({ Loader: 'Loader' }));
jest.mock('components/elements/InputTime', () => ({ InputTime: 'InputTime' }));
jest.mock('components/elements/Counter', () => ({ Counter: 'Counter' }));
jest.mock('components/elements/Tooltip', () => ({ Tooltip: 'Tooltip' }));
jest.mock('components/elements/Tag', () => ({ Tag: 'Tag' }));
jest.mock('components/elements/DialogWithAccepted', () => ({ DialogWithAccepted: 'DialogWithAccepted' }));
jest.mock('components/elements/DialogConfirm', () => ({ DialogConfirm: 'DialogConfirm' }));
jest.mock('components/elements/FilterInput', () => ({ FilterInput: 'FilterInput' }));
jest.mock('components/elements/Badges/BadgeStatus', () => ({ BadgeStatus: 'BadgeStatus' }));
// ---


// --- blocks ---
jest.mock('components/blocks/NavBarWithGoBack', () => ({ NavBarWithGoBack: 'NavBarWithGoBack' }));
jest.mock('components/blocks/FilterBlockWrapper', () => ({ FilterBlockWrapper: 'FilterBlockWrapper' }));
// ---


// --- views ---
jest.mock('components/views/Table/TableHeadCell', () => ({ TableHeadCell: 'TableHeadCell' }));
jest.mock('components/views/Table/TableCell', () => ({ TableCell: 'TableCell' }));
jest.mock('components/views/AttachedDocument', () => ({ AttachedDocument: 'AttachedDocument' }));
jest.mock('components/views/CardCreateLayout', () => ({ CardCreateLayout: 'CardCreateLayout' }));
// ---


// --- CreateEventPage mock components ---
jest.mock('components/pages/CreateEventPage/blocks', () => {
  const moduleMock = jest.requireActual('components/pages/CreateEventPage/blocks');

  return {
    ...moduleMock,
    TagsBlock: 'TagsBlock',
    ImagesBlock: 'ImagesBlock',
    BlockLayout: 'BlockLayout',
    MaxScoreBlock: 'MaxScoreBlock',
    EventNameBlock: 'EventNameBlock',
    EventTypeBlock: 'EventTypeBlock',
    DocumentsBlock: 'DocumentsBlock',
    TimeslotLinkBlock: 'TimeslotLinkBlock',
    EventPeriodsBlock: 'EventPeriodsBlock',
    RegConditionsBlock: 'RegConditionsBlock',
    EventLocationsBlock: 'EventLocationsBlock',
    FullDescriptionBlock: 'FullDescriptionBlock',
    EventShortDescriptionBlock: 'EventShortDescriptionBlock',
    EventRegistrationPeriodsBlock: 'EventRegistrationPeriodsBlock',
  };
});
jest.mock('components/pages/CreateEventPage/elements/buttons', () => {
  const moduleMock = jest.requireActual('components/pages/CreateEventPage/elements/buttons');

  return {
    ...moduleMock,
    AddLink: 'AddLink',
    AddImage: 'AddImage',
    TagButton: 'TagButton',
    AddDocument: 'AddDocument',
    NextStepButton: 'NextStepButton',
    CreateEventButton: 'CreateEventButton',
    ButtonAddOrganization: 'ButtonAddOrganization',
  };
});
jest.mock('components/pages/CreateEventPage/elements/inputs', () => {
  const moduleMock = jest.requireActual('components/pages/CreateEventPage/elements/inputs');

  return {
    ...moduleMock,
    InputMaxScore: 'InputMaxScore',
    EventInputField: 'EventInputField',
    InputRestriction: 'InputRestriction',
    InputTimeslotLink: 'InputTimeslotLink',
    InputParticipationInEvent: 'InputParticipationInEvent',
    InputNotParticipationInEvent: 'InputNotParticipationInEvent',
  };
});
jest.mock('components/pages/CreateEventPage/elements/selects', () => {
  const moduleMock = jest.requireActual('components/pages/CreateEventPage/elements/selects');

  return {
    ...moduleMock,
    SelectTag: 'SelectTag',
    SelectParallels: 'SelectParallels',
    SelectEventType: 'SelectEventType',
    SelectPartnerType: 'SelectPartnerType',
    SelectCompareMark: 'SelectCompareMark',
    SelectProfileType: 'SelectProfileType',
    SelectEventLocation: 'SelectEventLocation',
    SelectRestrictionType: 'SelectRestrictionType',
    SelectOrgEventLocation: 'SelectOrgEventLocation',
    SelectOrgTypeEventLocation: 'SelectOrgTypeEventLocation',
  };
});
jest.mock('components/pages/CreateEventPage/elements/switches', () => {
  const moduleMock = jest.requireActual('components/pages/CreateEventPage/elements/switches');

  return {
    ...moduleMock,
    SwitchDonm: 'SwitchDonm',
    SwitchLabeled: 'SwitchLabeled',
    SwitchAllowChoosePlace: 'SwitchAllowChoosePlace',
    SwitchOpenRegistrationEvent: 'SwitchOpenRegistrationEvent',
  };
});
jest.mock('components/pages/CreateEventPage/views', () => {
  const moduleMock = jest.requireActual('components/pages/CreateEventPage/views');

  return {
    ...moduleMock,
    TagsView: 'TagsView',
    AttachLink: 'AttachLink',
    AttachedImage: 'AttachedImage',
    RegConditionResultForm: 'RegConditionResultForm',
  };
});
jest.mock('store/utilityClasses/FilterInput', () => ({
  FilterInput: jest.fn((filterName) => ({
    value: '',
    selectedValue: null,
    selectedNumberValue: null,
    filterName,
    setFilter: jest.fn(),
    setSelectFilter: jest.fn(),
    clearFilter: jest.fn(),
  })),
}));
