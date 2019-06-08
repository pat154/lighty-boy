import { RGBColour } from "./ColourWheel";
import { CyncAction } from "../server/SocketServer/cync";

export interface WebSocketAction {
  type: string;
  colour: RGBColour;
  action: CyncAction;
}