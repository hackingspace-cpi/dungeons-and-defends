import { Turret } from "./Turret";
import { Gameobject } from "../Gameobject";
import { InsideTavern } from "./InsideTavern";
import { Placer } from "./Placer";
import { gameobjects, placer, goldValue } from "../index";

export class InsideTavernButton extends Gameobject {
  xpos = 100;
  ypos = 600;
  width = 50;
  height = 50;
  constructor() {
    super(6);
  }
  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#752904";
    ctx.fillRect(this.xpos, this.ypos, this.width, this.height);
  }

  onClick(event: MouseEvent) {
    let xPosInField: boolean =
      event.offsetX <= this.xpos + this.width && event.offsetX >= this.xpos;
    let yPosInField: boolean =
      event.offsetY <= this.ypos + this.height && event.offsetY >= this.ypos;
    if (
      xPosInField &&
      yPosInField &&
      goldValue.gold >= 10 &&
      placer.turret === null
    ) {
      placer.turret = new Turret();
      goldValue.gold = goldValue.gold - 10;
    }
  }
} // immer wenn dieser Knopf gedrückt wird soll ein neuer turret an der Maus gespawnt werden
