module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '345448e81eb0807ae20323f2ed8cec9f'),
  },
});
