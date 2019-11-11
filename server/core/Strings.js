const ADD_USER_ERROR = "Unable to add user.";
const ACCOUNT_ALREADY_ACTIVATED = "app/accountActivated";
const ACCOUNT_ACTIVE = "app/activateAccount";
const TEMPLATE_OF_UPLOAD_REPORT = "app/emailTemplates/uploadReport";
const ROLE_USER = "user";
const ROLE_ADMIN = "admin";
const ROLE_OWNER = "owner";
const SHIFT = {
  DAY: "day",
  MORNING: "morning",
  NIGHT: "night",
};
const STATUS = {
  PENDING: "pending",
  APPROVED: "approved",
  REJECTED: "rejected",
  SERVED: "served",
};

module.exports = {
  SHIFT,
  STATUS,
  ACCOUNT_ACTIVE,
  ACCOUNT_ALREADY_ACTIVATED,
  ADD_USER_ERROR,
  TEMPLATE_OF_UPLOAD_REPORT,
  ROLE_USER,
  ROLE_ADMIN,
  ROLE_OWNER,
};
