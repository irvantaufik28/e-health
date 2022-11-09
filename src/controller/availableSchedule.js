const resData = require('../helper/response');

module.exports = {
  addAvailableSchedule: async (req, res, next) => {
    try {
      const schedule = {
        docterValidationId: req.body.docterValidationId,
        docterId: req.user.id,
        dayNameId: req.body.dayNameId,
        time: null,
      };

      const result = await req.availableScheduleUC.addAvailableSchedule(schedule);

      if (!result.isSuccess) {
        return res
          .status(result.statusCode)
          .json(resData.failed(result.reason));
      }

      return res.status(result.statusCode).json(resData.success(result.data));
    } catch (error) {
      next(error);
    }
  },

};
