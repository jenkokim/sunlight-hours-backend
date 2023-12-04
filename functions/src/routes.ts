import {Router} from "express";
import {DateTime} from "luxon";
import {getSunriseSunset} from "./sunrise-sunset";
import cors from "cors";
const daylightsRoutes = (_router: Router) => {
  _router.use(cors());
  _router.route("/daylight").get(async (req, res) => {
    try {
      const {lat, lng, date} = req.query;

      if (typeof lat !== "string" || typeof lng !== "string" || isNaN(Number(lat)) || isNaN(Number(lng))) {
        res.status(400).send("Latitude or Longitude not valid!");
        return;
      }
      if (date === undefined || typeof date !== "string" || !DateTime.fromISO(date).isValid) {
        res.status(400).send("Date not valid!");
        return;
      }

      const data = await getSunriseSunset(Number(lat), Number(lng), date);
      const dayLength = data.results.day_length;
      res.status(200).json({dayLength});
      return;
    } catch (error) {
      console.error((error as Error).message);
      res.status(500).send("Generic Error!");
    }
  });
};

const router = Router();

daylightsRoutes(router);
export default router;
