// ------------------------- AUTH ------------------------------------------ //

export const USER_REQUEST = 'USER_REQUEST';
export const USER_RECEIVED = 'USER_RECEIVED';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const SET_AUTH_STATUS = 'SET_AUTH_STATUS';

// ------------------------- ERRORS ---------------------------------------- //

export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

// ------------------------- ARTIFACTS ------------------------------------- //

export const SET_STATUS_MESSAGE = 'SET_STATUS_MESSAGE';
export const UPDATE_ARTIFACT = 'UPDATE_ARTIFACT';
export const INITIALIZE_ARTIFACT = 'INITIALIZE_ARTIFACT';
export const ARTIFACTS_REQUEST = 'ARTIFACTS_REQUEST';
export const LOAD_ARTIFACTS_SUCCESS = 'LOAD_ARTIFACTS_SUCCESS';
export const LOAD_ARTIFACTS_FAILURE = 'LOAD_ARTIFACTS_FAILURE';
export const ARTIFACT_REQUEST = 'ARTIFACT_REQUEST';
export const LOAD_ARTIFACT_SUCCESS = 'LOAD_ARTIFACT_SUCCESS';
export const LOAD_ARTIFACT_FAILURE = 'LOAD_ARTIFACT_FAILURE';
export const ADD_ARTIFACT_REQUEST = 'ADD_ARTIFACT_REQUEST';
export const ADD_ARTIFACT_SUCCESS = 'ADD_ARTIFACT_SUCCESS';
export const ADD_ARTIFACT_FAILURE = 'ADD_ARTIFACT_FAILURE';
export const EDIT_ARTIFACT_REQUEST = 'EDIT_ARTIFACT_REQUEST';
export const EDIT_ARTIFACT_SUCCESS = 'EDIT_ARTIFACT_SUCCESS';
export const EDIT_ARTIFACT_FAILURE = 'EDIT_ARTIFACT_FAILURE';
export const DELETE_ARTIFACT_REQUEST = 'DELETE_ARTIFACT_REQUEST';
export const DELETE_ARTIFACT_SUCCESS = 'DELETE_ARTIFACT_SUCCESS';
export const DELETE_ARTIFACT_FAILURE = 'DELETE_ARTIFACT_FAILURE';
export const DOWNLOAD_ARTIFACT_REQUEST = 'DOWNLOAD_ARTIFACT_REQUEST';
export const DOWNLOAD_ARTIFACT_SUCCESS = 'DOWNLOAD_ARTIFACT_SUCCESS';
export const DOWNLOAD_ARTIFACT_FAILURE = 'DOWNLOAD_ARTIFACT_FAILURE';
export const VALIDATE_ARTIFACT_REQUEST = 'VALIDATE_ARTIFACT_REQUEST';
export const VALIDATE_ARTIFACT_SUCCESS = 'VALIDATE_ARTIFACT_SUCCESS';
export const VALIDATE_ARTIFACT_FAILURE = 'VALIDATE_ARTIFACT_FAILURE';
export const EXECUTE_ARTIFACT_REQUEST = 'EXECUTE_ARTIFACT_REQUEST';
export const EXECUTE_ARTIFACT_SUCCESS = 'EXECUTE_ARTIFACT_SUCCESS';
export const EXECUTE_ARTIFACT_FAILURE = 'EXECUTE_ARTIFACT_FAILURE';
export const CLEAR_ARTIFACT_VALIDATION_WARNINGS = 'CLEAR_ARTIFACT_VALIDATION_WARNINGS';
export const SAVE_ARTIFACT_REQUEST = 'SAVE_ARTIFACT_REQUEST';
export const SAVE_ARTIFACT_SUCCESS = 'SAVE_ARTIFACT_SUCCESS';
export const SAVE_ARTIFACT_FAILURE = 'SAVE_ARTIFACT_FAILURE';
export const PUBLISH_ARTIFACT_REQUEST = 'PUBLISH_ARTIFACT_REQUEST';
export const PUBLISH_ARTIFACT_SUCCESS = 'PUBLISH_ARTIFACT_SUCCESS';
export const PUBLISH_ARTIFACT_FAILURE = 'PUBLISH_ARTIFACT_FAILURE';
export const UPDATE_PUBLISH_ENABLED = 'UPDATE_PUBLISH_ENABLED';

// ------------------------- PATIENTS ------------------------------------- //

export const PATIENTS_REQUEST = 'PATIENTS_REQUEST';
export const LOAD_PATIENTS_SUCCESS = 'LOAD_PATIENTS_SUCCESS';
export const LOAD_PATIENTS_FAILURE = 'LOAD_PATIENTS_FAILURE';
export const PATIENT_REQUEST = 'PATIENT_REQUEST';
export const LOAD_PATIENT_SUCCESS = 'LOAD_PATIENT_SUCCESS';
export const LOAD_PATIENT_FAILURE = 'LOAD_PATIENT_FAILURE';
export const ADD_PATIENT_REQUEST = 'ADD_PATIENT_REQUEST';
export const ADD_PATIENT_SUCCESS = 'ADD_PATIENT_SUCCESS';
export const ADD_PATIENT_FAILURE = 'ADD_PATIENT_FAILURE';
export const DELETE_PATIENT_REQUEST = 'DELETE_PATIENT_REQUEST';
export const DELETE_PATIENT_SUCCESS = 'DELETE_PATIENT_SUCCESS';
export const DELETE_PATIENT_FAILURE = 'DELETE_PATIENT_FAILURE';
export const SAVE_PATIENT_REQUEST = 'SAVE_PATIENT_REQUEST';
export const SAVE_PATIENT_SUCCESS = 'SAVE_PATIENT_SUCCESS';
export const SAVE_PATIENT_FAILURE = 'SAVE_PATIENT_FAILURE';

// ------------------------- TEMPLATES ------------------------------------- //

export const TEMPLATES_REQUEST = 'TEMPLATES_REQUEST';
export const LOAD_TEMPLATES_SUCCESS = 'LOAD_TEMPLATES_SUCCESS';
export const LOAD_TEMPLATES_FAILURE = 'LOAD_TEMPLATES_FAILURE';

// ------------------------- VALUE SETS ------------------------------------- //

export const VALUE_SETS_REQUEST = 'VALUE_SETS_REQUEST';
export const LOAD_VALUE_SETS_SUCCESS = 'LOAD_VALUE_SETS_SUCCESS';
export const LOAD_VALUE_SETS_FAILURE = 'LOAD_VALUE_SETS_FAILURE';

// ------------------------- VSAC ------------------------------------------- //

export const VSAC_LOGIN_REQUEST = 'VSAC_LOGIN_REQUEST';
export const VSAC_LOGIN_SUCCESS = 'VSAC_LOGIN_SUCCESS';
export const VSAC_LOGIN_FAILURE = 'VSAC_LOGIN_FAILURE';
export const SET_VSAC_AUTH_STATUS = 'SET_VSAC_AUTH_STATUS';
export const VSAC_SEARCH_REQUEST = 'VSAC_SEARCH_REQUEST';
export const VSAC_SEARCH_SUCCESS = 'VSAC_SEARCH_SUCCESS';
export const VSAC_SEARCH_FAILURE = 'VSAC_SEARCH_FAILURE';
export const VSAC_DETAILS_REQUEST = 'VSAC_DETAILS_REQUEST';
export const VSAC_DETAILS_SUCCESS = 'VSAC_DETAILS_SUCCESS';
export const VSAC_DETAILS_FAILURE = 'VSAC_DETAILS_FAILURE';
export const VALIDATE_CODE_REQUEST = 'VALIDATE_CODE_REQUEST';
export const VALIDATE_CODE_SUCCESS = 'VALIDATE_CODE_SUCCESS';
export const VALIDATE_CODE_FAILURE = 'VALIDATE_CODE_FAILURE';
export const VALIDATE_CODE_RESET = 'VALIDATE_CODE_RESET';

// ------------------------- MODIFIERS ------------------------------------- //

export const CONVERSION_FUNCTIONS_REQUEST = 'CONVERSION_FUNCTIONS_REQUEST';
export const LOAD_CONVERSION_FUNCTIONS_SUCCESS = 'LOAD_CONVERSION_FUNCTIONS_SUCCESS';
export const LOAD_CONVERSION_FUNCTIONS_FAILURE = 'LOAD_CONVERSION_FUNCTIONS_FAILURE';

// ------------------------- EXTERNAL CQL ---------------------------------- //

export const EXTERNAL_CQL_LIST_REQUEST = 'EXTERNAL_CQL_LIST_REQUEST';
export const LOAD_EXTERNAL_CQL_LIST_SUCCESS = 'LOAD_EXTERNAL_CQL_LIST_SUCCESS';
export const LOAD_EXTERNAL_CQL_LIST_FAILURE = 'LOAD_EXTERNAL_CQL_LIST_FAILURE';
export const EXTERNAL_CQL_LIBRARY_REQUEST = 'EXTERNAL_CQL_LIBRARY_REQUEST';
export const LOAD_EXTERNAL_CQL_LIBRARY_SUCCESS = 'LOAD_EXTERNAL_CQL_LIBRARY_SUCCESS';
export const LOAD_EXTERNAL_CQL_LIBRARY_FAILURE = 'LOAD_EXTERNAL_CQL_LIBRARY_FAILURE';
export const ADD_EXTERNAL_CQL_LIBRARY_REQUEST = 'ADD_EXTERNAL_CQL_LIBRARY_REQUEST';
export const ADD_EXTERNAL_CQL_LIBRARY_SUCCESS = 'ADD_EXTERNAL_CQL_LIBRARY_SUCCESS';
export const ADD_EXTERNAL_CQL_LIBRARY_FAILURE = 'ADD_EXTERNAL_CQL_LIBRARY_FAILURE';
export const DELETE_EXTERNAL_CQL_LIBRARY_REQUEST = 'DELETE_EXTERNAL_CQL_LIBRARY_REQUEST';
export const DELETE_EXTERNAL_CQL_LIBRARY_SUCCESS = 'DELETE_EXTERNAL_CQL_LIBRARY_SUCCESS';
export const DELETE_EXTERNAL_CQL_LIBRARY_FAILURE = 'DELETE_EXTERNAL_CQL_LIBRARY_FAILURE';
