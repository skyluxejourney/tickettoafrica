import type { AirlineData } from '../airlines-data';
import { ethiopianAirlinesData } from './ethiopian-airlines';
import { egyptAirData } from './egyptair';

export const airlinesDataMap: Record<string, AirlineData> = {
  'ethiopian-airlines': ethiopianAirlinesData,
  'egyptair': egyptAirData,
};

export {
  ethiopianAirlinesData,
  egyptAirData,
};

export default airlinesDataMap;